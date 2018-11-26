<template>
  <div class="all">
    <header>
      <router-link to="conter">
        <div class="head">
          <img v-if="userphoto" :src="userphoto" alt="">
          <img v-else src="@/common/img/TXXX.png" alt="">
          <h4>{{usernickname}}</h4>
        </div>
      </router-link>
      <div class="icon"><img v-for="(item,index) in userbadge" :key="index" :src="item.rankimg" alt=""></div>
      <router-link to="/"><div class="close"><img src="./img/RW-026.png" alt=""></div></router-link>
    </header>
  </div>
</template>

<script>
import { userbadge } from "@/api";
export default {
  props: ["value"],
  data() {
    return {
      usernickname: "",
      userphoto: "",
      userbadge: ''
    };
  },
  // methods:{
  //   back(){
  //       this.$router.go(-1);//返回上一层
  //   },
  // },
  mounted() {
    this.usernickname = localStorage.getItem("usernickname");
    this.userphoto = localStorage.getItem("userphoto");
    userbadge(localStorage.getItem("userid")).then(res => {
      if (res.code == 200) {
        this.userbadge = res.data;
      }
      // console.log(res.data)
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(30);

  header {
    height: px2rem(100);
    padding: px2rem(12) 0 px2rem(12);

    .head {
      float: left;
      margin-right: px2rem(20);

      img {
        border-radius: 50%;
        width: px2rem(48);
      }

      h4 {
        display: inline-block;
        font-size: px2rem(24);
        position: relative;
        top: px2rem(-15);
        left: px2rem(10);
      }
    }

    .icon {
      float: left;
      margin-top: px2rem(6);

      img {
        width: px2rem(36);
        margin-right: px2rem(10);
      }
    }

    .close {
      float: right;

      // margin px2rem(0)
      img {
        width: px2rem(48);
      }
    }
  }
}
</style>

