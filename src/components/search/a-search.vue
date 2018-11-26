<template>
  <div class="all">
    <div class="out">
    <section class="top">
      <Input v-model="value" ref="in" placeholder="输入菜系或菜谱" clearable search @on-enter="handleAdd" autofocus="autofocus"/>
      <img class="left" src="./img/DR-005.png" alt="" @click="back">
      <img class="right"  src="./img/ZY-006.png" alt="" @click="talk">
    </section>
    </div>
    <section class="bot">
      <div class="title">
        <img class="tag" src="./img/ZY-021.png" alt="">
        <img class="heart" src="./img/ZY-043.png" alt="">
        <h3>历史搜索</h3>
      </div>
      <div class="content">
        <Tag v-for="(item,index) in items" :key="item" :name="index" closable @on-close="handleClose" @click.native="handleshow(item)">{{item}}</Tag>
      </div>
    </section>
    <transition>
       <div class="warning" v-show="$store.state.warning">
        <p>{{tit}}</p>
        <img class="clo" src="./img/1-037.png" alt="" @click="close">
        <img :class="qz?'quan zhuan':'quan'" src="./img/QQ20181017171135.png" alt="">
        <div>
          <h4 @click="end" v-show="it">我说完了</h4>
          <img @click="talk" v-show="!it" src="./img/icon_start@3x.png" alt="">
        </div>
       </div>
   </transition>
   <transition>
       <div class="warning" v-if="$store.state.fwarn">
        <p>{{tit}}</p>
        <!-- <img class="clo" src="./img/1-037.png" alt="" @click="close"> -->
        <img :class="qz?'quan zhuan':'quan'" src="./img/QQ20181017171135.png" alt="">
        <div>
          <h4 @click="fend" v-show="it">我说完了</h4>
          <img @click="ftalk" v-show="!it" src="./img/icon_start@3x.png" alt="">
        </div>
       </div>
   </transition>
   <div class="mask" v-show="$store.state.warning||$store.state.fwarn" @touchmove.prevent></div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { searchbook, getwxjssdk } from "@/api";
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      items: "",
      list: [],
      value: "",
      psize: 5,
      result: "",
      localId: "",
      tit: "",
      // START: "",
      qz: false,
      it: true
    };
  },
  //  computed:
  //   mapGetters({
  //       size:'getsize'
  //   }),
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    handleshow(item) {
      this.value = item;
      this.$refs.in.focus();
    },
    handleClose(event, name) {
      this.items.splice(name, 1);
      // this.$store.commit("setsea", this.items);
      localStorage.setItem("sea", this.items);
    },
    handleAdd() {
      if (this.value !== "") {
        // let size = this.$store.state.size
        this.$store.state.num = 1;
        // console.log(this.$store.state.num)
        this.$store.state.items = "";
        searchbook(
          this.value,
          1,
          this.psize,
          this.$store.state.searchsort
        ).then(res => {
          if (res.code == 200) {
            this.$store.commit("setnodata", "");
            this.list = res.data;
            this.$store.commit("setsize", this.psize);
            this.$store.commit("setval", this.value);
            this.$store.commit("setlist", this.list);
          } else {
            this.$store.commit("setnodata", "暂无相关菜谱");
          }
          // console.log(res);
        });
        for (var i = 0; i < this.items.length; i++) {
          if (this.value == this.items[i] || this.value.length == 0) {
            return false;
          }
        }

        this.items.push(this.value);
        // this.$store.commit("setsea", this.items);
        localStorage.setItem("sea", this.items);

        // this.value = ""
      }
    },
    close() {
      wx.stopRecord();
      this.$store.commit("setwarning", false);
    },
    talk() {
      this.tit = "请说出您想输入的内容";
      this.qz = true;
      this.it = true;
      this.$store.commit("setwarning", true);
      // event.preventDefault();
      let self = this;
      // this.tit = "正在录音...";
      wx.startRecord({
        success: function() {
          // self.START = new Date().getTime();
          wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: function(res) {
              self.tit = "识别中...";
              // self.warning = false;
              self.localId = res.localId;
              // setTimeout(() => {
              wx.translateVoice({
                localId: self.localId, // 需要识别的音频的本地Id，由录音相关接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function(res) {
                  self.qz = false;
                  // alert(res.translateResult);
                  //去掉最后一个句号
                  self.result = res.translateResult.substring(
                    0,
                    res.translateResult.length - 1
                  );
                  // alert(self.result);
                  self.value = self.result;
                  self.handleAdd();
                  self.$store.commit("setwarning", false);
                },
                fail: function(res) {
                  self.tit = "我好像没听清";
                  self.qz = false; //转圈
                  self.it = false; //图片文字
                  // alert(JSON.stringify(res))
                }
              });
              // }, 130);
            }
          });
        },
        cancel: function() {
          this.tit = "用户拒绝授权录音";
        }
      });
    },
    ftalk() {
      this.tit = "请说出您想输入的内容";
      this.qz = true;
      this.it = true;
      let self = this;
      wx.startRecord({
        success: function() {
          wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: function(res) {
              self.tit = "识别中...";
              self.localId = res.localId;
              wx.translateVoice({
                localId: self.localId, // 需要识别的音频的本地Id，由录音相关接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function(res) {
                  self.qz = false;
                  // alert(res.translateResult);
                  //去掉最后一个句号
                  self.result = res.translateResult.substring(
                    0,
                    res.translateResult.length - 1
                  );
                  // alert(self.result);
                  self.value = "剁椒鱼头";
                  self.handleAdd();
                  self.$store.commit("setfwarn", false);
                  self.$store.commit("setguide7", true);
                },
                fail: function(res) {
                  self.qz = false;
                  self.value = "剁椒鱼头";
                  self.handleAdd();
                  self.$store.commit("setfwarn", false);
                  self.$store.commit("setguide7", true);
                  // alert(JSON.stringify(res))
                }
              });
            }
          });
        },
        cancel: function() {
          this.tit = "用户拒绝授权录音";
        }
      });
    },
    fend() {
      let self = this;
      self.tit = "识别中...";
      wx.stopRecord({
        success: function(res) {
          self.localId = res.localId;
          wx.translateVoice({
            localId: self.localId, // 需要识别的音频的本地Id，由录音相关接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              self.qz = false;
              self.result = res.translateResult.substring(
                0,
                res.translateResult.length - 1
              );
              // alert(self.result);
              self.value = "剁椒鱼头";
              self.handleAdd();
              self.$store.commit("setfwarn", false);
              self.$store.commit("setguide7", true);
            },
            fail: function(res) {
              self.qz = false;
              self.value = "剁椒鱼头";
              self.handleAdd();
              self.$store.commit("setfwarn", false);
              // if(localStorage.getItem('guide7')==1) {
              self.$store.commit("setguide7", true);
              // }
            }
          });
        }
      });
      // }
    },
    end() {
      //  alert(this.warning)
      // let END = new Date().getTime();
      let self = this;
      // if (END - this.START < 300) {
      //   END = 0;
      //   this.START = 0;
      //小于300ms，不录音
      // wx.stopRecord();
      // this.tit = "时间过短，无法识别";
      // this.warning = true;
      // setTimeout(() => {
      //   this.warning = 0;
      // }, 600);
      // } else {
      // this.warning = false;
      // self.qz=true
      self.tit = "识别中...";
      wx.stopRecord({
        success: function(res) {
          // self.qz = true
          // alert(res.localId);
          self.localId = res.localId;
          wx.translateVoice({
            localId: self.localId, // 需要识别的音频的本地Id，由录音相关接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              self.qz = false;
              // self.tit = "识别中...";
              // alert(res.errMsg);
              //去掉最后一个句号
              self.result = res.translateResult.substring(
                0,
                res.translateResult.length - 1
              );
              // alert(self.result);
              self.value = self.result;
              self.handleAdd();
              self.$store.commit("setwarning", false);
            },
            fail: function(res) {
              self.tit = "我好像没听清";
              self.qz = false;
              self.it = false;
            }
          });
          // alert(self.value);
          // if (self.value=='') {
          //   alert('没听清');
          // } else {
          //   self.handleAdd();
          // }
        }
      });
      // }
    }
  },
  mounted() {
    // console.log(this.$store.state.fon)
    // if(this.$store.state.fon == true) {

    //   this.$refs.in.focus();
    //   this.$store.state.fon = false
    // }
    // this.$refs.in.focus();
    // console.log(localStorage.getItem("sea"));
    if (
      localStorage.getItem("sea") == null ||
      localStorage.getItem("sea") == ""
    ) {
      this.items = ["宫保鸡丁", "干锅排骨", "剁椒鱼头"];
    } else {
      this.items = localStorage.getItem("sea").split(",");
    }


    var url = "";
    // 判断是否是ios微信浏览器
    if (window.__wxjs_is_wkwebview === true) {
      url = this.$store.state.Url;
    } else {
      url = window.location.href;
    }
    // console.log(location.href);
    // encodeURIComponent(location.href)
    // console.log(url)
    // alert(url)
    getwxjssdk(encodeURIComponent(url)).then(res => {
      // console.log(res.data);

      //  console.log(res.data.appId);
      //  console.log(res.data.timestamp);
      //  console.log(res.data.nonceStr);
      //  console.log(res.data.signature);

      wx.config({
        debug: false,
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名
        jsApiList: [
          "startRecord",
          "stopRecord",
          "onVoiceRecordEnd",
          "translateVoice"
        ] // 必填，需要使用的JS接口列表
      });

      //语音面板
      if (this.$store.state.warning == true) {
        this.talk();
      }
      if (this.$store.state.fwarn == true) {
        this.ftalk();
      }
    });
  },
  watch: {
    // size: {
    //   handler: function (val, oldVal) {
    //     this.psize = val
    //   },
    //   deep: true
    // }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(30);

  .out {
    height: px2rem(100);
  }

  .top {
    position: fixed;
    top: 0px;
    left: px2rem(0);
    right: px2rem(0);
    padding-left: px2rem(30);
    padding-right: px2rem(30);
    text-align: center;
    height: px2rem(100);
    line-height: px2rem(100);
    background-color: #fff;
    z-index: 999;

    .left {
      float: left;
      margin-top: px2rem(28);
      width: px2rem(48);
    }

    .right {
      width: px2rem(54);
      float: right;
      margin-top: px2rem(24);
    }

    .ivu-input-wrapper {
      width: 78%;
    }
  }

  .bot {
    margin-top: px2rem(30);
    border-radius: 20px;
    box-shadow: 10px 10px 5px rgba(204, 204, 204, 0.4);

    div {
      position: relative;

      .tag {
        width: px2rem(234);
      }

      .heart {
        width: px2rem(36);
        position: absolute;
        top: 0.32rem;
        left: 0.75rem;
      }

      h3 {
        position: absolute;
        top: 0.32rem;
        left: 1.65rem;
        font: px2rem(24) Arial;
        color: #5A4030;
      }
    }

    .content {
      margin-left: px2rem(30);
      padding-bottom: px2rem(30);
    }

    >>>.ivu-tag {
      height: px2rem(50);
      width: px2rem(144);
      margin-right: px2rem(20);
      margin-bottom: px2rem(16);
      background: #5DB8E9;
      font: px2rem(20) Arail;
      text-align: center;
      border-radius: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 20px;
      // white-space nowrap
    }

    >>>.ivu-tag-text {
      line-height: px2rem(50);
      color: #fff;
      border-radius: 20px;
    }

    >>>.ivu-icon {
      font-size: px2rem(26);
      position: absolute;
      top: px2rem(11.5);
      right: px2rem(11);
      color: #fff;
      font-weight: 900;
    }
  }
}

>>>.ivu-input {
  height: px2rem(54) !important;
  border-color: #5DB8E9;
  font: px2rem(26) Arail;
  text-align: center;
  border-radius: 20px;
}

>>>.ivu-input-icon {
  line-height: px2rem(56);
  font-size: px2rem(35);
  margin-right: px2rem(14);
}

.warning {
  position: fixed;
  width: px2rem(600);
  height: px2rem(380);
  text-align: center;
  background: #ffffff;
  border-radius: 20px;
  left: 50%;
  top: 26%;
  transform: translateX(-50%);
  font-size: px2rem(36);
  color: #fff;
  z-index: 111112;
  overflow: hidden;

  h4 {
    line-height: px2rem(84);
  }
}

.v-enter {
  opacity: 0;
  top: 40%; /* 进入起点在屏幕100%部分,即屏幕最右 */
}

.v-leave-to {
  opacity: 1;
  // top: px2rem(180);
}

.v-enter-active, .v-leave-active {
  transition: all 0.1s ease-out;
}

@keyframes changDeg {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.warning>div {
  width: 100%;
  height: px2rem(84);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #5DB8E9;
  text-align: center;
}

.warning>div>img {
  width: px2rem(50);
  display: inline-block;
  margin: px2rem(8) auto;
}

.warning>p {
  // line-height: 100px;
  margin-top: px2rem(16);
  color: #5DB8E9;
  // margin-left: 100px;
}

.warning .clo {
  width: px2rem(40);
  position: absolute;
  top: px2rem(14);
  right: px2rem(12);
}

.warning .quan {
  position: absolute;
  top: px2rem(118);
  left: 50%;
  margin-left: px2rem(-60);
  width: px2rem(120);
  // animation: changDeg 2s linear 0.2s infinite;
}

.zhuan {
  animation: changDeg 2s linear 0.2s infinite;
}

.mask {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: #000;
  z-index: 9999;
  -moz-opacity: 0.4;
  opacity: 0.4;
  // -webkit-filter: blur(10px); /* Chrome, Opera */
  // -ms-filter: blur(10px);
  // filter: blur(10px);
}
</style>
