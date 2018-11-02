<template>
  <div class="all">
    <asearch/>
    <bheader/>
    <list/>

    <div class="guide" v-if="$store.state.guide7">
     <h4 class="h1">你看，是不是搜出来了。搜不出来只有两种情况，一种是你普通话不够标准；还一种是这个菜太稀奇了。我们会在后续版本让“I厨神”学会识别我国各地方言，以及收录更多稀奇古怪的美食。</h4>
     <img class="img1" src="./img/6-语言查询.png" alt="">
     <button @click="end">朕知道了</button>
   </div>
  </div>
</template>

<script>
import asearch from "./a-search";
import bheader from "./b-header";
import list from "./list";
export default {
  components: {
    asearch,
    bheader,
    list
  },
  mounted() {

  },
  methods: {
    end() {
      localStorage.setItem('guide7',0)
      this.$store.commit('setguide7',false)
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  position: relative;
  height: 100%;

  .guide {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;

    .h1 {
      position: fixed;
      top: px2rem(80);
      left: 50%;
      margin-left: -42%;
      color: #fff;
      font-size: px2rem(26);
      letter-spacing: px2rem(4);
      line-height: px2rem(36);
      width: 84%;
      font-weight: normal;
      white-space: normal;
    }

    .img1 {
      position: fixed;
      top: px2rem(260);
      right: 50%;
      margin-left: px2rem(-20);
      width: px2rem(40);
    }

    button {
      position: fixed;
      top: px2rem(1080);
      left: 50%;
      margin-left: px2rem(-90);
      width: px2rem(180);
      height: px2rem(54);
      color: #fff;
      font-size: px2rem(26);
      border: 1px solid #fff;
      border-radius: 10px;
      background: transparent;
      outline: none;
    }
  }
}
</style>


