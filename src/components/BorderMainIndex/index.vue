<template>
  <div class="main-index-border">
    <div class="topL"></div>
    <div class="topR"></div>
    <div class="bottomL"></div>
    <div class="bottomR"></div>
    <div class="data-title">
      <span class="data-title-left fl">[</span>
      <span class="title"><a :href="url">{{title}}</a></span>
      <span class="data-title-right fr">]</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainIndexBorder",
  props: {
    title: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    url: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
%message-common {
  width: 20px;
  height: 20px;
  position: absolute;
}
$border-width: 1px;
$border-color: #0d9dc3d6;
@mixin topL($width, $color) {
  border-top-width: $width;
  border-top-color: $color;
  border-top-style: solid;
  border-left-width: $width;
  border-left-color: $color;
  border-left-style: solid;
}
@mixin topR($width, $color) {
  border-top-width: $width;
  border-top-color: $color;
  border-top-style: solid;
  border-right-width: $width;
  border-right-color: $color;
  border-right-style: solid;
}
@mixin bottomL($width, $color) {
  border-bottom-width: $width;
  border-bottom-color: $color;
  border-bottom-style: solid;
  border-left-width: $width;
  border-left-color: $color;
  border-left-style: solid;
}
@mixin bottomR($width, $color) {
  border-bottom-width: $width;
  border-bottom-color: $color;
  border-bottom-style: solid;
  border-right-width: $width;
  border-right-color: $color;
  border-right-style: solid;
}
.topL {
  @extend %message-common;
  @include topL($border-width, $border-color);
  top: -2px;
  left: -2px;
}
.topR {
  @extend %message-common;
  @include topR($border-width, $border-color);
  top: -2px;
  right: -2px;
}
.bottomL {
  @extend %message-common;
  @include bottomL($border-width, $border-color);
  bottom: -2px;
  left: -2px;
}
.bottomR {
  @extend %message-common;
  @include bottomR($border-width, $border-color);
  bottom: -2px;
  right: -2px;
}
.data-title {
  background-color: #000c3b;
  width: 215px;
  margin: -18px auto 0 auto;
  color: #26c6f0;
  font-size: 20px;
  text-align: center;
  span {
    color: #033a7d;
  }
  span.title {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    color: #93cef9;
    font-family: cursive;
    font-weight: bold;
  }
}
</style>