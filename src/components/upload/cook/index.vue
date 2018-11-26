<template>
  <div class="all">
    <add @childByValue="childByValue" @childByValue1="childByValue1" @childByValue2="childByValue2" />
    <cuse @childByValue3="childByValue3"/>
    <cstep @childByValue4="childByValue4"/>
    <send :userBookDto="userBookDto"/>

    <div class="guide" v-if="$store.state.guide1">
     <h4 class="h1">点击可新增一条食材说明。</h4>
     <h4 class="h2">点击可新增一条步骤说明。</h4>
     <img class="img1" src="../img/2-上传菜谱.png" alt="">
     <img class="img2" src="../img/2-上传菜谱.png" alt="">
     <button @click="end">朕知道了</button>
   </div>
  </div>
</template>

<script>
import add from "../add";
import send from "../send";
import cuse from "./c-use.vue";
import cstep from "./c-step.vue";
export default {
  components: {
    add,
    send,
    cuse,
    cstep
  },
  data() {
    return {
      userBookDto: {
        ubdescription: "",
        ubname: "",
        ubthumbimg: "",
        userFoodDtos: "",
        userStepDtos: "",
        userid: ""
      }
    };
  },
  mounted() {
    if(localStorage.getItem('guide1')==1) {
        this.$store.state.guide1=true
    }
  },
  created () {
    let userid = localStorage.getItem("userid");
    this.userBookDto.userid = userid
  },
  methods: {
    end() {
      localStorage.setItem('guide1',0)
      if(localStorage.getItem('guide1')==0) {
        this.$store.state.guide1=false
    }
    },
    childByValue: function(ubthumbimg) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubthumbimg = ubthumbimg;
      // console.log(this.ubthumbimg);
    },
    childByValue1: function(ubname) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubname = ubname;
      // console.log(this.ubname);
    },
     childByValue2: function(ubdescription) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubdescription = ubdescription;
      // console.log(this.ubdescription);
      // console.log(this.userFoodDtos);

    },
    childByValue3: function(userFoodDtos) {
      // childValue就是子组件传过来的值
      this.userBookDto.userFoodDtos = userFoodDtos;
      // console.log(this.userFoodDtos);
    },
    childByValue4: function(userStepDtos) {
      // childValue就是子组件传过来的值
      this.userBookDto.userStepDtos = userStepDtos;
      // console.log(this.userStepDtos);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl';
.all {
  position: relative;
  height: 100%;
  // margin-top -40px
}
.guide {
  position absolute
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  .h1 {
    position absolute
    // top px2rem(596)
    top 20%
    left: 50%
    margin-left px2rem(-180)
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(360);
    white-space normal
  }
  .h2 {
    position absolute
    // bottom 28%
    top 68%
    left: 50%
    margin-left px2rem(-180)
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(360);
    white-space normal
  }
  .img1 {
    position absolute
    // top px2rem(654)
    top 26%
    left: 50%
    margin-left px2rem(-17)
    width px2rem(34)
  }
  .img2 {
    position absolute
    // bottom 18%
    top 73%
    left: 50%
    margin-left px2rem(-17)
    width px2rem(34)
  }
  button {
    position absolute
    bottom px2rem(44);
    left 50%
    margin-left px2rem(-90)
    width px2rem(180)
    height px2rem(54)
    color #fff
    font-size px2rem(26)
    border 1px solid #fff
    border-radius 10px
    background transparent
    outline none
  }
}
</style>




