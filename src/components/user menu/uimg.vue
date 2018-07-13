<template>
  <div class="all">
    <section class="top"><img src="../../common/img/links/1-001.jpg" alt=""></section>
    <section class="bot">
      <div class="head"><img src="./img/head/TX (2).png" alt=""><h4>取什么名</h4></div>
      <div class="icon"><img src="../../common/img/川派徽章/1川派学员.png" alt=""><img src="../../common/img/川派徽章/4川派达人.png" alt=""></div>
      <div class="good"><img src="./img/ZY-012.png" alt=""><h4>9898</h4></div>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30) px2rem(40)
  .top {
    margin px2rem(24) 0 px2rem(52)
    img {
      width 100%
      box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
      border-radius 20px
    }
  }
  .bot {
    position relative
    height px2rem(104)
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    .head {
      position absolute
      top px2rem(20)
      left px2rem(20)
      img {
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
      position absolute
      top px2rem(18)
      left px2rem(224)
      img {
        width px2rem(72)
      }
    }
    .good {
      position absolute
      top px2rem(30)
      right px2rem(40)
      img {
        width px2rem(48)
      }
      h4 {
        display inline-block
        font-size px2rem(20)
        color #666
        position relative
        top px2rem(-12)
      }
    }
  }
}
</style>
