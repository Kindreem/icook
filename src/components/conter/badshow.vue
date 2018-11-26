<template>
  <div class="show">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <h3>{{mylist.rankname}}</h3>
      </header>
      <div class="badge" :style="{height:height+ 'px'}">
          <p class="title" v-show="ubadgeid==0?1:0">未展示</p>
          <p class="title" v-show="ubadgeid>0?1:0">展示中</p>
          <img :src="mylist.rankimg" alt="" :style="{'margin-top':height/2.9+ 'px'}">
          <p>{{mylist.rankname}}</p>
          <!-- <span>{{mylist.outline}}</span> -->
          <div class="end">
              <span>{{mylist.createtime}}</span>
              <!-- <span>{{mylist.explain}}</span> -->
              <span>已解锁</span>
          </div>

          <div class="fbad" :style="{top:height/2.95+ 'px'}" v-if="guide8">
            <img :src="mylist.rankimg" alt="">
            <p>{{mylist.rankname}}</p>
          </div>
      </div>
      <p class="tit">最多可展示3个</p>
       <div class="btn">
           <button class="demount" @click="bup">展示</button>
           <button class="change" @click="bdown">卸下</button>

           <button class="demount fde" v-if="guide8">展示</button>
       </div>

      <div class="fhead" v-if="guide8" :style="{top:height/1.065+ 'px'}">
        <img class="ffimg" src="./1-006（头像）.png" alt="">
        <h4>随便取个名</h4>
        <div class="icon">
        <img src="./1.png" alt="">
        <img src="./2.png" alt="">
        <img src="./3.png" alt="">
        </div>
      </div>
      <div class="guide" v-if="guide8">
        <h4 class="h1" :style="{top:height/1.31+ 'px'}">这就是您得到的徽章啦，是不是很好看！<br>您还可以点击更换，将它放置在首页个人中心用以展示您的伟大成绩！您的个人最多能展示3个这样的徽章。快来试试吧！</h4>
        <img class="img1" src="./10-徽章.png" alt="" :style="{top:height/1.6+ 'px'}">
       <button @click="end">朕知道了</button>
      </div>
  </div>
</template>

<script>
import { mybadgeinfo, badgedown, badgeup } from "@/api";
export default {
  data() {
    return {
      height: "",
      userid: "",
      mylist: "",
      ufeid: "",
      guide8: false,
      ubadgeid: ""
    };
  },
  created() {
    this.height = document.documentElement.clientHeight * 0.7; //0.7
    this.userid = localStorage.getItem("userid");
    this.ufeid = this.$route.params.id;
    mybadgeinfo(this.userid, this.ufeid).then(res => {
      if (res.code == 200) {
        this.mylist = res.data;
        this.ubadgeid = res.data.ubadgeid;
      }
      console.log(res);
    });
  },
  mounted() {
    if (localStorage.getItem("guide8") == 1) {
      this.guide8 = true;
    }
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    end() {
      localStorage.setItem("guide8", 0);
      this.guide8 = false;
    },
    bdown() {
      badgedown(this.userid, this.mylist.ubadgeid).then(res => {
        if (res.code == 200) {
          this.ubadgeid = 0;
          console.log(res);
        }
      });
    },
    bup() {
      badgeup(this.userid, this.mylist.rankid, this.mylist.rankimg).then(
        res => {
          if (res.code == 200) {
            this.ubadgeid = 1;
            mybadgeinfo(this.userid, this.ufeid).then(res => {
              if (res.code == 200) {
                this.mylist = res.data;
                this.ubadgeid = res.data.ubadgeid;
              }
              // console.log(res);
            });
          }
          console.log(res);
        }
      );
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
    // bottom: 34%;
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
    // bottom: 46%;
    left: 14%;
    // margin-left: px2rem(-10);
    width: px2rem(40);
  }
  button {
    position: fixed;
    bottom: 20%;
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
  // bottom: 29%;
  left: 8%;
  z-index: 10001;
  height: px2rem(29);
  line-height: px2rem(29);
  background: #fff;
  border-radius: px2rem(6);
  padding: px2rem(1.3) px2rem(10);
  h4 {
    display: inline-block;
  }
  h4 {
    font-size: px2rem(13);
    vertical-align: middle;
    font-weight: normal;
    color: #888;
  }
  .ffimg {
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
  z-index: 10001;
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
    h3 {
      font-size: px2rem(16);
      color: #199ed8;
      text-align: center;
      position: absolute;
      top: px2rem(20);
      left: 50%;
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
    .title {
      // font-size: px2rem(20);
      position: absolute;
      font-size: px2rem(12.5);
      color: #888;
      top: px2rem(20);
      right: 0;
      transform: translateX(-50%);
    }
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
      span:nth-child(2) {
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
