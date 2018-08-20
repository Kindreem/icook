<template>
  <div class="all">
    <section class="top"><img src="./img/彩椒炒回锅肉/回锅肉封面.jpg" alt=""></section>
    <section class="bot">
      <div class="head"><img src="./img/head/TX (2).png" alt=""><h4>取什么名</h4></div>
      <div class="icon"><img src="../../common/img/川派徽章/1川派学员.png" alt=""><img src="../../common/img/川派徽章/4川派达人.png" alt=""></div>
      <div class="good"><img src="./img/ZY-012.png" alt=""><h4>9898</h4></div>
    </section>
    <section class="text"><p>回锅肉是北方家庭过年时常常会做的，今天用它来与彩椒一起炒了这道菜，炒好的菜颜色亮丽，吃到嘴里味道鲜美。彩椒中含丰富的维生素，是蔬菜中维生素A和C含量最高的，能够预防心血管疾病，促进新陈代谢，抗老化，具有的强大抗氧化作用，可抗白内障、心脏病和癌症，防止身体老化，并且使体内的细胞活化，有着非常明显的效果。与煮熟的五花肉一起炒，肉的咸香浸入彩椒中，味道非常好吃！所以炒好刚上桌，就被我们一家三口秒光了！</p></section>
  </div>
</template>

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
      font-size 28px
      line-height 36px
      color #727272
    }
  }
}
</style>
