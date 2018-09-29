<template>
<div  @mouseup="end" @touchend="end" class="zong" :style="{'padding-bottom': pb+'px'}">
 <!-- <transition name = "fade"> -->
  <div class="all" >
    <div class="content">
      <p :style="{height: height+'px','line-height': height+'px'}">游烹我生活！</p>
      <div class="butt">
        <img id="bleft" v-if="show" :style="{'transform': 'translate(' + pLeft + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-005.png" alt="">
        <img id="bright" v-if="show" :style="{'transform': 'translate(' + pRight + 'rem,' + pTop + 'rem)' ,'transition': 'all 1s cubic-bezier(0.01,1,1,1)'}" src="./img/ZY-006.png" alt="">
        <img id="abl" v-if="on" src="./img/ZY-005.png" alt="">
        <img id="abr" v-if="on" src="./img/ZY-006.png" alt="">
        <router-link to="/fstyle"><Button id="but1" type="ghost">烹饪菜系</Button></router-link>
        <Button id="but2" type="ghost">语音查询</Button>
      </div>
    </div>
  </div>
 <!-- </transition> -->
</div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.move);
    //  window.addEventListener('scroll', this.end)
    var pageHeight = document.documentElement.clientHeight;
    this.height = pageHeight * (930 / 1334);
    this.pb = pageHeight * (146 / 1334);
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
      pb: ""
    };
  },
  methods: {
    end() {
      var height = this.height;
      var oheight = this.height - 25;
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

      if (scrollTop < 0) {
        //  document.documentElement.scrollTop=3
        //  document.body.scrollTop=3
        // tableView.bounces = NO
      
      }

      if (scrollTop < oheight) {
        this.show = false;
        this.on = true;
      } else if (scrollTop >= oheight && scrollTop < oheight + 88) {
        this.show = true;
        this.on = false;
      } else {
        this.show = true;
        this.on = false;
      }

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
.zong {
  // padding-bottom px2rem(146)
  background: #efefef;
}

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

#abr {
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

#but2 {
  position: absolute;
  bottom: px2rem(-50);
  right: px2rem(30);
  background: #fff;
}
</style>

