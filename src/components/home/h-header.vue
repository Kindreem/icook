<template>
<div class="zong" @mouseup="end" @touchend="end">
  <div class="all" :style="bg">
    <header>
      <div class="tleft ">
        <div>
        <router-link :to="usernickname=='--'?'/user':'/conter'" >
          <img v-if="userphoto" :src="userphoto" alt="">
          <img v-else src="@/common/img/TXXX.png" alt="">
          <h3>{{usernickname}}</h3>
        </router-link>
        </div>
        <div class="sicon" v-for="(item,index) in userbadge" :key="index">
          <img :src="item.rankimg" alt="">
        </div>
      </div>
      <div class="tright">
        <div class="set">
          <router-link to="/set">
             <img src="./img/ZY-004.png" alt="">
        </router-link>
           <!-- <Dropdown>
             <img src="./img/ZY-004.png" alt="">
                <DropdownMenu slot="list">
                    <DropdownItem>个人中心</DropdownItem>
                    <DropdownItem>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown> -->
        </div>
        <router-link to="/achieve">
          <img src="./img/ZY-003.png" alt="">
        </router-link>
      </div>
    </header>
    <div class="sea">
      <!-- <router-link class="sleft" to="home" :style="dis"><img src="./img/ZY-005.png" alt=""></router-link> -->
      <!-- <router-link class="sright" to="home" :style="dis"><img src="./img/ZY-006.png" alt=""></router-link> -->
      <router-link to="search" :style="{'transform': 'scale(' + sty + ')','transition': 'all 0.2s'}" @mousemove="move" @touchmove="move">
        <transition name="fade" >
          <div class="i_search">
          <Input disabled placeholder="在此输入你要查询的菜谱"/>
          <transition name="slide-fade">
            <img v-show="show" src="./img/1-005.png" alt="">
          </transition>
          </div>
        </transition>
      </router-link>
    </div>

  </div>
  <div class="f1" v-if="$store.state.step==2?true:false" @touchmove.prevent>
      <img src="@/common/img/TXXX.png" alt="">
      <h3>{{usernickname}}</h3>
    </div>
    <div class="f2" v-if="$store.state.step==2?true:false" @touchmove.prevent>
       <img src="./img/ZY-003.png" alt="">
    </div>
</div>
</template>

<script>
import { userbadge } from "@/api";
export default {
  mounted() {
    this.usernickname = localStorage.getItem("usernickname");
    this.userphoto = localStorage.getItem("userphoto");
    window.addEventListener("scroll", this.move);
    var pageHeight = document.documentElement.clientHeight;
    this.height = pageHeight * (930 / 1334);
    this.pb = pageHeight * (146 / 1334);

    userbadge(localStorage.getItem("userid")).then(res=>{
    if(res.code==200){
      this.userbadge=res.data
    }
    console.log(res.data)
  })
  },
  data() {
    return {
      bg: "",
      sty: "",
      dis: "opacity: 0",
      height: "",
      pb: "",
      show: false,
      usernickname: "",
      userphoto: "",
      userbadge: ''
    };
  },
  methods: {
    //搜索焦点
    // fon() {
    //    this.$store.commit('setfon',true)
    //   //  console.log(this.$store.state.fon)
    // },
    end() {
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
      } else if (scrollTop >= oheight + 41 && scrollTop < oheight + pb) {
        document.documentElement.scrollTop = oheight + pb;
        document.body.scrollTop = oheight + pb;
      }
    },
    move() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var oheight = this.height - 25;
      var pb = this.pb;
      var height = this.height;
      var n = 1 - scrollTop / (height + pb) * 0.2;
      // console.log(scrollTop)
      if (scrollTop > 0 && scrollTop < height + pb) {
        // console.log(n)
        this.sty = n;
        this.show = false;
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
      } else if (scrollTop >= height + pb) {
        this.sty = 0.8;
        this.show = true;
      } else if (scrollTop < 902) {
        this.sty = 1;

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
      if (scrollTop > 902) {
        this.bg = {
          background: "#FFF",
          transition: "all 2s",
          "-moz-transition": "all 2s",
          "-webkit-transition": "all 2s",
          "-o-transition": "all 2s"
        };
      } else if (scrollTop <= height + pb) {
        this.bg = {
          background: "#EFEFEF",
          transition: "all 1.5s",
          "-moz-transition": "all 1.5s",
          "-webkit-transition": "all 1.5s",
          "-o-transition": "all 1.5s"
        };
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
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.zong {
  height: px2rem(210);
  background-color #EFEFEF
}

.all {
  position: fixed;
  -webkit-overflow-scroll:touch
  // transform: translateY(0);
  // -webkit-transform: translateY(0);
  top: 0;
  left: 0;
  right: 0;
  z-index 999
  padding-top: px2rem(28);
  background: #EFEFEF;

  a {
    display: block;
  }

  img {
    display: inline-block;
    width: px2rem(48);
  }
}

header {
  margin: 0 px2rem(30);
  height: px2rem(48);
  line-height: px2rem(48);
}

.tleft {
  img {
    float: left;
    border-radius 50%
  }

  h3 {
    float: left;
    font: px2rem(24) '微软雅黑';
    color: #000;
    margin-left: px2rem(10);
    margin-right: px2rem(20);
    height: px2rem(48);
    line-height: px2rem(48);
  }

  .sicon {
    img {
      margin-right: px2rem(10);
      width: px2rem(36);
      margin-top: px2rem(6);
    }
  }
}

.tright {
  .set{
    float: right;
    >>> .ivu-dropdown{
        .ivu-select-dropdown{
         margin-top:px2rem(64);
         li {
           font-size :px2rem(16)!important;
         }

      }
    }

  }
  img {
    float: right;
    margin-left: px2rem(24);
  }
}

.sea {
  position: relative;
  .sleft {
    position: absolute;
    top: px2rem(44);
    left: px2rem(30);
  }

  .sright {
    position: absolute;
    top: px2rem(44);
    right: px2rem(30);
  }
}

>>>.ivu-input-wrapper {
}

>>>.ivu-input {
  text-align: center;
  height: px2rem(102);
  width: 92%;
  margin: px2rem(16) px2rem(30) px2rem(16) px2rem(30);
  border-radius: 20px;
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  font-size: px2rem(26);
}

// >>>input::-webkit-input-placeholder {
// font-size: 26px;
// }
.i_search {
  position: relative;

  img {
    position: absolute;
    top: px2rem(46);
    right: 8%;
    width: px2rem(48);
  }
}

.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to, {
  // transform: translateX(10px);
  opacity: 0;
}
>>>.ivu-input[disabled]{
  background-color: #fff !important
}

.f1 {
  position fixed
  top px2rem(22)
  left px2rem(20)
  z-index: 10000 !important
  background #fff
  height px2rem(58)
  // width 180px
  border-radius px2rem(12)

  img {
    width: px2rem(48);
    border-radius 50%
    vertical-align: middle
    margin-left px2rem(10)
    // display inline
  }
  h3 {
    display inline-block
    font: px2rem(24) '微软雅黑';
    color: #000;
    margin-left: px2rem(10);
    margin-right: px2rem(10);
    height: px2rem(58);
    line-height: px2rem(58);
    vertical-align: middle
  }
}
.f2 {
  position fixed
  top px2rem(22)
  right px2rem(99)
  z-index: 10000 !important
  width px2rem(58)
  height px2rem(58)
  background #fff
  border-radius px2rem(12)
  img{
    width px2rem(48)
    margin-left px2rem(7)
    margin-top px2rem(4)
  }
}
</style>

