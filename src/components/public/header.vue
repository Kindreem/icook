<template>
  <div class="all">
    <header>
      <img class="left" src="./img/DR-005.png" alt="" @click="back">
      <img class="right" src="./img/ZY-026.png" alt="">
      <h3>{{value}}</h3>

    </header>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0px 30px
}
header {
  height px2rem(96)
  text-align center
  .left {
    float left
    padding-top px2rem(26)
  }
  .right {
    float right
    padding-top px2rem(26)
  }
  h3 {
    font px2rem(24) Arial
    color #5DB8E9
    line-height px2rem(96)
  }
}
</style>
