<template>
  <div class="video-box">
    <div class="left-box">
      <div
        class="left-box-content"
        :style="{ height: clientHeight }"
        v-if="leftShow"
      >
        <el-checkbox-group
          v-model="equipmentIdList"
          class="left-box-checkbox"
          @change="handleCheckedChange"
        >
          <el-checkbox
            class="left-box-checkbox-text"
            v-for="item in equipmentOptions"
            :key="item.key"
            :label="item.key"
            >{{ item.key }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
      <div v-else class="left-btn" :style="{ height: clientHeight }"></div>
      <div class="right-btn" @click="showLeftBox()"></div>
      <div class="right-btn-content"></div>
    </div>
    <div class="right-box">
      <div
        class="right-box-video"
        v-for="(item, index) in openAddress"
        :key="index"
      >
        <video
          :id="'myPlayer' + index"
          :src="item.url"
          width="600"
          height="400"
          autoplay="true"
          playsInline
          muted  
          webkit-playsinline
        />
        <div class="tool-box">
          <el-button
            type="primary"
            class="one-btn btn"
            @click="goto('4', item.id)"
            >前</el-button
          >
          <el-button type="primary" class="btn" @click="goto('0', item.id)"
            >后</el-button
          >
          <el-button type="primary" class="btn" @click="goto('7', item.id)"
            >左</el-button
          >
          <el-button type="primary" class="btn" @click="goto('1', item.id)"
            >右</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOpenAddress } from "@/api/slope/equipment";
import { start } from "@/api/video";
import { videoSurveillance } from "@/api/slope/sensor";
import ezuikit from "@/utils/ezuikit";
export default {
  name: "videoBox",
  data() {
    return {
      openAddress: [],
      equipmentIdList: ["4"],
      equipmentOptions: [],
      clientHeight: "",
      leftShow: false,
      param:{
        accessToken:'at.5g8v28v2340rhazn7fdlhdgy6ric3c93-4u9bmgidhy-0wz3lv5-297jzffm2',
        deviceSerial:'D76953758',
        channelNo:'1',
        direction:'0',
        speed:'1'
      }
    };
  },
  created() {
    this.openVideo("4");
    this.clientHeight = document.body.clientHeight + "px";
    this.initVideoInfo();
  },
  methods: {
    // 根据设备id获取播放地址
    openVideo(id) {
      getOpenAddress(id).then((res) => {
        console.log(res)
        this.openAddress.push({ id: id, url: res.msg });
        for (const key in this.openAddress) {
          this.initVideo(key);
        }
      });
    },
    // 播放  初始化播放
    initVideo(key) {
      setTimeout(() => {
        var player = new ezuikit.EZUIPlayer("myPlayer" + key);
      }, 0);
    },
    // 左边抽屉显示隐藏
    showLeftBox() {
      this.leftShow = !this.leftShow;
    },
    // 设备列表参数
    initVideoInfo() {
      videoSurveillance().then((res) => {
        this.equipmentOptions = res.data;
      });
    },
    // 选择设备
    handleCheckedChange(value) {
      for (const i in this.equipmentIdList) {
        this.openVideo(this.equipmentIdList[i]);
      }
    },
    // 转动设备 flag:转动参数&id:设备id
    goto(flag, id) {
      this.param['direction']=flag
      start(this.param).then((res) => {
        console.log(res)
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.video-box {
  display: flex;
}

.left-box {
  position: relative;
  display: flex;
  // width: 150px;
  .left-box-content {
    background: rgb(48, 65, 86);
    width: 120px;
    .left-box-checkbox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 10px 20px 10px;
      .left-box-checkbox-text {
        color: #ffffff;
        padding: 15px 0;
      }
    }
  }
  .left-btn {
    width: 15px;
    background: rgb(48, 65, 86);
  }
  .right-btn {
    position: absolute;
    right: 9px;
    margin-top: -50px;
    top: 50%;
    border-radius: 0 10px 10px 0;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #304156;
    cursor: pointer;
  }
  .right-btn-content {
    width: 20px;
  }
}
.right-box {
  // background: #000000;
  padding-top: 25px;
  .right-box-video {
    float: left;
    position: relative;
    &:hover .tool-box {
      display: block;
    }
    .tool-box {
      width: 75px;
      padding: 20px 0px;
      // border: 1px solid red;
      position: absolute;
      top: 25%;
      right: 0px;
      background: #304156;
      .one-btn {
        margin-left: 10px;
      }
      .btn {
        margin-bottom: 10px;
      }
    }
  }
}
</style>