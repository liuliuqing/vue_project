<template lang="html">
  <div class="head">
    <div class="img-box"><img src="http://www.wow-trend.com/assets/images/logo-64.png?v=2.0.2.48"></div>
    <h2>WOW-TREND</h2>
    <a href="">登录/注册</a>
  </div>
</template>

<script>
export default {
}
</script>

<style rel="stylesheet/less" lang="less"  scoped>
  @import "../assets/less/index";
  .head{ width: 100%;position: fixed;top:0;background: #fff;z-index:1;.h(41);.lh(41);text-align: center;
    .img-box{ .w(25);.l(10); position: absolute;height: 100%;align-items: center;display:flex;
      img{width: 100%}
    }
    h2{.fs(14)}
    a{position: absolute;.r(10); top: 0;.fs(14);color:#000;}
  }
</style>
