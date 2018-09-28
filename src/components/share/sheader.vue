<template>
  <div class="all">
    <header>
      <router-link to="conter"><div class="head"><img :src="userphoto" alt=""><h4>{{usernickname}}</h4></div></router-link>
      <div class="icon"><img src="../../common/img/川派徽章/1川派学员.png" alt=""><img src="../../common/img/川派徽章/4川派达人.png" alt=""></div>
      <router-link to="home"><div class="close"><img src="./img/RW-026.png" alt=""></div></router-link>
    </header>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      usernickname: '',
      userphoto: ''
    }
  },
  // methods:{
  //   back(){
  //       this.$router.go(-1);//返回上一层
  //   },
  // },
  mounted() {
    this.usernickname = localStorage.getItem("usernickname");
    this.userphoto = localStorage.getItem("userphoto");
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30)
  header {
    height px2rem(100)
    padding px2rem(12) 0 px2rem(12)
    .head {
      float left
      margin-right px2rem(24)
      img {
        border-radius 50%
        width px2rem(64)
      }
      h4 {
        display inline-block
        font-size px2rem(24)
        position relative
        top px2rem(-18)
        left px2rem(20)
      }
    }
    .icon {
      float left
      img {
        width px2rem(72)
      }
    }
    .close {
      float right
      margin 16px
      img {
        width px2rem(48)
      }
    }
  }
}
</style>

