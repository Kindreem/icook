<template>
  <div class="all">
    <div class="ban" v-for="(item,index) in items" :key="index">
      <section class="left">
        <div>
          <img class="img1" :src="item.img1" alt="">
          <img class="img2" :src="item.img2" alt="">
          <img class="bg" src="./img/ZY-038.png" alt="">
        </div>
      </section>
      <section class="right">
        <p>{{item.content}}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
         {
          img1: require('../../common/img/links/1-019.png'),
          img2: require('../../common/img/links/1-019.png'),
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        }, {
          img1: require('../../common/img/links/1-020.png'),
          img2: require('../../common/img/links/1-020.png'),
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        }, {
          img1: require('../../common/img/links/1-021.png'),
          img2: require('../../common/img/links/1-021.png'),
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        },
      ],
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all{
  margin 0 px2rem(30) px2rem(40)
}
.ban {
  height px2rem(386)
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  border-radius 20px
  margin-bottom px2rem(40)
  .left {
    margin px2rem(40) px2rem(26) auto px2rem(42)
    float left
    height px2rem(308)
    width px2rem(340)
    position relative
    .img1 {
      position absolute
      top 0px
      left 0px
      width px2rem(170)
    }
    .img2 {
      position absolute
      bottom 0px
      right 0px
      width px2rem(170)
    }
    .bg {
      width px2rem(64)
      position absolute
      top px2rem(124)
      left px2rem(138)
    }
  }
  .right {
    margin-left px2rem(408)
    margin-right px2rem(40)
    border-bottom 1px solid #5DB8E9
    p {
      height px2rem(350)
      padding-top px2rem(110)
      font-size px2rem(24)
      line-height px2rem(28)
    }
  }
}
</style>
