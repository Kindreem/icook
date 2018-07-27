<template>
  <div class="all" @mouseup="end" @touchend="end">
     <div class="top">
       <router-link to="home" class="left">
         <p>&lt;湘派</p>
       </router-link>
       <router-link to="home" class="right">
         <p>川派&gt;</p>
       </router-link>
     </div>
     <div class="ban">
       <div class="b-top">
         <h1>粤派三段</h1>
         <p>您已掌握6/18道菜式,获得粤派经验4782/12000</p>
       </div>
       <div class="b-bot">
         <div class="ex"><router-link to="O_recipe"><img src="../../common/img/links/1-017.png" alt=""></router-link><p>恭喜您已桨握：佛跳墙。在本道菜咬基础向债改变N个步骤即可学会粤派菜系两个船新的菜肴。快来看看！</p></div>
         <div class="step">
           <router-link to="O_recipe">
             <img src="../../common/img/links/1-023.png" alt="">
           </router-link>
         </div>
         <router-link to="home" class="b-right">
            <p>看完整粤派菜肴&gt;</p>
         </router-link>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  methods: {
    end() {
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
       console.log(scrollTop)
      if(scrollTop<=950&&scrollTop>884) {
            document.documentElement.scrollTop=884
            document.body.scrollTop=884
       }
       else if(scrollTop>=950&&scrollTop<1050) {
         document.documentElement.scrollTop=1050
         document.body.scrollTop=1050
       }
     },
  }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0 px2rem(30) 0px
}
.top {
  font px2rem(24) '微软雅黑'
  padding-bottom px2rem(72)
  p{
    color #727171
  }
}
.left {
  float left
}
.right {
  float right
}
.ban {
  border-radius 20px
  box-shadow 8px 8px 4px rgba(204, 204, 204, 0.349019607843137)
  // margin-top px2rem(72)
  margin-bottom px2rem(8)
  .b-top {
  border-top-left-radius 20px
  border-top-right-radius 20px
  text-align center
  background-color rgba(93, 184, 233, 1)
  color #fff
  height px2rem(110)
  padding-top px2rem(20)
  h1 {
    font px2rem(40) '微软雅黑'
  }
  p {
    font px2rem(20) '微软雅黑'
  }
  }
}
.b-bot {
  margin-top px2rem(26)
  .ex {
    margin 0px px2rem(20)
    a {
      display inline-block

      margin-right px2rem(20)
      img {
        width px2rem(96)
        border-radius 50%
      }
    }
    p {
      font px2rem(24) '微软雅黑'
      display inline-block
      width 78%
    }
  }
  .step {
    margin-top px2rem(20)
    margin-bottom px2rem(40)
    text-align center
    img {
      width px2rem(484)
    }
  }
}
.b-right {
  text-align right
  p {
    font px2rem(23) '微软雅黑'
    color #727171
    padding-bottom px2rem(28)
  }
}

</style>
