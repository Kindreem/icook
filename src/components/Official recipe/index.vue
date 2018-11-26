<template>
  <div class="all">
    <oheader :value='getlist.cbname'/>
    <otop :items='items' :tops='tops' :getlist='getlist'/>
    <!-- <upload/> -->
    <!-- <slider :name='name1'/>
    <slider :name='name2'/> -->
    <div class="guide" v-if="$store.state.guide5">
     <h4 class="h1">这个神奇的按钮只要你一按，“I厨神”就会迫不及待的用不太流利的机器人口音普通话告诉你这道菜要怎么做。这个可以支持边听语音边做饭的功能我们自己非常的喜欢，我们后续会让这个功能变得越来越好用。<br>如果你嫌他说话实在是别扭，再点一下“I厨神”就闭嘴了。</h4>
     <h4 class="h2">i厨神官方菜谱都将采用插画模式，旨在抛砖引玉激发各位烹饪高手的惊世大作。上传您的图文作品，将获得各种奖励，还能提升您的烹饪段位！</h4>
     <img class="img1" src="./img/9-官方菜.png" alt="">
     <img class="img2" src="./img/9-官方菜2.png" alt="">
     <img class="img3" src="./img/9-官方菜.png" alt="">
     <button @click="end">朕知道了</button>
   </div>
  </div>
</template>

<script>
import { getcook, getcookbookbyname } from "@/api";
import oheader from "../public/header";
import otop from "./o-top";
// import upload from '../public/upload'
// import slider from '../public/slider'
export default {
  components: {
    oheader,
    otop
    // upload,
    // slider,
  },
  data() {
    return {
      value: "爆炒麻辣兔",
      name1: "关联菜谱（按用料关联）",
      name2: "关联菜谱（按做法关联）",
      items: [
        {
          img: require("./img/爆炒麻辣兔/0爆炒麻辣兔4-3.jpg")
        },
        {
          img: require("./img/爆炒麻辣兔/1爆炒麻辣兔16-9.jpg")
        },
        {
          img: require("./img/爆炒麻辣兔/2爆炒麻辣兔16-9.jpg")
        },
        {
          img: require("./img/爆炒麻辣兔/3爆炒麻辣兔16-9 .jpg")
        }
      ],
      tops: {
        index: require("./img/爆炒麻辣兔/麻辣兔封面.jpg"),
        text:
          "实在是很香很下饭的肉肉！而且兔肉高蛋白、低脂肪、性凉味甘，用麻辣的做法做出来吃起来也不会上火哦！女孩子多吃兔肉据说还可以美容哎！居家过日子，不可能像餐厅一样搞上一盆红辣椒看着过瘾吃一顿受不了，还是细水长流，麻辣也好、咸淡也好，适中即可。这样既满足了口舌之欲，又不会给肠胃带来很重的负担。"
      },
      getlist: "", //通过id获取官方菜谱的数据
      // namelist: ''  //通过名字
    };
  },
  created() {
    let cbid = this.$route.params.id;
    if (!isNaN(cbid)) {
      getcook(cbid).then(res => {
        this.getlist = res.data;
        console.log(this.getlist);
        this.$store.commit("setcbname", this.getlist.cbname);
        // localStorage.setItem("cbname", this.getlist.cbname);    //菜谱名字
      });
    } else {
      getcookbookbyname(cbid).then(res => {
        this.getlist = res.data;
        console.log(this.getlist);
        this.$store.commit("setcbname", this.getlist.cbname);
        // localStorage.setItem("cbname", this.getlist.cbname);    //菜谱名字
      });
    }
  },
  mounted() {
    if (localStorage.getItem("guide5") == 1) {
      this.$store.commit("setguide5", true);
    }
  },
  methods: {
    end() {
      localStorage.setItem("guide5", 0);
      this.$store.commit("setguide5", false);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  position: relative;
  height: 100%;
}

.guide {
  position: absolute;
  top: 0px;
  // bottom 0px
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;

  .h1 {
    position: absolute;
    // top: px2rem(456);
    top: 10%;
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

  .h2 {
    position: absolute;
    // bottom: px2rem(300) !important;
    top 85%
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
    position: absolute;
    // top: px2rem(686);
    top 17%
    right: px2rem(131.5);
    margin-left: px2rem(-25);
    width: px2rem(50);
  }

  .img2 {
    position: absolute;
    // top: px2rem(1096);
    top 27%
    left: 50%;
    margin-left: px2rem(-33);
    width: px2rem(66);
  }

  .img3 {
    position: absolute;
    // bottom: px2rem(146);
    top 90%
    // bottom -50%
    right: 50%;
    margin-left: px2rem(-25);
    width: px2rem(50);
  }

  button {
    position: absolute;
    bottom: 18%;
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
</style>

