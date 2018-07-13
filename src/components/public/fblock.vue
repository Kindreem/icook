<template>
  <div class="all">
    <section>
      <div class="top">
        <img class="tag" src="../flow/img/2.png" alt="">
        <img class="heart" src="../flow/img/ZY-043.png" alt="">
        <h4>{{part}}</h4>
      </div>
        <div class="bot">
          <div :style='bg' v-for="(item,index) in items" :key="index"><h4>{{item.name}}</h4><h4>{{item.vol}}</h4></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props:
    ['part',
     'items',
     'bg'
  ]
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  padding-bottom px2rem(26)
  section {
    padding-top px2rem(16)
  }
  .top {
    position relative
    .tag {
      width px2rem(224)
    }
    .heart {
      position absolute
      top px2rem(14)
      left px2rem(36)
      width px2rem(36)
    }
    h4 {
      position absolute
      top px2rem(14)
      left px2rem(90)
      font-size px2rem(24)
      color #5a4030
    }
  }
  .bot {
    display flex
    justify-content space-around
    flex-flow row wrap
    width 100%
    padding 0 px2rem(70)
    div {
      margin-top px2rem(22)
      padding-top px2rem(28)
      height px2rem(128)
      width px2rem(216)
      border-radius 20px
      text-align center
    }
    h4 {
      font-size px2rem(26)
      color #fff
    }
  }
}
</style>
