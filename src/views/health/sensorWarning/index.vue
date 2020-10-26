<template>
  <div class="app-container">
    <el-table v-loading="loading" :data="sensorList">
      <!-- <el-table-column label="传感器ID" align="center" prop="id" /> -->
      <el-table-column label="站点名称" align="center" prop="deptName" />
      <el-table-column label="预警原因" align="center" prop="reason" />
      <el-table-column label="预警处理方式" align="center" prop="solve" />
      <el-table-column label="预警发生时间" align="center" prop="time" />
      <el-table-column label="预警状态" align="center" prop="status" />
      <el-table-column label="预警处理情况" align="center" prop="situation" />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { listSensorWarning } from "@/api/health/sensor";
export default {
    name: "sensorWarning",
    data() {
    return {
      // 遮罩层
      loading: true,
      // 总条数
      total: 0,
      // 设备表格数据
      sensorList: [],
      // 显示搜索条件
      showSearch: true,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        code: null,
        type: undefined,
      },
      // 日期范围
      dateRange: [],
      // 统计类型格式字典
      typesOptions: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询设备列表 */
    getList() {
      this.loading = true;
      listSensorWarning(this.queryParams).then((response) => {
        this.sensorList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.dateRange = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },

    /** 导出按钮操作 */
    handleExport() {
      this.download(
        "system/machine/export",
        {
          ...this.queryParams,
        },
        `system_machine.xlsx`
      );
    },
  },
};
</script>

<style>
</style>