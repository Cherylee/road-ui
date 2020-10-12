<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="108px"
    >
      <el-form-item label="传感器名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入传感器名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="传感器编码" prop="code">
        <el-input
          v-model="queryParams.code"
          placeholder="请输入传感器编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="cyan"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form>

    <el-table v-loading="loading" :data="sensorList">
      <el-table-column label="传感器ID" align="center" prop="id" />
      <el-table-column label="传感器名称" align="center" prop="name" />
      <el-table-column label="传感器编码" align="center" prop="code" />
      <el-table-column label="采集时间" align="center" prop="time" />
      <el-table-column label="检测站点" align="center" prop="site" />
      <el-table-column label="卫星数" align="center" prop="num" />
      <el-table-column label="WGS84-H(m)" align="center" prop="wgsH" />
      <el-table-column label="WGS84-x(m)" align="center" prop="wgsX" />
      <el-table-column label="WGS84-y(m)" align="center" prop="wgsY" />
      <el-table-column label="WGS84-ΔH(mm)" align="center" prop="wgsHmm" />
      <el-table-column label="WGS84-Δx(mm)" align="center" prop="wgsXmm" />
      <el-table-column label="WGS84-Δy(mm)" align="center" prop="wgsYmm" />
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
import { listSensorReal } from "@/api/system/sensor";

export default {
  name: "sensorReal",
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
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询设备列表 */
    getList() {
      this.loading = true;
      setInterval(() => {
        listSensorReal(this.queryParams).then((response) => {
          this.sensorList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      }, 2000);
    },

    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
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