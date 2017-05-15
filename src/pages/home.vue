<template lang="html">
  <div class="container">
    <HomeHeader></HomeHeader>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="item in items" :name="item.name" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '../components/HomeHeader'
import List from '../components/list'
export default {
  data () {
      return {
          items: []
      }
  },
  components: {
    HomeHeader,
    List
  },
  created () {
      this.$http.get('/api/goods').then((data) => {
        console.log(data)
        this.items = data.body.data;
      })
  }
}
</script>

<style  rel="stylesheet/less" lang="less" scoped>
  @import "../assets/less/index";
  .container {  width: 100%;  margin: 0 auto;
    .content {
      .cont-ul { .pt(41);  background-color: #ccc;
        &:after{ content: '';  display: block;  clear: both;  width: 0;  height: 0;}
      }
    }
  }
</style>
