<template>
<div>
 <transition name = "fade">
  <div class="all" v-if="show">
    <div class="content">
      <p>游烹我生活！</p>
      <div class="butt">
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

    },
  data() {
    return{
      show: 'true',
    }
  },
  methods: {
     move() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if(scrollTop>20){
           this.show=false
      }
        if(scrollTop==0){
           this.show=true
      }
        //  else{
        //    this.show=true
        //  }
     },
    //  one() {
    //     if(this.show==false){
    //        document.documentElement.scrollTop=100
    //   }

    //      else{

    //      }
    //  }
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

.all {
  // height 0
  background #efefef
  margin-bottom px2rem(154)
  p {
    text-align center
    font-size px2rem(24)
    color #999
    height px2rem(930)
    line-height px2rem(944)
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
#but1 {
  background  #fff url('./img/ZY-005.png') no-repeat 20% center
  position absolute
  bottom px2rem(-50)
  left px2rem(30)
}
#but2 {
  background #fff url('./img/ZY-006.png') no-repeat 20% center
  position absolute
  bottom px2rem(-50)
  right px2rem(30)
}

</style>

