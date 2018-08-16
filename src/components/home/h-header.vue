<template>
<div class="zong" @mouseup="end" @touchend="end">
  <div class="all" :style="bg">
    <header>
      <div class="tleft">
        <router-link to="conter">
          <img src="./img/head/TX (1).png" alt="">
          <h3>东南</h3>
        </router-link>
        <router-link to="conter/badge" class="sicon">
          <img src="../../common/img/36X36/资源 107自定.png" alt="">
        </router-link>
        <router-link to="conter/badge" class="sicon">
          <img src="../../common/img/36X36/资源 43川.png" alt="">
        </router-link>
        <router-link to="conter/badge" class="sicon">
          <img src="../../common/img/36X36/资源 51鲁.png" alt="">
        </router-link>
      </div>
      <div class="tright">
        <router-link to="tast/tast">
          <img src="./img/ZY-004.png" alt="">
        </router-link>
        <router-link to="tast/tast">
          <img src="./img/ZY-003.png" alt="">
        </router-link>
      </div>
    </header>
    <div class="sea">
      <!-- <router-link class="sleft" to="home" :style="dis"><img src="./img/ZY-005.png" alt=""></router-link> -->
      <!-- <router-link class="sright" to="home" :style="dis"><img src="./img/ZY-006.png" alt=""></router-link> -->
      <router-link to="search" :style="{'transform': 'scale(' + sty + ')','transition': 'all 0.2s'}" @mousemove="move" @touchmove="move">
        <transition name="fade">
          <div class="i_search">
          <Input placeholder="在此输入你要查询的菜谱"/>
          <transition name="slide-fade">
            <img v-show="show" src="./img/1-005.png" alt="">
          </transition>
          </div>
        </transition>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
        window.addEventListener('scroll', this.move)
        var pageHeight = document.documentElement.clientHeight;
        this.height = pageHeight*(930/1334)
        this.pb = pageHeight*(146/1334)
    },
  data() {
    return{
      bg: '',
      sty: '',
      dis: 'opacity: 0',
      height: '',
      pb: '',
      show: false
    }
  },
  methods: {
     end() {
       var oheight = this.height-25
       var pb = this.pb
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  console.log(scrollTop)
       if(scrollTop<=(oheight+41)&&scrollTop>(oheight-21)) {
            document.documentElement.scrollTop=oheight-21
            document.body.scrollTop=oheight-21
       }
       else if(scrollTop>=(oheight+41)&&scrollTop<(oheight+pb)) {
         document.documentElement.scrollTop=oheight+pb
         document.body.scrollTop=oheight+pb
       }
     },
     move() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var oheight = this.height-25
        var pb = this.pb
        var height = this.height
        var n = 1-(scrollTop/(height+pb))*0.2
        // console.log(scrollTop)
        if(scrollTop>0&&scrollTop<(height+pb)){
            // console.log(n)
          this.sty=n
          this.show=false
          // this.sty= {
        //  'transform': "scale(i)",
        //  '-ms-transform': 'scale(0.8)', 	/* IE 9 */
        //  '-moz-transform': 'scale(0.8)', 	/* Firefox */
        //  '-webkit-transform': 'scale(0.8)', /* Safari 和 Chrome */
        //  '-o-transform': 'scale(0.8)',
      //    transition: 'all 10s',
      //    '-moz-transition': 'all 0.5s',
      //    '-webkit-transition': 'all 0.5s',
      //    '-o-transition': 'all 0.5s'

      // }(i)
         }

        else if(scrollTop>=(height+pb)) {
          this.sty=0.8
          this.show=true
        }
        else if(scrollTop<902){

             this.sty=1

      //       this.sty= {
      //    transform: 'scale(1)',
      //    '-ms-transform': 'scale(1)', 	/* IE 9 */
      //    '-moz-transform': 'scale(1)', 	/* Firefox */
      //    '-webkit-transform': 'scale(1)', /* Safari 和 Chrome */
      //    '-o-transform': 'scale(1)',
      //    transition: 'all 0.5s',
      //    '-moz-transition': 'all 0.5s',
      //    '-webkit-transition': 'all 0.5s',
      //    '-o-transition': 'all 0.5s'
      // }
         }
        if(scrollTop>902) {
          this.bg = {
            'background': '#FFF',
            'transition': 'all 2s',
            '-moz-transition': 'all 2s',
            '-webkit-transition': 'all 2s',
            '-o-transition': 'all 2s'
            }
        }
        else if(scrollTop<=(height+pb)) {
          this.bg = {
             'background': '#EFEFEF',
             'transition': 'all 1.5s',
             '-moz-transition': 'all 1.5s',
             '-webkit-transition': 'all 1.5s',
             '-o-transition': 'all 1.5s'
             }
        }
        //  if(scrollTop>150){
        //     this.dis= {
        //     opacity: 1,
        //     'transition': 'all 4s',
        //     '-moz-transition': 'all 4s',
        //     '-webkit-transition': 'all 4s',
        //     '-o-transition': 'all 4s'
        //   }
        //  }
        //  else{
        //     this.dis= {
        //     'opacity': 0,
        //     'transition': 'all 0.2s',
        //     '-moz-transition': 'all 0.2s',
        //     '-webkit-transition': 'all 0.2s',
        //     '-o-transition': 'all 0.2s'
        //   }
        //  }
     },
   }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.zong {
  height px2rem(210)
}
.all {
  position fixed
  top 0
  left 0
  right 0
  z-index 999
  padding-top px2rem(28)
  background #EFEFEF
  a {
    display block
  }
  img {
    display inline-block
    width px2rem(48)
  }
}
header {
  margin 0 px2rem(30)
  height px2rem(48)
  line-height px2rem(48)

}
.tleft {
  img {
    float left
  }
  h3 {
    float left
    font px2rem(24) '微软雅黑'
    color #000
    margin-left px2rem(10)
    margin-right px2rem(20)
    height px2rem(48)
    line-height px2rem(48)
  }
  .sicon {
    img{
      margin-right px2rem(10)
      width px2rem(36)
      margin-top px2rem(6)
    }
  }
}
.tright {
  img {
    float right
    margin-left px2rem(24)
  }
}
.sea {
  position relative
  .sleft {
    position absolute
    top px2rem(44)
    left px2rem(30)
  }
  .sright {
    position absolute
    top px2rem(44)
    right px2rem(30)
  }
}
>>>.ivu-input-wrapper {

}
>>>.ivu-input {
  text-align center
  height px2rem(102)
  width 92%
  margin px2rem(16) px2rem(30) px2rem(16) px2rem(30)
  border-radius 20px
  box-shadow 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  font-size px2rem(26)

}
// >>>input::-webkit-input-placeholder {
//        font-size: 26px;
//     }
.i_search {
  position relative
  img {
    position absolute
    top px2rem(46)
    right px2rem(60)
    width px2rem(48)
  }
}
.slide-fade-enter-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  // transform: translateX(10px);
  opacity: 0;
}
</style>

