<template>
  <div class="all">
    <div class="content">
      <p>游烹我生活！</p>
      <div class="butt">
        <Button id="but1" type="ghost">烹饪菜系</Button>
        <Button id="but2" type="ghost">语音查询</Button>
      </div>
    </div>
  </div>
</template>



<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
>>>body {
  height 100%
}
.all {
  background #efefef
  margin-top px2rem(252)
  margin-bottom px2rem(154)
  p {

    text-align center
    font-size px2rem(24)
    color #999
    height px2rem(886)
    line-height px2rem(900)
  }
}
.content {
    position relative
}
>>>.ivu-btn-ghost {
  height px2rem(80)
  width 6.8rem
  font-size px2rem(30)
  line-height px2rem(70)
  border-radius 20px
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  span {
    margin-left px2rem(36)
  }
}
#but1 {
  background  #fff url('./img/ZY-005.png') no-repeat 20% center
  position absolute
  bottom px2rem(-50)
  left px2rem(30)
}
#but2 {
  background #fff url('./img/ZY-006.png') no-repeat 20% center
  position absolute
  bottom px2rem(-50)
  right px2rem(30)
}

</style>

