<template>
  <div>
    <header><h1>{{title}}</h1></header>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
div {
  header {
    background #569dc7
    font-size px2rem(18)
    color #fff
    padding 0 px2rem(32)
    height px2rem(72)
    line-height px2rem(72)
    border-top-left-radius 20px
    border-top-right-radius 20px
  }
}
</style>

