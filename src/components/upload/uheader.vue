<template>
  <div class="all">
    <router-link to="home"><img src="./img/RW-026.png" alt=""></router-link>
    <div class="title">
      <router-link to="works"><h4>上传作品</h4></router-link>
      <router-link to="home"><h4>上传菜谱</h4></router-link>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin px2rem(26) px2rem(30)
  height px2rem(180)
  position relative
  img{
    position absolute
    top 0px
    right 0px
  }
  .title {
    display flex
    justify-content space-around
    font-size px2rem(24)
    color #ccc
    padding-top px2rem(100)
  }
}
.router-link-active {
  h4 {
    color #5DB8E9
  }
}
</style>

