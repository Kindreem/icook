<template>
  <div class="all">
    <header>
      <div class="tleft">
        <router-link to="conter">
          <img src="./img/head/TX (1).png" alt="">
          <h3>东南</h3>
        </router-link>
        <router-link to="conter/badge">
          <img src="./img/head/TX (4).png" alt="">
        </router-link>
      </div>
      <div class="tright">
        <router-link to="">
          <img src="./img/ZY-004.png" alt="">
        </router-link>
        <router-link to="tast/tast">
          <img src="./img/ZY-003.png" alt="">
        </router-link>
      </div>
    </header>
    <router-link to="search">
      <Input placeholder="在此输入你要查询的菜谱" style="width: 92%"/>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  position fixed
  top 0
  left 0
  right 0
  z-index 999
  padding-top px2rem(28)
  background #EFEFEF
  a {
    display block
  }
  img {
    display inline-block
    width px2rem(48)
  }
}
header {
  margin 0 px2rem(30)
  height px2rem(48)
  line-height px2rem(48)

}
.tleft {
  img {
    float left
  }
  h3 {
    float left
    font px2rem(24) '微软雅黑'
    color #000
    margin-left px2rem(20)
    margin-right px2rem(30)
    height px2rem(48)
    line-height px2rem(48)
  }
}
.tright {
  img {
    float right
    margin-left px2rem(24)
  }
}
>>>.ivu-input {
  height px2rem(100)
  margin px2rem(56) px2rem(30) px2rem(20) px2rem(30)
  text-align center
  border-radius 20px
  box-shadow 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  font-size px2rem(26)

}
// >>>input::-webkit-input-placeholder {
//        font-size: 26px;
//     }


</style>

