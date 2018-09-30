<template>
  <div class="conter">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
      <div class="head">
         <div class="demo-avatar">
            <Avatar :src="userphoto" />
        </div>
        <div class="name">
            <p>{{usernickname}}</p>
            <p>所属公会</p>
        </div>
        <div class="right">
          <!-- <v-for v-for="(item,index) in myach" :key="index"> -->
            <router-link :to="'/show/'+1" ><img src="./2.png" alt=""></router-link>
            <router-link :to="'/show/'+1" ><img src="./2.png" alt=""></router-link>
            <router-link :to="'/show/'+1" ><img src="./2.png" alt=""></router-link>
          <!-- </v-for> -->
        </div>
      </div>
       <div class="item">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的钱包</p>
            </div>
           <ul class="money">
               <li>第一种货币:999999</li>
               <li>第二种货币:999999</li>
               <li>第三种货币:999999</li>
           </ul>
       </div>
        <div class="item menu">
           <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我学会的菜肴:38道</p>
            </div>
           <ul class="menus">
             <swiper :options="swiperOption">
               <swiper-slide v-for="(item,index) in imgs" :key="index">
                   <img src="./pic.png" alt="">
                   <p>蛋炒饭</p>
               </swiper-slide>
               </swiper>
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
         <router-link to="conter/badge" >
       <div class="item badge">
            <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的徽章</p>
           </div>
           <ul class="badges">
               <swiper :options="swiperOption1">
                     <swiper-slide v-for="(item,index) in imgs" :key="index">
                        <router-link to="dan/dan" >
                        <img :src="item.url" alt="">
                        </router-link>
                        <p>段位</p>
                </swiper-slide>
               </swiper>
           </ul>
       </div></router-link>
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

  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mybook, mybookcollect,myfeed,myachievement} from "@/api";
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
      imgs: [
        { url: require("./1.png") },
        { url: require("./8.png") },
        { url: require("./3.png") },
        { url: require("./4.png") },
        { url: require("./4.png") },
        { url: require("./4.png") },
        { url: require("./4.png") },
        { url: require("./4.png") },
        { url: require("./4.png") }
      ],
      usernickname: "",
      userphoto: "",
      userid: "",
      myach:''
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
    console.log(res.data)
  })

  },
  mounted() {
    this.url = this.$store.state.picimg;
  },
  methods: {
    backto() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/hotcss/px2rem.scss";
.conter {
  .header {
    height: px2rem(44);
    background: none;
    text-align: left;
    div {
      padding: 20px;
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
      top: 0;
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
        height: px2rem(35);
      }
    }
  }
  .item.menu {
    height: px2rem(170);
    // padding-left: px2rem(28);
    // ===========================修改处
    .menus {
      overflow: hidden;
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
