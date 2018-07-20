<template>
<div  @mouseup="end" @touchend="end" class="zong">
 <transition name = "fade">
  <div class="all" >
    <div class="content">
      <p>游烹我生活！</p>
      <div class="butt">

        <img id="bleft" v-show="show" :style="{'transform': 'translate(' + pLeft + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-005.png" alt="">
        <img id="bright" v-show="show" :style="{'transform': 'translate(' + pRight + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-006.png" alt="">
        <img id="abl" v-show="on" src="./img/ZY-005.png" alt="">
        <img id="abr" v-show="on" src="./img/ZY-006.png" alt="">
        <Button id="but1" type="ghost">烹饪菜系</Button>
        <Button id="but2" type="ghost">语音查询</Button>
      </div>
    </div>
  </div>
 </transition>
</div>
</template>

<script>
export default {
  mounted() {
        window.addEventListener('scroll', this.move)
        //  window.addEventListener('scroll', this.end)
    },
  data() {
    return{
      show: false,
      on: true,
      // sty: '',
      // rig: ''
      pLeft: '',
      pRight: '',
      pTop: ''
    }
  },
  methods: {
     end() {
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  console.log(scrollTop)
       if(scrollTop<=946&&scrollTop>900) {
            document.documentElement.scrollTop=900
            document.body.scrollTop=900
       }
       else if(scrollTop>=946&&scrollTop<1040) {
         document.documentElement.scrollTop=1040
         document.body.scrollTop=1040
       }
     },

     move() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var pLeft = [-(scrollTop-902)/88*50]*320/750/20
        var pRight = [(scrollTop-902)/88*216]*320/750/20
        var pTop = [-(scrollTop-902)/88*102]*320/750/20
        // console.log(scrollTop)

        if(scrollTop>=0&&scrollTop<902){
           this.show=false
           this.on=true

      }
       else if(scrollTop>=902&&scrollTop<990){
           this.show=true
           this.on=false
      }
         else{
           this.show=true
           this.on=false
         }

        if(scrollTop>=902&&scrollTop<990){
        //  this.sty = {
        //    opacity: 0,
        //   'transform': 'translate(-50px,-1006px)',
        //   transition: 'all 1.6s',
        //  }
        //  this.rig = {
        //    opacity: 0,
        //   'transform': 'translate(216px,-1006px)',
        //   transition: 'all 1.6s',
        //  }
           this.pLeft=pLeft
           this.pRight=pRight
           this.pTop=pTop
      }
      else if(scrollTop>=990) {
           this.pLeft=-50*320/750/20
           this.pRight=216*320/750/20
           this.pTop=-102*320/750/20
      }
      else if(scrollTop<927) {
            this.pLeft=0
           this.pRight=0
           this.pTop=0
      }
      // else {
      //   this.sty = {
      //     opacity: 1,
      //     'transform': 'translate(0px,0px)',
      //     transition: 'all 1.6s',
      //    }
      //     this.rig = {
      //      opacity: 1,
      //     'transform': 'translate(0px,0px)',
      //     transition: 'all 1.6s',
      //    }
      // }

     },

  },

}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 1
}
.zong {
  height 1050px
  background #efefef
}
.all {

  background #efefef
  p {
    // margin-bottom px2rem(252)
    text-align center
    font-size px2rem(24)
    color #999
    height 930px
    line-height 944px
  }
}
.content {
    position relative
}
>>>.ivu-btn-ghost {
  height px2rem(80)
  width 6.8rem
  font-size px2rem(30)
  line-height px2rem(70)
  border-radius 20px
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  span {
    margin-left px2rem(36)
  }
}
#abl {
  position absolute
  bottom px2rem(-32)
  left px2rem(80)
  z-index 1100
  width px2rem(48)
}
#abr {
  position absolute
  bottom px2rem(-32)
  right px2rem(246)
  z-index 1100
  width px2rem(48)
}
#bleft {
  position fixed
  top px2rem(222)
  left px2rem(80)
  z-index 1100
  width px2rem(48)
}
#bright {
  position fixed
  top px2rem(222)
  right px2rem(246)
  z-index 1100
  width px2rem(48)
}
#but1 {
  position absolute
  bottom px2rem(-50)
  left px2rem(30)
  background #fff
}
#but2 {
  position absolute
  bottom px2rem(-50)
  right px2rem(30)
  background #fff
}

</style>

