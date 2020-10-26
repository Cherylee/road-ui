<template>
  <div class="main-content">
    <!-- 顶部 -->
    <el-row>
      <el-col :md="24">
        <div class="top-box">
          <el-row>
            <el-col :md="9">
              <el-row :gutter="20" class="top-box-btn">
                <el-col :md="8">
                  <el-link
                    class="l-btn-enter"
                    :underline="false"
                    href="/system/index"
                    >进入后台管理系统</el-link
                  >
                </el-col>
                <el-col :md="8">
                </el-col>
              </el-row>
            </el-col>
            <el-col :md="6">
              <div class="top-box-title">
                <div class="l-tip1"></div>
                <div class="l-tip"></div>
                <div class="main-title">
                  <p>高速公路监测系统</p>
                </div>
                <div class="r-tip"></div>
                <div class="r-tip1"></div>
              </div>
            </el-col>
            <el-col :md="9">
              <el-row :gutter="20" class="top-box-btn">
                <el-col :md="8">
                  
                </el-col>
                <el-col :md="8">
                  <el-link
                    class="l-btn-enter"
                    :underline="false"
                    @click.native="logout"
                    >退出系统</el-link
                  >
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!-- 主要内容 -->
    <el-row :gutter="20">
      <!-- 左边 -->
      <el-col :md="5">
        <!-- 桥梁健康 -->
        <div class="data-box1">
          <main-index-border :title="content1.title" :url="content1.url"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <p class="main-p">传感器:{{ content1.detailData.sensorNum }}个</p>
              <div class="intro-box-text-box">
                <p>正常：{{ content1.detailData.normalNum }}</p>
                <p>待维护：{{ content1.detailData.maintainNum }}</p>
              </div>
              <h3 class="title-main">异常数据</h3>
              <ul class="data-main-box" v-if="content1.detailData.datalist">
                <li
                  v-for="(item, index) in content1.detailData.datalist"
                  :key="index"
                >
                  {{ index + 1 }}：{{ item.content }}
                </li>
              </ul>
              <p v-else class="has-no-text">暂无数据</p>
            </div>
          </div>
        </div>
        <!-- 边坡岩土 -->
        <div class="data-box1">
          <main-index-border :title="content3.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <p class="main-p">传感器:{{ content3.detailData.sensorNum }}个</p>
              <div class="intro-box-text-box">
                <p>正常：{{ content3.detailData.normalNum }}</p>
                <p>待维护：{{ content3.detailData.maintainNum }}</p>
              </div>
              <h3 class="title-main">报警数据</h3>
              <ul class="data-main-box" v-if="content3.detailData.datalist">
                <li
                  v-for="(item, index) in content3.detailData.datalist"
                  :key="index"
                >
                  {{ index + 1 }}：{{ item.content }}
                </li>
              </ul>
              <p v-else class="has-no-text">暂无数据</p>
            </div>
            <!-- <div class="chart-wrapper">
              <line-chart
                v-if="content3.detailData.legendData"
                :chart-data="content3.detailData"
              />
            </div> -->
          </div>
        </div>
        <!-- 交通安全设施撞击预警 -->
        <div class="data-box1">
          <main-index-border :title="content7.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <br>
              <h3 class="title-main">数据</h3>
              <ul class="data-main-box" v-if="content7.detailData">
                <li
                  v-for="(item, index) in content7.detailData"
                  :key="index"
                >
                  {{ index + 1 }}：{{ item.content }}
                </li>
              </ul>
              <p v-else class="has-no-text">暂无数据</p>
            </div>
            <!-- <div class="chart-wrapper">
              <line-chart
                v-if="content3.detailData.legendData"
                :chart-data="content3.detailData"
              />
            </div> -->
          </div>
        </div>
        
        <!-- 路侧智能交互预警 -->
        <div class="data-box1">
          <main-index-border :title="content8.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <br>
              <h3 class="title-main">数据</h3>
              <ul class="data-main-box" v-if="content8.detailData">
                <li
                  v-for="(item, index) in content8.detailData"
                  :key="index"
                >
                  {{ index + 1 }}：{{ item.content }}
                </li>
              </ul>
              <p v-else class="has-no-text">暂无数据</p>
            </div>
            <!-- <div class="chart-wrapper">
              <line-chart
                v-if="content3.detailData.legendData"
                :chart-data="content3.detailData"
              />
            </div> -->
          </div>
        </div>
      </el-col>
      <!-- 中间 -->
      <el-col :md="14">
        <div class="data-box1">
          <main-index-border :title="content5.title"></main-index-border>
          <!-- <img src="@/assets/image/map.jpg" alt /> -->
          <map-box mapWidth="100%" mapHeight="550px"></map-box>
        </div>
        <!-- 交通事故汇总 -->
        <div class="data-box1">
          <main-index-border :title="content6.title"></main-index-border>
          <br>
          <el-table v-loading="loading" :data="accidentListData">
            <el-table-column label="序号" align="center" prop="sort" />
            <el-table-column label="事故原因" align="center" prop="reason" />
            <el-table-column label="发生地点" align="center" prop="address" />
            <el-table-column label="发生时间" align="center" prop="time" />
            <el-table-column label="处理情况" align="center" prop="situation" />
            <el-table-column label="办理人员" align="center" prop="handle" />
            <el-table-column
              label="办理时间"
              align="center"
              prop="processingTime"
            />
          </el-table>
          <pagination
            v-show="total > 0"
            :total="total"
            :page.sync="queryParams.pageNum"
            :limit.sync="queryParams.pageSize"
            @pagination="getAccidentList"
          />
        </div>
      </el-col>
      <!-- 右边 -->
      <el-col :md="5">
        <!-- 视频监控 -->
        <div class="data-box1">
          <main-index-border :title="content2.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <div class="intro-box-text-box">
                <p>设备：{{ content2.detailData.sensorNum }}</p>
                <p>道路：{{ content2.detailData.roadNum }}</p>
                <p>服务区：{{ content2.detailData.serviceNum }}</p>
              </div>
              <div class="intro-box-text-box">
                <p>正常：{{ content2.detailData.normalNum }}</p>
                <p>待维护：{{ content2.detailData.maintainNum }}</p>
              </div>
              <h3 class="title-main">异常数据</h3>
              <ul class="data-main-box" v-if="content2.detailData.datalist">
                <li
                  v-for="(item, index) in content2.detailData.datalist"
                  :key="index"
                >
                  {{ index + 1 }}：{{ item.content }}
                </li>
              </ul>
              <p v-else class="has-no-text">暂无数据</p>
            </div>
            <!-- <div class="chart-wrapper">
              <bar-chart
                v-if="content2.detailData.legendData"
                :chart-data="content2.detailData"
              />
            </div> -->
          </div>
        </div>
        <!-- 传感器监测数据实时统计 -->
        <div class="data-box1">
          <main-index-border :title="content4.title"></main-index-border>
          <div class="xmglan">
            <!-- <div class="">
              <table class="main-table">
                <tr class="">
                  <th>传感器名称</th>
                  <th>采集时间</th>
                  <th>采集点位置</th>
                  <th>采集数据变化量</th>
                  <th>预警情况</th>
                </tr>
                <tr v-for="(list, index) in content4.detailData" :key="index">
                  <td>{{ list.name }}</td>
                  <td>{{ list.time }}</td>
                  <td class="red">{{ list.site }}</td>
                  <td>{{ list.changeSite }}</td>
                  <td>{{ list.situation }}</td>
                </tr>
              </table>
              
            </div> -->
            <div class="intro-box">
              <br>
              <p class="has-no-text">程序员正努力开发中，敬请期待。。。</p>
            </div>
          </div>
        </div>
        
         <!-- 智慧驿站 -->
        <div class="data-box1">
          <main-index-border :title="content9.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <br>
              <p class="has-no-text">程序员正努力开发中，敬请期待。。。</p>
            </div>
          </div>
        </div>
         <!-- 可变信息发布 -->
        <div class="data-box1">
          <main-index-border :title="content10.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <br>
              <p class="has-no-text">程序员正努力开发中，敬请期待。。。</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mainIndexBorder from "@/components/BorderMainIndex";
import PieChart from "@/views/dashboard/PieChart";
import RaddarChart from "@/views/dashboard/RaddarChart";
import BarChart from "@/views/dashboard/BarChart";
import LineChart from "@/views/dashboard/LineChart";
import MapBox from "@/components/MapBox";
import { healthInfo, slopeInfo,videoInfo,safeInfo,intelligenceInfo, accidentList } from "@/api/system/mainIndex";

export default {
  name: "mainIndex",
  components: {
    mainIndexBorder,
    PieChart,
    RaddarChart,
    BarChart,
    MapBox,
    LineChart,
  },
  data() {
    return {
      content1: {
        title: "桥梁健康",
        detailData: {},
        url:'/health/info'
      },
      content2: {
        title: "视频监控",
        detailData: {},
      },
      content3: {
        title: "边坡岩土",
        detailData: {},
        url:'/slope/info'
      },
      content4: {
        title: "智能道桥冰雪预警处置",
        detailData: {},
      },
      content5: {
        title: "MapBox地图",
      },
      content6: {
        title: "交通事故汇总",
        detailData: {},
      },
      content7: {
        title: "交通安全设施撞击预警",
        detailData: {},
      },
      content8: {
        title: "路侧智能交互预警",
        detailData: {},
      },
      content9: {
        title: "智慧驿站",
        detailData: {},
      },
      content10: {
        title: "可变信息发布",
        detailData: {},
      },
      loading: false,
      // 总条数
      total: 0,
      accidentListData: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  created() {
    this.getHealthInfo();
    this.getSlopeInfo();
    this.getVideoInfo();
    this.getSafeInfo();
    this.getIntelligenceInfo();
    // this.getRealData();
    this.getAccidentList();
  },
  methods: {
    getHealthInfo() {
      healthInfo().then((res) => {
        this.content1.detailData = res.data;
      });
    },
    getSlopeInfo() {
      slopeInfo().then((res) => {
        this.content3.detailData = res.data;
      });
    },
    getVideoInfo() {
      videoInfo().then((res) => {
        this.content2.detailData = res.data;
      });
    },
    getSafeInfo() {
      safeInfo().then((res) => {
        console.log(res)
        this.content7.detailData = res.data;
      });
    },
    getIntelligenceInfo() {
      intelligenceInfo().then((res) => {
        this.content8.detailData = res.data;
      });
    },
    getAccidentList() {
      this.loading = true;
      accidentList().then((res) => {
        this.accidentListData = res.rows;
        this.total = res.total;
        this.loading = false;
      });
    },
    // getRealData() {
    //   setInterval(() => {
    //     realData().then((res) => {
    //       this.content4.detailData = res.data;
    //     });
    //   }, 1000);
    // },
    async logout() {
      this.$confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$store.dispatch("LogOut").then(() => {
          location.href = "/index";
        });
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scope>
body {
  background: #000c3b;
}
%shadow-common {
  -webkit-box-shadow: #07417a 0 0 10px;
  -moz-box-shadow: #07417a 0 0 10px;
  box-shadow: inset 0 0 30px #07417a;
}
%flex-common {
  display: flex;
  justify-content: center;
  align-items: center;
}
%tip-common {
  width: 20px;
  height: 30px;
  border-top: 1px solid #75c1f79e;
}
%tip1-common {
  width: 6px;
  height: 13px;
  background: #75c1f7ed;
}
%btn-common {
  width: 150px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #75c1f74a;
  color: #4da3de;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
}
.main-content {
  background: #000c3b;
  padding: 0 20px 20px 20px;
  .top-box {
    .top-box-title {
      @extend %flex-common;
      height: 80px;
      background: #000c3b;
      text-align: center;
      .main-title {
        @extend %shadow-common;
        border: 2px solid #032d60;
        width: 306px;
        height: 50px;
        line-height: 50px;
        color: #93cef9;
        font-weight: 800;
        font-family: cursive;
        font-size: 28px;
        p {
          padding: 0;
          margin: 0;
        }
      }
      .r-tip {
        @extend %tip-common;
        @extend %shadow-common;
        border-radius: 0 5px 5px 0;
        margin-left: 5px;
        border-right: 1px solid #75c1f79e;
      }
      .r-tip1 {
        @extend %tip1-common;
        border-radius: 0 2px 2px 0;
      }
      .l-tip {
        @extend %tip-common;
        @extend %shadow-common;
        border-radius: 5px 0 0 5px;
        margin-right: 5px;
        border-left: 1px solid #75c1f79e;
      }
      .l-tip1 {
        @extend %tip1-common;
        border-radius: 2px 0 0 2px;
      }
    }
    .top-box-btn {
      height: 80px;
      @extend %flex-common;
      .l-btn-enter {
        @extend %shadow-common;
        @extend %btn-common;
      }
      .l-btn-enter:hover {
        color: #93cef9;
      }
    }
  }
  .data-box1 {
    position: relative;
    margin-top: 20px;
    padding: 12px;
    @extend %shadow-common;
    border: 2px solid #032d60;
    position: relative;
    .chart-wrapper {
      padding: 15px;
      margin-bottom: 12px;
    }
    .main-table {
      color: #ffffff;
      font-size: 12px;
      margin-top: 20px;
      border: 1px solid #0d9dc3d6;
      text-align: left;
      th {
        font-weight: 200;
        color: #0d9dc3d6;
        padding: 3px 0;
      }
      td {
        padding: 3px 3px;
        color: #0d9dc3d6;
        // border-right: 1px solid #0d9dc3d6;
      }
      .red {
        color: #e64242;
      }
    }
    img {
      width: 100%;
    }
    .intro-box {
      color: #ffffff;
      font-size: 14px;
      padding: 0px 15px 15px 15px;
      .intro-box-text-box {
        width: 70%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.title-main {
  font-size: 14px;
  margin-top: 0;
  color: #ffffff;
  background: #173b71;
  padding: 9px;
  margin: 0;
  text-align: center;
}
.data-main-box {
  background-color: #032558;
  color: #ffffff;
  padding: 10px 0;
  margin: 0;
  li {
    padding: 10px;
    list-style: none;
    border-bottom: 1px solid #173b71;
  }
}
.main-p {
  margin-bottom: 0;
}
::v-deep .el-table .el-table__header-wrapper th {
  background-color: #032558;
  color: #a9d7ff;
}
::v-deep .el-table tr {
  background-color: #021c4e;
  color: #ffffff;
}
::v-deep .el-table--enable-row-transition .el-table__body td {
  border-bottom: 1px solid #173b71;
}
::v-deep .pagination-container[data-v-72233bcd] {
  background: none;
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #597194;
}
p.has-no-text {
    background: #032558;
    margin: 0;
    padding: 16px;
    text-align: center;
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>