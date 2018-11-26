<template>
<div class="all">
    <header>
      <img src="../public/img/DR-005.png" alt="" @click="back">
      <h3>我的作品</h3>
    </header>
    <section>
      <div class="top">
        <img class="head" :src="userphoto" alt=""><h4>{{usernickname}}</h4><img v-for="(item,index) in userbadge" :key="index" :src="item.rankimg" alt="">
        <div class="time">
           <h4>{{time}}</h4>
        </div>
      </div>
      <div class="center">
         <h2>{{item.ufname}}</h2>
         <p>{{item.uftext}}</p>
         <img :src="item.ufimg" alt="">
      </div>
    </section>
</div>


</template>
<script>
import { getfeed, userbadge } from "@/api";
export default {
  data() {
    return {
      item: "",
      usernickname: "",
      userphoto: "",
      time: "",
      userbadge: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    this.usernickname = localStorage.getItem("usernickname");
    this.userphoto = localStorage.getItem("userphoto");
    let ufid = this.$route.params.id;
    //  console.log(this.$route.params.id)
    getfeed(ufid).then(res => {
      this.item = res.data;
      this.time = res.data.createtime.slice(0, 11);
      //  console.log(res.data)
      userbadge(res.data.userid).then(res => {
        if (res.code == 200) {
          this.userbadge = res.data;
        }
        // console.log(res.data);
      });
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: px2rem(12) px2rem(32);
}

header {
  height: px2rem(88);
  line-height: px2rem(88);

  img {
    margin-top: px2rem(18);
    float: left;
    width: px2rem(48);
  }

  h3 {
    text-align: center;
    font-size: px2rem(32);
    font-weight: 300;
    color: #199ed8;
  }
}

section {
  padding: px2rem(20);
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);

  .top {
    position: relative;

    h4 {
      font-size: px2rem(26);
      display: inline;
      position: relative;
      top: px2rem(-12);
    }

    img {
      width: px2rem(44);
      display: inline-block;
      margin-left: px2rem(10);
    }

    .head {
      width: px2rem(48);
      border-radius: 50%;
      margin-right: px2rem(10);
      margin-left: 0px;
    }

    .time {
      position: absolute;
      right: px2rem(10);
      top: px2rem(20);
      color: #888;
    }
  }

  .center {
    margin-top: px2rem(20);
    margin-left: px2rem(58);

    h2 {
      font-size: px2rem(24);
    }

    p {
      font-size: px2rem(24);
      margin-top: px2rem(20);
      line-height: px2rem(34);
      word-wrap: break-word;
      color: #888;
    }

    img {
      width: 100%;
      border-radius: 20px;
      height: px2rem(588 / 16 * 9);
      display: block;
    }
  }
}
</style>

