<template>
  <div class="map-box" style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "mapBox",
  props: {
    mapWidth: {
      type: String,
    },
    mapHeight: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      mapboxgl.accessToken = "pk.eyJ1IjoiaG9uZ2N1aWxpbmciLCJhIjoiY2tmZ2ZrMG1mMDN1NTMzcGtyZDM3OTRwayJ9.sp6TnDUoZSEIf91q1-u_HA";
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/hongcuiling/ckfgfuh3x20jl19prpf4try2p",
      });
    },
  },
  computed: {
    mapSize() {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight,
      };
      return styleObj;
    },
  },
};
</script>

<style>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
</style>