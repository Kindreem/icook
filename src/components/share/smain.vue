<template>
  <div class="all">
    <h1>分享我厨的点点滴滴</h1>
    <section class="pic">
      <router-link to="works">
        <div><img src="./img/RW-027.png" alt=""></div>
      </router-link>
      <router-link to="cook">
        <div><img src="./img/RW-028.png" alt=""></div>
      </router-link>
    </section>
    <section class="text">
      <div><p>传作品</p><p>赢菜谱徽章</p></div>
      <div><p>传菜谱</p><p>赢等级头衔</p></div>
    </section>
    <div class="bot"><h3>草稿箱</h3></div>
  </div>
</template>



<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(66)
  h1 {
    line-height px2rem(84)
    font-size px2rem(32)
    color #199ed8
    text-align center
  }
  section {
    display flex
    justify-content space-between
    div {
      box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
      border-radius 20px
    }
  }
  .pic {
    margin-bottom px2rem(40)
    div {
      height px2rem(300)
      width px2rem(143*2)
      img {
        width px2rem(48*2)
        margin-top px2rem(102)
        margin-left px2rem(95)
      }
    }
  }
  .text {
    div {
      height px2rem(56*2)
      width px2rem(143*2)
      text-align center
      padding-top px2rem(26)
      p {
        font-size px2rem(24)
        line-height px2rem(36)
      }
    }
  }
  .bot {
    height px2rem(80)
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    text-align center
    margin-top px2rem(80)
    h3 {
      font-size px2rem(28)
      line-height px2rem(80)
    }
  }
}
</style>

