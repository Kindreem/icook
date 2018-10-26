<template>
  <div class="all">
    <router-link to="share"><img src="./img/RW-026.png" alt=""></router-link>
    <div class="title">
      <router-link to="works"><h4>上传作品</h4></router-link>
      <router-link to="cook"><h4>上传菜谱</h4></router-link>
    </div>
  </div>
</template>

<script>
export default {
  // methods:{
  //   back(){
  //       this.$router.go(-1);//返回上一层
  //   },
  // },
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30) px2rem(60)
  padding-top px2rem(40)
  // height px2rem(180)
  position relative
  img{
    position absolute
    top px2rem(32)
    right 0px
    width px2rem(48)
  }
  .title {
    display flex
    justify-content space-around
    font-size px2rem(24)
    color #ccc
    // padding-top px2rem(100)
  }
}
.router-link-active {
  h4 {
    color #5DB8E9
  }
}
</style>

