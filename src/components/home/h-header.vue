<template>
<div class="zong">
  <div class="all" :style="bg">
    <header>
      <div class="tleft">
        <router-link to="conter">
          <img src="./img/head/TX (1).png" alt="">
          <h3>东南</h3>
        </router-link>
        <router-link to="conter/badge">
          <img src="./img/head/TX (4).png" alt="">
        </router-link>
      </div>
      <div class="tright">
        <router-link to="">
          <img src="./img/ZY-004.png" alt="">
        </router-link>
        <router-link to="tast/tast">
          <img src="./img/ZY-003.png" alt="">
        </router-link>
      </div>
    </header>
    <div class="sea">
      <router-link class="sleft" to="home" :style="dis"><img src="./img/ZY-005.png" alt=""></router-link>
      <router-link class="sright" to="home" :style="dis"><img src="./img/ZY-006.png" alt=""></router-link>
      <router-link to="search" :style="sty" @mousemove="move" @touchmove="move">
        <transition name="fade">
          <div>
          <Input placeholder="在此输入你要查询的菜谱"/>
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
    },
  data() {
    return{
      bg: '',
      sty: '',
      dis: 'opacity: 0',
    }
  },
  methods: {

     move() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        if(scrollTop>0){
          this.dis= {
            opacity: 1,
            transition: 'all 2s',
            '-moz-transition': 'all 2s',
            '-webkit-transition': 'all 2s',
            '-o-transition': 'all 2s'
          }
          this.bg = {
            background: '#FFF',
            transition: 'all 0.5s',
            '-moz-transition': 'all 0.5s',
            '-webkit-transition': 'all 0.5s',
            '-o-transition': 'all 0.5s'
            }
          this.sty= {
         'transform': 'scale(0.8)',
         '-ms-transform': 'scale(0.8)', 	/* IE 9 */
         '-moz-transform': 'scale(0.8)', 	/* Firefox */
         '-webkit-transform': 'scale(0.8)', /* Safari 和 Chrome */
         '-o-transform': 'scale(0.8)',
         transition: 'all 0.5s',
         '-moz-transition': 'all 0.5s',
         '-webkit-transition': 'all 0.5s',
         '-o-transition': 'all 0.5s'

      }
         }
        else{
           this.bg = {
             'background': '#EFEFEF',
             'transition': 'all 0.5s',
             '-moz-transition': 'all 0.5s',
             '-webkit-transition': 'all 0.5s',
             '-o-transition': 'all 0.5s'
             }
           this.dis= {
            'opacity': 0,
            'transition': 'all 0.2s',
            '-moz-transition': 'all 0.2s',
            '-webkit-transition': 'all 0.2s',
            '-o-transition': 'all 0.2s'
          }
            this.sty= {
         transform: 'scale(1)',
         '-ms-transform': 'scale(1)', 	/* IE 9 */
         '-moz-transform': 'scale(1)', 	/* Firefox */
         '-webkit-transform': 'scale(1)', /* Safari 和 Chrome */
         '-o-transform': 'scale(1)',
         transition: 'all 0.5s',
         '-moz-transition': 'all 0.5s',
         '-webkit-transition': 'all 0.5s',
         '-o-transition': 'all 0.5s'
      }
         }
     },
   }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.zong {
  height 208px
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
    margin-left px2rem(20)
    margin-right px2rem(30)
    height px2rem(48)
    line-height px2rem(48)
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
    top 44px
    left 30px
  }
  .sright {
    position absolute
    top 44px
    right 30px
  }
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


</style>

