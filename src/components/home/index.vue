
<template>
  <div class="all">
    <hheader/>
    <hmain/>
    <food/>
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
      <div><span>姓&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input type="text" name="name" v-model="name"/></div>
      <div><span>身份证：</span><input type="text" mame='id' maxlength="18" v-model="id"/></div>
      <button @click="check">提交</button>
   </div>
   <div class="mask" v-show="show"></div>
   <transition>
      <p class="warning" v-show="warning">{{tit}}</p>
   </transition>

  </div>
</template>

<script>
import hheader from "./h-header";
import hmain from "./h-main";
import food from "./food";
import top from "./top";
import { addid } from "@/api";
// import hslider from './h-slider'
export default {
  components: {
    hheader,
    hmain,
    food,
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
      certificationstatus: ""
    };
  },

  mounted() {
    let certificationstatus = localStorage.getItem("certificationstatus");
    if (certificationstatus == 0) {
      this.show = true;
    } else {
      this.show = false;
    }
    let id = this.id.toUpperCase()
    console.log(id)
  },
  methods: {
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
      }
      else {
        let userid = localStorage.getItem("userid");
        let id = this.id.toUpperCase()
        // console.log(id)
        addid(userid, this.name, id).then(res => {
          console.log(res);
          if (res.code == 200) {
            localStorage.setItem('certificationstatus', 1)
            this.$router.push({path: '/load'})
            this.show = false;

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
        document.addEventListener(
          "touchmove",
          function() {
            event.preventDefault();
          },
          false
        );
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

.all {
  position: relative;
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
  overflow hidden
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
