
<template>
  <div class="all">
    <hheader/>
    <hmain/>
    <!-- <food/> -->
    <top/>
    <!-- <hslider/> -->
    <router-link to="Share">
        <!-- 悬浮的HTML -->
      <div
        @mousedown="down" @touchstart="down"
        @mousemove="move" @touchmove="move"
        @mouseup="end" @touchend="end"
      >
        <img id="moveDiv" class="xuanfu" src="./img/ZY-007.png" alt="">
      </div>
   </router-link>
   <!-- 弹窗 -->
   <div class="win" v-show="show">
      <P>根据网信办2016年6月28日发布的《移动互联网应用程序信息服务管理规定》当中规定，为了加强对移动互联网应用程序(APP)信息服务的规范管理，促进行业健康有序发展，保护公民、法人和其他组织的合法权益，将从2016年8月1日开始落实安全责任，实行实名制管理，从今天开始当用户注册APP时将提供较为严格的个人信息进行认证，以减少窃取隐私、恶意扣费、诱骗欺诈等损害用户合法权益的行为发生。</P>
      <div><span class="s1">姓名：</span><input type="text" name="name" v-model="name"/></div>
      <div><span>身份证：</span><input type="text" mame='id' maxlength="18" v-model="id"/></div>
      <button @click="check">提交</button>
   </div>
   <div class="mask" v-show="show" @touchmove.prevent></div>
   <transition>
      <p class="warning" v-show="warning">{{tit}}</p>
   </transition>
   <div class="guide1" v-if="$store.state.step==1?true:false">
     <p>“I厨神”是一款烹饪助理APP，目标是让用户学会全天下所有美食料理，上传自己拿手的得意好菜。在学习与上传的过程中，不断获得“I厨神”美食头衔，向全网展示您的烹饪天赋！</p>
     <h4 class="h1">“烹饪派系”包含所有当前收录的菜谱美食</h4>
     <h4 class="h2">“语音查询”支持您说出菜名就能查到菜谱</h4>
     <img class="img1" src="./img/1-首页 (1).png" alt="">
     <img class="img2" src="./img/6-语言查询.png" alt="">
     <button @click="end1">朕知道了</button>
   </div>
   <div class="guide2" v-if="$store.state.step==2?true:false">
     <h4 class="h21">这里将展示您的个人信息，并收录所有您已获得的“I厨神”美食成就。</h4>
     <h4 class="h22">完成任务能获得更多美食成就和丰厚奖励。</h4>
      <!-- <h4 class="h23">这里讲展现您当前的流派和段位，不断上传菜谱来提升您的流派段位。</h4> -->
     <img class="img21" src="./img/1-首页 (2).png" alt="">
     <img class="img22" src="./img/1-首页 (3).png" alt="">
     <!-- <img class="img23" src="./img/1-首页 (4).png" alt=""> -->
     <button @click="end2">朕知道了</button>
   </div>
   <!-- <button @click="end3" class="f123">123</button> -->
  </div>
</template>

<script>
import hheader from "./h-header";
import hmain from "./h-main";
// import food from "./food";
import top from "./top";
import { addid } from "@/api";
// import hslider from './h-slider'
export default {
  components: {
    hheader,
    hmain,
    // food,
    top
    // hslider
  },
  data() {
    return {
      flags: false,
      position: {
        x: 0,
        y: 0
      },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      name: "",
      id: "",
      show: false,
      warning: false,
      tit: "",
    };
  },

  mounted() {
    // document.addEventListener('touchmove',this.bodyScroll, { passive: false }) //禁止屏幕滑动
    let certificationstatus = localStorage.getItem("certificationstatus");
    if (certificationstatus == 0) {
      this.show = true;
      localStorage.setItem('guide1',1) //上传
      localStorage.setItem('guide2',1)  //成就
      localStorage.setItem('guide3',1) //个人中心
      localStorage.setItem('guide4',1)  // 流派
      localStorage.setItem('guide5',1)    //官方菜谱
      localStorage.setItem('guide6',1)    //首页语音
      localStorage.setItem('guide7',1)    //语音查询
      localStorage.setItem('guide8',1)   //徽章
      document.addEventListener('touchmove',this.bodyScroll, { passive: false }) //禁止屏幕滑动
    } else {
      this.show = false;
      // localStorage.setItem('guide1',0)
      // localStorage.setItem('guide2',0)
      // localStorage.setItem('guide3',0)
      // localStorage.setItem('guide4',0)
      // localStorage.setItem('guide5',0)
      //  localStorage.setItem('guide6',0)
      //  localStorage.setItem('guide7',0)
      //  localStorage.setItem('guide8',0)
    }
    // console.log(this.show)
    // let id = this.id.toUpperCase();
    // console.log(id);
  },
  created() {
    // document.addEventListener('touchmove',this.bodyScroll, { passive: false })
  },
  methods: {
    end1(){
      let pageHeight = document.documentElement.clientHeight;
      let height = pageHeight * (930 / 1334);
      let pb = pageHeight * (116 / 1334);
       this.$store.commit('setstep',2)
       document.documentElement.scrollTop = height + pb;
       document.body.scrollTop = height + pb;
    },
    end2(){
       this.$store.commit('setstep',3)
       document.documentElement.scrollTop = 0
       document.body.scrollTop = 0
       this.$store.commit('setfbut2',true)
       document.removeEventListener('touchmove',this.bodyScroll, { passive: false })
    },
    // end3(){
    //   document.documentElement.scrollTop = 0;
    //         document.body.scrollTop = 0;
    //         this.$store.commit('setstep',1)
    // },
      bodyScroll(event) {
        event.preventDefault()
    },
    //  真实姓名身份证
    check() {
      // let checkTrueName = () => {
      var name = this.name;
      var id = this.id;
      //   var reg = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
      //   //判断用户输入的真实姓名是否为空
      if (name.length == 0 || id.length == 0) {
        this.tit = "姓名或身份证号码不能为空";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
        // return false;
      } else {
        let userid = localStorage.getItem("userid");
        let id = this.id.toUpperCase();
        // console.log(id)
        addid(userid, this.name, id).then(res => {
          console.log(res);
          if (res.code == 200) {
            localStorage.setItem("certificationstatus", 1);
            // this.$router.push({ path: "/load" });
            this.show = false;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            this.$store.commit('setstep',1)
          } else {
            this.tit = res.msg;
            this.warning = true;
            setTimeout(() => {
              this.warning = false;
            }, 1000);
          }
        });
      }
      // else if (!reg.test(str)) {
      //     //检测姓名的格式是否匹配
      //     this.tit = "姓名输入有误，请重新输入";
      //     this.warning = true;
      //     setTimeout(() => {
      //       this.warning = false;
      //     }, 1000);
      //     return false;
      //   } else {
      //     return true;
      //   }
      // };
      // checkTrueName();
      // let checkId = () => {
      //   var str = this.id;
      //   var reg = /^(^[1-9]\d{5}[1-9]\d{3}(((0[2])([0|1|2][0-8])|(([0-1][1|4|6|9])([0|1|2][0-9]|[3][0]))|(((0[1|3|5|7|8])|(1[0|2]))(([0|1|2]\d)|3[0-1]))))((\d{4})|\d{3}[Xx])$)$/;
      //   if (str.length == 0) {
      //     this.tit = "身份证号码不能为空";
      //     this.warning = true;
      //     setTimeout(() => {
      //       this.warning = false;
      //     }, 1000);
      //     return false;
      //   } else if (!reg.test(str)) {
      //     //检测姓名的格式是否匹配
      //     this.tit = "身份证号码输入有误，请重新输入";
      //     this.warning = true;
      //     setTimeout(() => {
      //       this.warning = false;
      //     }, 1000);
      //     return false;
      //   } else {
      //     return true;
      //   }
      // };
      // checkId();
      // if (checkTrueName() && checkId()) {
      //   //只有当方法执行的时候返回的为true的时候，才去调用后台借口
      //   this.show = false;
      //   let userid = localStorage.getItem("userid");
      //   addid(userid, this.name, this.id).then(res => {
      //     console.log(res);
      //   });
      // }
    },

    //  关闭蒙版
    // close() {
    //   this.show = false;
    // },

    // 实现移动端拖拽
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft;
      this.dy = moveDiv.offsetTop;
    },
    move() {
      var pageWidth = document.documentElement.clientWidth - 40;
      var pageHeight = document.documentElement.clientHeight - 40;
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        if (this.xPum > -40 && this.xPum < pageWidth) {
          moveDiv.style.left = this.xPum + "px";
        }
        // else {
        //   return false
        // };
        if (this.yPum > -40 && this.yPum < pageHeight) {
          moveDiv.style.top = this.yPum + "px";
        }
        // else {
        //   return false
        // }
        //阻止页面的滑动默认事件
        // document.addEventListener(
        //   "touchmove",
        //   function() {
        //     event.preventDefault();
        //   },
        //   false
        // );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
  }
};
</script>

<style lang="stylus" scoped>

@import '../../assets/px2rem.styl';
// .f123 {
//   position absolute
//   top 0
//   left 0
//   z-index 111111
// }
.all {
  // -webkit-overflow-scrolling:touch;
  position: relative;
  height: 100%;
  // width: 100%;
}

.xuanfu {
  touch-action: none;
  z-index: 2000;
  position: fixed;
  top: px2rem(944);
  right: px2rem(32);
  width: px2rem(96);
}

.win {
  margin: 0 px2rem(30);
  position: fixed;
  top: 16%;
  left: 0px;
  z-index: 111111;
  background: #fff;
  text-align: center;
  box-shadow: 16px 16px 16px rgba(204, 204, 204, 0.349019607843137);
  border-radius: 20px;

  p {
    color: #999;
    font-size: px2rem(25);
    margin: px2rem(40) px2rem(40) px2rem(80);
    text-indent: 2em;
    text-align: left;
  }

  >div {
    font-size: px2rem(26);
    margin: 0px px2rem(40) px2rem(60);

    span {
      padding-right: px2rem(20);
    }
    .s1 {
      letter-spacing px2rem(8)
    }
    input {
      width: 78%;
      border-radius: 10px;
      outline: none;
      padding: px2rem(5);
    }
  }

  button {
    margin: px2rem(20) 0 px2rem(80);
    font-size: px2rem(30);
    height: px2rem(80);
    width: px2rem(300);
    background: #5DB8E9;
    color: #fff;
    box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
    border-radius: 20px;
    outline: none;
    border: none;
  }
}

.mask {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: 9999;
  -moz-opacity: 0.8;
  opacity: 0.8;
  // -webkit-filter: blur(10px); /* Chrome, Opera */
  // -ms-filter: blur(10px);
  // filter: blur(10px);
}
.guide1 {
  position absolute
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  p {
    position fixed
    top 43%
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    // text-align center
    margin 0 px2rem(40)
  }
  .h1 {
    position fixed
    bottom 35%;
    left: px2rem(40);
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(310);
    white-space normal
  }
  .h2 {
    position fixed
    bottom 35%;
    right: px2rem(40);
    color #fff
    font-size px2rem(26)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(310);
    white-space normal
  }
  .img1 {
    position fixed
    bottom 22%;
    left: 16%;
    width px2rem(40)
    // transform rotate(-45deg)
    // margin-top 120px
    // margin-left 90px
  }
  .img2 {
    position fixed
    bottom 22%;
    right : 16%;
    width px2rem(40)
    // transform rotate(-45deg)
    // margin-top 120px
    // margin-left 90px
  }
  button {
    position fixed
    bottom 21%;
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
.guide2 {
  position absolute
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  .h21 {
    position fixed
    top px2rem(178)
    left: px2rem(26);
    color #fff
    font-size px2rem(24)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(310);
    white-space normal
  }
  .h22 {
    position fixed
    top px2rem(178)
    right: px2rem(18);
    color #fff
    font-size px2rem(24)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    width px2rem(310);
    white-space normal
  }
  .h23 {
    position fixed
    top px2rem(960)
    right: px2rem(18);
    color #fff
    font-size px2rem(24)
    letter-spacing px2rem(4)
    line-height px2rem(36)
    margin 0 px2rem(80)
    white-space normal
  }
  .img21 {
    position fixed
    top px2rem(90)
    left: 16%;
    width px2rem(40)
  }
  .img22 {
    position fixed
    top px2rem(90)
    right: 16.5%;
    width px2rem(40)
  }
  .img23 {
    position fixed
    top px2rem(808)
    right: 50%;
    margin-left px2rem(-17)
    width px2rem(34)
  }
  button {
    position fixed
    top px2rem(1070)
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
.warning {
  position: fixed;
  width: px2rem(400);
  height: px2rem(60);
  line-height: px2rem(60);
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  left: 50%;
  top: 60%;
  transform: translateX(-50%);
  font-size: px2rem(24);
  color: #fff;
  z-index: 111112;
  overflow: hidden;
}

.v-enter {
  opacity: 0;
  top: 62%; /* 进入起点在屏幕100%部分,即屏幕最右 */
}

.v-leave-to {
  opacity: 1;
  // top: px2rem(180);
}

.v-enter-active, .v-leave-active {
  transition: all 0.2s ease-out;
}
</style>
