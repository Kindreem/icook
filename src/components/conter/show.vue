<template>
  <div class="show">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <!-- <p class="title">展示中</p> -->
      </header>
      <div class="badge" :style="{height:height+ 'px'}">
          <img :src="mylist.achievementimg" alt="" :style="{'margin-top':height/2.9+ 'px'}">
          <p>{{mylist.achievementname}}</p>
          <span>{{mylist.outline}}</span>
          <div class="end">
              <span>{{mylist.createtime}}</span>
              <span>{{mylist.explain}}</span>
              <span>已解锁</span>
          </div>

          <!-- <div class="fbad" :style="{top:height/2.95+ 'px'}" v-if="guide8">
            <img :src="mylist.achievementimg" alt="">
            <p>{{mylist.achievementname}}</p>
          </div> -->
      </div>
      <!-- <p class="tit">最多可展示3个</p>
       <div class="btn">
           <button class="demount">卸下</button>
           <button class="change">更换</button>

           <button class="demount fde" v-if="guide8">卸下</button>
       </div> -->

      <!-- <div class="fhead" v-if="guide8">
        <img class="fimg" src="./1-006（头像）.png" alt="">
        <h4>随便取个名</h4>
        <div class="icon">
        <img src="./1.png" alt="">
        <img src="./2.png" alt="">
        <img src="./3.png" alt="">
        </div>
      </div>
      <div class="guide" v-if="guide8">
        <h4 class="h1">这就是您得到的徽章啦，是不是很好看！<br>您还可以点击更换，将它放置在首页个人中心用以展示您的伟大成绩！您的个人最多能展示3个这样的徽章。快来试试吧！</h4>
        <img class="img1" src="./10-徽章.png" alt="">
       <button @click="end">朕知道了</button>
      </div> -->
  </div>
</template>

<script>
import { myachinfo } from "@/api";
export default {
  data() {
    return {
      height: "",
      userid: "",
      mylist: "",
      guide8: false
    };
  },
  created() {
    this.userid = localStorage.getItem("userid");
    let achid = this.$route.params.id;
    myachinfo(achid, this.userid).then(res => {
      if (res.code == 200) {
        this.mylist = res.data;
      }
      console.log(res);
    });
  },
  mounted() {
    let number = document.documentElement.clientHeight * 0.85; //0.7
    this.height = number;
    if(localStorage.getItem('guide8')==1) {
        this.guide8=true
    }
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    end() {
      localStorage.setItem('guide8',0)
      this.guide8=false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/hotcss/px2rem.scss";
.guide {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  .h1 {
    position: fixed;
    bottom: 34%;
    left: 50%;
    margin-left: -42%;
    text-align: left;
    color: #fff;
    font-size: px2rem(13);
    letter-spacing: px2rem(2);
    line-height: px2rem(18);
    width: 84%;
    font-weight: normal;
    white-space: normal;
  }
  .img1 {
    position: fixed;
    bottom: 46%;
    left: 14%;
    // margin-left: px2rem(-10);
    width: px2rem(40);
  }
  button {
    position: fixed;
    bottom: px2rem(150);
    left: 50%;
    margin-left: px2rem(-45);
    width: px2rem(90);
    height: px2rem(27);
    color: #fff;
    font-size: px2rem(13);
    border: 1px solid #fff;
    border-radius: 10px;
    background: transparent;
    outline: none;
  }
}
.fhead {
  position: fixed;
  bottom: 29%;
  left: 8%;
  z-index: 10001;
  height: px2rem(29);
  background: #fff;
  border-radius: px2rem(6);
  padding: px2rem(2.5) px2rem(10);
  img,h4 {
    display: inline-block;
  }
  h4 {
    font-size: px2rem(13);
    vertical-align: middle;
    font-weight: normal;
    color: #888
  }
  .fimg {
    width: px2rem(24);
    vertical-align: middle;
    border-radius: 50%;
    margin-right: px2rem(4);
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    img {
      vertical-align: middle;
      width: px2rem(18);
      margin-left: px2rem(3);
    }
  }
}
.fde {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10001
}
.fbad {
  position: absolute;
  // top: 34%;
  left: 50%;
  z-index: 10001;
  margin-left: px2rem(-70);
  width: px2rem(140);
  height: px2rem(120);
  background: #fff;
  border-radius: 20px;
  img {
    margin-top: px2rem(2) !important;
    width: px2rem(90);
  }
  p {
    // margin-top: px2rem(6);
    font-size: px2rem(13);
  }
}
.show {
  text-align: center;
  .header {
    height: px2rem(44);
    background: none;
    text-align: left;
    position: relative;
    margin-left: px2rem(10);
    .title {
      font-size: px2rem(20);
      position: absolute;
      font-size: px2rem(14);
      color: #199ed8;
      top: px2rem(20);
      right: 0;
      transform: translateX(-50%);
    }
    div {
      padding: 20px;
    }
    img {
      margin-top: px2rem(20);
      width: px2rem(24);
    }
  }
  .badge {
    width: 90%;
    box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: px2rem(10) auto;
    color: #999;
    position: relative;
    img {
      width: px2rem(90);
      // margin-top: 48%;
    }
    p {
      margin-top: px2rem(6);
      color: #666;
      font-size: px2rem(13);
    }
    span {
      font-size: px2rem(10);
    }
    .end {
      width: 90%;
      position: absolute;
      bottom: px2rem(10);
      margin: 0 px2rem(20);
      text-align: center;
      span:nth-child(1) {
        float: left;
        margin-left: px2rem(-10);
      }
      span:nth-child(3) {
        margin-left: px2rem(15);
        transform: translateX(px2rem(8));
        float: right;
      }
    }
  }
  p.tit {
    margin-top: px2rem(20);
    font-size: px2rem(14);
    color: #777;
  }
  .btn {
    position: relative;
    font-size: px2rem(16);
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: px2rem(8) auto;
    button {
      width: px2rem(150);
      height: px2rem(40);
      border-radius: px2rem(10);
      outline: none;
      border: none;
    }
    .demount {
      background: #5db8e9;
      color: #fff;
      margin-right: px2rem(20);
    }
    .change {
      color: #999;
      background: white;
      box-shadow: 8px 8px 2px #d7d7d7;
    }
  }
}
</style>
