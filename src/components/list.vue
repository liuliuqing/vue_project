<template lang="html">
  <li class="goods-list">
    <router-link to="/detail"  class="goods-list-link">
      <div class="img-box"><img :src="img" alt=""></div>
      <div class="info">{{ title }} | {{ name}}</div>
      <div class="op-box"></div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['name', 'title', 'img']
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../assets/less/index";
  .goods-list {  width: 50%;  float: left;  box-sizing: border-box;.h(105);position: relative;overflow: hidden;
      .img-box{overflow: hidden;
        img{width: 100%}
      }
      .info{top: 15%;position: absolute;left: 5%}
      .op-box{position: absolute; width: 100%;  height: 100%;  top: 0;  left: 0;  background: #000;    opacity: 0.3;}
      &:first-child{width: 100%;}
  }

</style>
