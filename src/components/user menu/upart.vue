<template>
  <div class="all">
    <div class="ban">
      <section class="top"><h1>快手香辣牛蛙</h1><img src="./img/ZY-041.png" alt=""></section>
      <section class="bot"><img src="./img/1-018.png" alt=""></section>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30) px2rem(40)
  .top {
    height px2rem(78)
    background #5DB8E9
    text-align center
    border-top-left-radius 20px
    border-top-right-radius 20px
    position relative
    h1 {
      font-size px2rem(36)
      color #fff
      line-height px2rem(78)
    }
    img {
      position absolute
      top px2rem(-20)
      right px2rem(40)
    }
  }
  .bot {
    padding px2rem(20) px2rem(30) px2rem(50)
    img {
      width 100%
    }
  }
}
.ban {
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  border-radius 20px
}
</style>

