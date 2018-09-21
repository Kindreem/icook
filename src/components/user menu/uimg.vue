<template>
  <div class="all">
    <section class="top"><img :src="userlist.ubthumbimg" alt=""></section>
    <section class="bot">
      <div class="head"><img :src="userlist.userphoto" alt=""><h4>{{userlist.usernickname}}</h4></div>
      <div class="icon"><img src="../../common/img/川派徽章/1川派学员.png" alt=""><img src="../../common/img/川派徽章/4川派达人.png" alt=""></div>
      <div class="good"><img src="./img/ZY-012.png" alt=""><h4>{{userlist.star}}</h4></div>
    </section>
    <section class="text"><p>{{userlist.ubtext}}</p></section>
  </div>
</template>

<script>
export default {
  props: ["userlist"],
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30) px2rem(140)
  .top {
    margin px2rem(20) 0 px2rem(20)
    img {
      width 100%
      box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
      border-radius 20px
    }
  }
  .bot {
    position relative
    height px2rem(48)
    // box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    // border-radius 20px
    .head {
      float left
      // top px2rem(0)
      // left px2rem(20)
      img {
        width px2rem(48)
      }
      h4 {
        color #727272
        display inline-block
        font-size px2rem(24)
        position relative
        top px2rem(-14)
        left px2rem(10)
      }
    }
    .icon {
      float left
      position relative
      top px2rem(6)
      left px2rem(20)
      img {
        width px2rem(36)
      }
    }
    .good {
      float right
      position relative
      top px2rem(6)
      // right px2rem(40)
      img {
        width px2rem(36)
      }
      h4 {
        color #727272
        display inline-block
        font-size px2rem(24)
        color #666
        position relative
        top px2rem(-8)
        left px2rem(6)
      }
    }
  }
  .text {
    margin-top 20px
    p {
      font-size 32px
      line-height 38px
      color #727272
    }
  }
}
</style>
