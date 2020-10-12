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
                  <div class="l-btn-enter">系统功能1</div>
                </el-col>
                <el-col :md="8">
                  <div class="l-btn-enter">系统功能2</div>
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
                  <el-link
                    class="l-btn-enter"
                    :underline="false"
                    href="/system/index"
                    >进入后台管理系统</el-link
                  >
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
        <!-- 高速路概况 -->
        <div class="data-box1">
          <main-index-border :title="content1.title"></main-index-border>
          <div class="xmglan">
            <div class="intro-box">
              <p>公路介绍：{{ content1.detailData.description }}</p>
              <p>桥的数量：{{ content1.detailData.bridgeNum }}</p>
              <p>隧道数量：{{ content1.detailData.tunnelNum }}</p>
              <p>监测点数量：{{ content1.detailData.monitoringPointNum }}</p>
              <p>传感器数量：{{ content1.detailData.sensor }}</p>
            </div>
          </div>
        </div>
        <!-- 车流量统计 -->
        <div class="data-box1">
          <main-index-border :title="content3.title"></main-index-border>
          <div class="xmglan">
            <div class="chart-wrapper">
              <line-chart
                v-if="content3.detailData.legendData"
                :chart-data="content3.detailData"
              />
              <!-- <raddar-chart /> -->
            </div>
          </div>
        </div>
      </el-col>
      <!-- 中间 -->
      <el-col :md="14">
        <div class="data-box1">
          <main-index-border :title="content5.title"></main-index-border>
          <!-- <img src="@/assets/image/map.jpg" alt /> -->
          <map-box mapWidth="100%" mapHeight="720px"></map-box>
        </div>
      </el-col>
      <!-- 右边 -->
      <el-col :md="5">
        <!-- 传感器监测数据统计 -->
        <div class="data-box1">
          <main-index-border :title="content2.title"></main-index-border>
          <div class="xmglan">
            <div class="chart-wrapper">
              <bar-chart
                v-if="content2.detailData.legendData"
                :chart-data="content2.detailData"
              />
            </div>
          </div>
        </div>
        <!-- 传感器监测数据实时统计 -->
        <div class="data-box1">
          <main-index-border :title="content4.title"></main-index-border>
          <div class="xmglan">
            <div class="">
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
              <!-- <pie-chart /> -->
              <!-- <el-table  :data="content4.detailData">
                <el-table-column
                  prop="name"
                  label="传感器名称"
                  width="260"
                ></el-table-column>
                <el-table-column prop="time" label="采集时间" width="200"
                  ><template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                  </template></el-table-column
                >
                <el-table-column
                  prop="site"
                  label="采集点位置"
                  width="100"
                ></el-table-column>
                <el-table-column
                  label="采集数据变化量"
                  align="center"
                  prop="changeSite"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  label="预警情况"
                  align="center"
                  prop="situation"
                  width="200"
                >
                </el-table-column>
              </el-table> -->
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
import { roadInfo, realData } from "@/api/system/mainIndex";

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
        title: "高速路概况",
        detailData: {},
      },
      content2: {
        title: "传感器监测数据统计",
        detailData: {},
      },
      content3: {
        title: "车流量统计",
        detailData: {},
      },
      content4: {
        title: "传感器监测数据实时统计",
        detailData:{}
      },
      content5: {
        title: "MapBox地图",
      },
      loading: false,
    };
  },
  created() {
    this.getRoadInfo();
    this.getRealData();
  },
  methods: {
    getRoadInfo() {
      roadInfo().then((res) => {
        this.content1.detailData = res.data.info;
        this.content2.detailData = res.data.sensor;
        this.content3.detailData = res.data.car;
      });
    },
    getRealData() {
      setInterval(() => {
        realData().then((res) => {
          this.content4.detailData = res.data;
        });
      }, 1000);
    },
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

<style rel="stylesheet/scss" lang="scss">
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
  color: #2578b3;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
}
.main-content {
  background: #000c3b;
  padding: 0 20px;
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
      padding: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>