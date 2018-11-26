<template>
  <div class="conter">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
      <div class="head">
        <router-link to="/user">
         <div class="demo-avatar">
            <Avatar v-if="userphoto" :src="userphoto" />
            <Avatar v-else :src="require('../../common/img/TXXX.png')" />
            <!-- <Avatar v-else src="@/common/img/TXXX.png"/> -->
        </div>
         </router-link>
        <div class="name">
            <p>{{usernickname}}</p>
            <!-- <p>所属公会</p> -->
        </div>
        <div class="right" >
            <!-- <router-link :to="'/badshow/'+item.rankid" > -->
            <img v-for="(item,index) in userbadge" :key="index" :src="item.rankimg" alt="">
            <!-- </router-link> -->
        </div>
      </div>
       <!-- <div class="item">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的钱包</p>
            </div>
           <ul class="money">
               <li>第一种货币:999999</li>
               <li>第二种货币:999999</li>
               <li>第三种货币:999999</li>
           </ul>
       </div> -->
        <div class="item menu">
           <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我学会的菜肴:{{$store.state.dish.length}}道</p>
            </div>
           <ul class="menus">
             <swiper :options="swiperOption" v-if="$store.state.dish">
               <swiper-slide v-for="(item,index) in $store.state.dish" :key="index">
                   <router-link :to="'U_menu/'+item.ubid" >
                   <div class="ubimg" :style="{backgroundImage:'url(' + (item.ubthumbimg) + ')'}">
                   <!-- <img :src="item.ubthumbimg" alt=""> -->
                   </div></router-link>
                   <p>{{item.ubname}}</p>
               </swiper-slide>
               </swiper>
               <div class="nodata" v-else>暂无数据</div>
           </ul>
       </div>
       <div class="item menu" >
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的菜谱(共{{$store.state.caipu.length}}个)</p>
            </div>
            <ul class="menus">
             <swiper :options="swiperOption" v-if="$store.state.caipu">
               <swiper-slide v-for="(item,index) in $store.state.caipu" :key="index">
                   <router-link :to="'U_menu/'+item.ubid" >
                   <div class="ubimg" :style="{backgroundImage:'url(' + (item.ubthumbimg) + ')'}">
                   <!-- <img :src="item.ubthumbimg" alt=""> -->
                   </div></router-link>
                   <p>{{item.ubname}}</p>
               </swiper-slide>
               </swiper>
               <div class="nodata" v-else>暂无数据</div>
           </ul>
       </div>
       <div class="item menu">
             <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我的作品(共{{$store.state.feed.length}}个)</p>
            </div>
           <ul class="menus">
             <swiper :options="swiperOption" v-if="$store.state.feed">
               <swiper-slide v-for="(item,index) in $store.state.feed" :key="index">
                   <router-link :to="'myfeed/'+item.ufid" >
                   <div class="ubimg" :style="{backgroundImage:'url(' + (item.ufimg) + ')'}">
                   </div></router-link>
                   <p>{{item.ufname}}</p>
               </swiper-slide>
               </swiper>
               <div class="nodata" v-else>暂无数据</div>
           </ul>
       </div>
         <div class="item menu" >
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的收藏(共{{$store.state.shoucang.length}}个)</p>
            </div>
           <ul class="menus">
             <swiper :options="swiperOption" v-if="$store.state.shoucang">
               <swiper-slide v-for="(item,index) in $store.state.shoucang" :key="index">
                   <router-link :to="'U_menu/'+item.ubid" >
                   <div class="ubimg" :style="{backgroundImage:'url(' + (item.ubthumbimg) + ')'}">
                   </div></router-link>
                   <p>{{item.ubname}}</p>
               </swiper-slide>
               </swiper>
               <div class="nodata" v-else>暂无数据</div>
           </ul>
       </div>
         <!-- <router-link to="conter/badge" > -->
       <div class="item badge">
            <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的徽章</p>
           </div>
           <ul class="badges">
               <swiper :options="swiperOption1"  v-if="$store.state.badge">
                     <swiper-slide v-for="(item,index) in $store.state.badge" :key="index">
                    <router-link :to="'/badshow/'+item.ufeid" >
                     <img :src="item.rankimg" alt="">
                     <p>{{item.rankname}}</p>
                    </router-link>
                </swiper-slide>
               </swiper>
               <div class="nodata" v-else>暂无数据</div>
           </ul>
           <div class="ficon" v-if="guide3">
         <img src="./1.png" alt="">
       </div>
       </div>
       <!-- </router-link> -->
        <div class="item badge">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的成就</p>
            </div>
           <ul class="badges">
                <swiper :options="swiperOption1"  v-if="$store.state.myach">
                     <swiper-slide v-for="(item,index) in $store.state.myach" :key="index">
                    <router-link :to="'/show/'+item.achievementid" >
                     <img :src="item.achievementimg" alt="">
                     <p>{{item.achievementname}}</p>
                    </router-link>
                </swiper-slide>
               </swiper>
             <div class="nodata" v-else>暂无数据</div>
           </ul>
       </div>
       <div class="fimg" v-if="guide3">
         <img src="./1.png" alt="">
         <img src="./2.png" alt="">
         <img src="./3.png" alt="">
       </div>
       <!-- <div class="item fitem" v-if="guide3">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的钱包</p>
            </div>
           <ul class="money">
               <li>第一种货币:999999</li>
               <li>第二种货币:999999</li>
               <li>第三种货币:999999</li>
           </ul>
       </div> -->

    <div class="guide" v-if="guide3">
     <h4 class="h1">点击此处可查看所获徽章</h4>
     <!-- <h4 class="h2">此处是您的“I厨神”货币概况</h4> -->
     <h4 class="h3">此处可浏览您已获得的所有徽章，徽章不仅是收藏品，还能装备在首页向全网展示您已达成的成就。</h4>
     <img class="img1" src="./4-个人中心 (1).png" alt="">
     <!-- <img class="img2" src="./4-个人中心 (2).png" alt=""> -->
     <img class="img3" src="./4-个人中心 (3).png" alt="">
     <img class="img4" src="./4-个人中心 (4).png" alt="">
     <button @click="end">朕知道了</button>
   </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mybook, mybookcollect,myfeed,myachievement,mybadge,mydish,userbadge } from "@/api";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        // spaceBetween: 24,
        freeMode: true,
        slidesOffsetBefore: 24
      },
      swiperOption1: {
        slidesPerView: 4,
        // spaceBetween: 24,
        freeMode: true
        // slidesOffsetBefore: 24,
      },
      url: "", //头像
      usernickname: "",
      userphoto: "",
      userid: "",
      myach:'',
      guide3: false,
      userbadge: ''
    };
  },
  created() {
    this.usernickname = localStorage.getItem("usernickname");
    this.userphoto = localStorage.getItem("userphoto");
    this.userid = localStorage.getItem("userid");
    //我的菜谱
    mybook(this.userid).then(res => {
      if (res.code == 200) {
        // this.mycook = res.data;
        if (this.$store.state.caipu == res.data) {
          this.$store.state.caipu = this.$store.state.caipu;
          console.log(1)
        } else {
          this.$store.state.caipu = res.data;
          // console.log(this.$store.state.caipu)
        }
      }
    });
    //我de收藏
    mybookcollect(this.userid).then(res => {
      if (res.code == 200) {
        // this.mybookcollect = res.data;
        if (this.$store.state.shoucang == res.data) {
          this.$store.state.shoucang = this.$store.state.shoucang;
          // console.log(1)
        } else {
          this.$store.state.shoucang = res.data;
          // console.log(this.$store.state.shoucang)
        }
      }
      // console.log(res.data);
    });
    //我的作品
    myfeed(this.userid).then(res => {
      if (res.code == 200) {
        // this.mybookcollect = res.data;
        if (this.$store.state.feed == res.data) {
          this.$store.state.feed = this.$store.state.feed;
          // console.log(1)
        } else {
          this.$store.state.feed = res.data;
          // console.log(this.$store.state.shoucang)
        }
      }
      // console.log(res.data);
    });

  //我的成就
  myachievement(this.userid).then(res=>{
    if(res.code==200){
      if (this.$store.state.myach == res.data) {
          this.$store.state.myach = this.$store.state.myach;
      }else{
        this.$store.state.myach = res.data
      }
    }
    // console.log(res.data)
  })
  //我的徽章
  mybadge(this.userid).then(res=>{
    if(res.code==200){
      if (this.$store.state.badge == res.data) {
          this.$store.state.badge = this.$store.state.badge;
      }else{
        this.$store.state.badge = res.data
      }
    }
  })
  //我学会的菜肴
  mydish(this.userid).then(res=>{
    if(res.code==200){
      if (this.$store.state.dish == res.data) {
          this.$store.state.dish = this.$store.state.dish;
      }else{
        this.$store.state.dish = res.data
      }
    }
  })
  //展示徽章
  userbadge(this.userid).then(res=>{
    if(res.code==200){
      this.userbadge=res.data
      console.log(res.data)
    }
  })
  },
  mounted() {
    this.url = this.$store.state.picimg;
    if(localStorage.getItem('guide3')==1) {
        this.guide3=true
    }
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    end() {
      localStorage.setItem('guide3',0)
      this.guide3=false
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/hotcss/px2rem.scss";
.guide {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  .h1 {
    position: absolute;
    top: px2rem(70);
    right: px2rem(180);
    color: #fff;
    font-size: px2rem(13);
    letter-spacing: px2rem(2);
    line-height: px2rem(18);
    width: px2rem(140);
    white-space: normal;
  }
  .h2 {
    position: absolute;
    top: px2rem(350);
    left: 50%;
    margin-left: px2rem(-92);
    color: #fff;
    font-size: px2rem(13);
    letter-spacing: px2rem(2);
    line-height: px2rem(18);
    width: px2rem(184);
    white-space: normal;
  }
  .h3 {
    position: absolute;
    bottom: px2rem(376);
    left: 50%;
    margin-left: -45%;
    color: #fff;
    font-size: px2rem(13);
    letter-spacing: px2rem(2);
    line-height: px2rem(18);
    width: 90%;
    white-space: normal;
  }
  .img1 {
    position: absolute;
    top: px2rem(78);
    right: px2rem(131.5);
    // margin-left: px2rem(-8.5);
    width: px2rem(50);
  }
  .img2 {
    position: absolute;
    top: px2rem(282);
    left: 50%;
    margin-left: px2rem(-8.5);
    width: px2rem(14);
  }
  .img3 {
    position: absolute;
    top: 38%;
    left: 50%;
    margin-left: px2rem(-24);
    width: px2rem(48);
  }
  .img4 {
    position: absolute;
    bottom: px2rem(288);
    left: px2rem(70);
    width: px2rem(18);
  }
  button {
    position: absolute;
    bottom: px2rem(90);
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
.ficon {
  position: absolute;
  bottom: px2rem(38);
  left: px2rem(-32);
  margin-left: 12.5%;
  z-index: 10000;
  img {
    width: px2rem(64);
  }
}
.fitem {
  position: absolute;
  top: px2rem(120);
  // left: 20px;
  left: px2rem(10);
  z-index: 10000;
  width: 95.5% !important;
  // height: 90px;
  background: #fff;
  // border-radius: 10px;
  // text-align: center;
    // margin-left: 20px;
  z-index: 10000;
}
.fimg {
  position: absolute;
  top: px2rem(66);
  right: px2rem(5);
  width: px2rem(120);
  height: px2rem(45);
  background: #fff;
  border-radius: px2rem(5);
  text-align: center;
  z-index: 10000;
  img {
    width: px2rem(35);
    margin-top: px2rem(5);
  }
}
.conter {
  position: relative;
  height: 100%;
  .header {
    height: px2rem(44);
    background: none;
    text-align: left;
    div {
      padding:  px2rem(10);
    }
    img {
      margin-top: px2rem(5);
      width: px2rem(24);
    }
  }
  padding: px2rem(10);
  text-align: left;
  .head {
    position: relative;
    span {
      width: px2rem(65);
      height: px2rem(65);
      border-radius: 50%;
    }
    .name {
      position: absolute;
      font-size: px2rem(12);
      top: px2rem(16);
      left: px2rem(75);
      transform: translateY(50%);
      p:last-child {
        color: #999;
      }
    }
    .right {
      vertical-align: middle;
      position: absolute;
      transform: translateY(50%);
      text-align: right;
      top: 0;
      right: 0;
      img {
        width: px2rem(35);
        // height: px2rem(35);
      }
    }
  }
  .item.menu {
    height: px2rem(170);
    // padding-left: px2rem(28);
    // ===========================修改处
    .menus {
      overflow: hidden;
      p{
        padding:0 px2rem(13);
      }
    }
    .swiper-container{
      overflow: hidden;
      margin-left: px2rem(-10);
      width: 100%;
      .swiper-wrapper {
        display: flex;
        display: -webkit-flex;
        width: 700%;
        .swiper-slide {
          // width: 33.333%;
          text-align: center;
          img {
            width: px2rem(90);
            border-radius: 20px;
          }
          .ubimg {
            margin: 0 auto;
            width: px2rem(90);
            height: px2rem(90);
            border-radius: px2rem(10);
            background-repeat: no-repeat;
            background-size: px2rem(120) px2rem(120);
            background-position: center center;
            overflow: hidden;
          }
        }
      }
    }
  }

  ul.badges {
    overflow: hidden;
    color: #666;
    .swiper-container {
      width: 100%;
      .swiper-wrapper {
        display: flex;
        width: 220%;
        .swiper-slide {
          text-align: center;
          img {
            width: px2rem(64);
            height: px2rem(64);
          }
        }
      }
      p{
        color: #666
      }
    }
  }
  .item.badge {
    height: px2rem(150);
    position: relative;
  }
  .item {
    width: 100%;
    height: px2rem(130);
    margin-top: px2rem(15);
    border-radius: px2rem(10);
    box-shadow: 5px 6px 3px 6px rgba(0, 0, 0, 0.1);
    .nodata{
      width: 100%;
      margin-top: px2rem(38);
      font-size: px2rem(16);
      text-align: center;
    }
    .title {
      width: px2rem(180);
      height: px2rem(30);
      position: relative;
      img {
        width: px2rem(180);
        height: px2rem(40);
      }
      p {
        font-size: px2rem(12);
        line-height: px2rem(30);
        margin-left: px2rem(20);
        padding-left: px2rem(25);
        background: url(./titles.png) no-repeat center left;
        background-size: px2rem(20) px2rem(15);
        position: absolute;
        color: #666;
        top: 0;
      }
    }
    ul {
      list-style: none;
      font-size: px2rem(12);
      margin-top: px2rem(15);
      display: flex;
      flex-wrap: wrap;
    }
    ul.money {
      display: block;
      li {
        text-align: left;
        margin: px2rem(8) px2rem(20);
      }
    }
  }
}
</style>
