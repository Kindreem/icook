<template>
<div  @mouseup="end" @touchend="end" class="zong" :style="{'padding-bottom': pb+'px'}">
 <!-- <transition name = "fade"> -->
  <div class="all" >
    <div class="content">
      <p :style="{height: height+'px','line-height': height+'px'}">游烹我生活！</p>
      <div class="butt">
        <router-link to="/fstyle"><img id="bleft" v-show="show" :style="{'transform': 'translate(' + pLeft + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-005.png" alt=""></router-link>
        <router-link :to="$store.state.fbut2==true?'':'/search'" ><img id="bright" v-show="show" :style="{'transform': 'translate(' + pRight + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-006.png" alt="" @click="$store.state.fbut2==true?fbut():yycx()"></router-link>
        <img id="abl" :class="$store.state.step==1?'zoomt2':''" v-show="on" src="./img/ZY-005.png" alt="">
        <img class="abr" :class="$store.state.step==1?'zoomt2':''" v-show="on" src="./img/ZY-006.png" alt="">
        <router-link :to="$store.state.step==1?'':'/fstyle'" ><Button :class="$store.state.step==1?'zoomt1':''" id="but1" type="ghost">烹饪菜系</Button></router-link>
        <router-link :to="$store.state.step==1?'':'/search'" ><Button class="but2" :class="$store.state.step==1?'zoomt1':''" type="ghost" @click="$store.state.step==1?'':yycx()">语音查询</Button></router-link>

        <div class="fbut2" v-if="$store.state.fbut2&&yyshow" @touchmove.prevent>
          <img class="abr" src="./img/ZY-006.png" alt="" v-if="yyshow">
          <Button class="but2" type="ghost">语音查询</Button>
        </div>
        <div class="fbut1" v-if="$store.state.fbut2&&!yyshow" @click="fbut" @touchmove.prevent>
          <img class="abr" src="./img/ZY-006.png" alt="" v-if="yyshow">
          <Button class="but2" type="ghost">语音查询</Button>
        </div>
      </div>
    </div>
  </div>
 <!-- </transition> -->
 <div class="guide" v-if="fmask" @touchmove.prevent>
     <h4 class="h1">“语音查询”可在不打字的情况下支持查询。不信你试试说个“剁椒鱼头”，(当然你现在说别的也搜不出来，因为这里是强制引导，下步一定显示“剁椒鱼头”。)肯定搜的出来！</h4>
     <img class="img1" src="./img/6-语言查询.png" alt="">
     <router-link to="/search" ><button @click="end2">朕知道了</button></router-link>
   </div>
</div>
</template>

<script>
export default {
  mounted() {
    // function bodyScroll(event){
    // event.preventDefault();
    // }
    // document.body.addEventListener('touchmove',this.bodyScroll,false);
    window.addEventListener("scroll", this.move);
    //  window.addEventListener('scroll', this.end)
    var pageHeight = document.documentElement.clientHeight;
    this.height = pageHeight * (930 / 1334);
    this.pb = pageHeight * (116 / 1334);  //146
  },
  data() {
    return {
      show: false,
      on: true,
      // sty: '',
      // rig: ''
      pLeft: "",
      pRight: "",
      pTop: "",
      height: "",
      pb: "",
      fmask: false,
      yyshow: false
      // bb: ""
    };
  },
  methods: {
    end2() {
       this.$store.commit('setfwarn', true )
       this.fmask=false
       this.$store.commit('setfbut2',false)
    },
    fbut() {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
       this.fmask=true
       this.yyshow=true
    },
    yycx() {
       this.$store.commit('setwarning', true )
    },
    end() {
      var height = this.height;
      var oheight = this.height - 25;
      //  console.log(oheight)
      var pb = this.pb;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  console.log(scrollTop)
      if (scrollTop <= oheight + 41 && scrollTop > oheight - 21) {
        document.documentElement.scrollTop = oheight - 21;
        document.body.scrollTop = oheight - 21;
      } else if (scrollTop >= oheight + 41 && scrollTop < height + pb) {
        document.documentElement.scrollTop = height + pb;
        document.body.scrollTop = height + pb;
      }
    },

    move() {
      var pageHeight = document.documentElement.clientHeight;
      // console.log(pageHeight)
      var oheight = this.height - 25;
      // console.log(oheight)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var pLeft = ([(-(scrollTop - oheight) / 88) * 50] * 320) / 750 / 20;
      var pRight = ([((scrollTop - oheight) / 88) * 216] * 320) / 750 / 20;
      var pTop = ([(-(scrollTop - oheight) / 88) * 102] * 320) / 750 / 20;
      // console.log(scrollTop)

      // if (scrollTop < 0) {
        //  document.documentElement.scrollTop=3
        //  document.body.scrollTop=3
        // tableView.bounces = NO

      // }

      if (scrollTop < oheight) {
        this.show = false;
        this.on = true;
      } else if (scrollTop >= oheight) {
        this.show = true;
        this.on = false;
      }
      //  else if(scrollTop >= oheight + 88){
      //   this.show = true;
      //   this.on = false;
      //   // this.$refs.abl.style
      // }

      if (scrollTop >= oheight && scrollTop < oheight + 88) {
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
        this.pLeft = pLeft;
        this.pRight = pRight;
        this.pTop = pTop;
      } else if (scrollTop >= oheight + 88) {
        this.pLeft = (-50 * 320) / 750 / 20;
        this.pRight = (216 * 320) / 750 / 20;
        this.pTop = (-102 * 320) / 750 / 20;
      }
      // else if(scrollTop<927) {
      //       this.pLeft=0
      //      this.pRight=0
      //      this.pTop=0
      // }
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

// .fade-enter-active, .fade-leave-active {
// transition: opacity 0.8s
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
// opacity: 1
// }
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
    top 10%;
    left: 50%;
    margin-left -46%
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width 92%;
    white-space normal
  }
  .img1 {
    position absolute
    top 14.5%;
    right: 16%;
    width px2rem(40)
  }
  button {
    position absolute
    top 15.2%;
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
.fbut1 {
  position absolute
  bottom px2rem(0);
  right 0
  z-index 1 !important
  >>>.ivu-btn-ghost {
    background transparent !important
    box-shadow none !important
    border none !important
    color: transparent !important
  }
}
.fbut2 {
  position absolute
  bottom px2rem(0);
  right 0
  z-index 10001
  >>>.ivu-btn-ghost {
    background #fff !important
    box-shadow none !important
    border none !important
  }
}
.zong {
  // padding-bottom px2rem(146)
  background: #efefef;
}
// .ab1 {
//   z-index 9999

// }
// .ab2 {
//   z-index -9999
// }
.all {
  background: #efefef;

  p {
    // margin-bottom px2rem(252)
    text-align: center;
    font-size: px2rem(24);
    color: #999;
    // height 930px
    // line-height 944px
  }
}

.content {
  position: relative;
}

>>>.ivu-btn-ghost {
  background #fff !important
  height: px2rem(80);
  width: 6.8rem;
  font-size: px2rem(30);
  line-height: px2rem(70);
  border-radius: 20px;
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);

  span {
    margin-left: px2rem(36);
  }
}

#abl {
  position: absolute;
  bottom: px2rem(-32);
  left: px2rem(80);
  z-index: 1100;
  width: px2rem(48);
}

.abr {
  position: absolute;
  bottom: px2rem(-32);
  right: px2rem(246);
  z-index: 1100;
  width: px2rem(48);
}

#bleft {
  position: fixed;
  top: px2rem(222);
  left: px2rem(80);
  z-index: 1100;
  width: px2rem(48);
}

#bright {
  position: fixed;
  top: px2rem(222);
  right: px2rem(246);
  z-index: 1100;
  width: px2rem(48);
}

#but1 {
  position: absolute;
  bottom: px2rem(-50);
  left: px2rem(30);
  background: #fff;
}

.but2 {
  position: absolute;
  bottom: px2rem(-50);
  right: px2rem(30);
  background: #fff;
}
</style>

