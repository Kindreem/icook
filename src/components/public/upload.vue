<template>
  <div class="all">
    <div>
      <h3>上传我的作品即可获得：</h3>
      <section class="main">
        <img class="left" src="../../common/img/川派徽章/0川派.png" alt="">
        <p class="right"><span>EXP+3</span><span id="rock">+3</span></p>
        <div class="min">
          <p><span>“香辣牛蛙”</span>徽章</p>
          <p>褒奖给每位熟练掌握“麻婆豆腐”的川派烹饪家</p>
        </div>
      </section>
      <section class="but">
        <router-link to="/Share">
          <Button shape="circle">点击上传</Button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  >div {
    padding px2rem(20) px2rem(32) px2rem(40) px2rem(16)
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    margin-bottom px2rem(40)
  }
  margin 0 px2rem(30)
  h3 {
    font px2rem(24) Arail
    color #5DB8E9
    margin-bottom px2rem(20)
  }
  .main {
    .left {
      float left
      width px2rem(96)
    }
    .right {
      float right
      font px2rem(22) Arial
      color #5DB8E9
      #rock {
        background url('./img/DR-007.png') no-repeat 0
        background-size px2rem(24)
        padding-left px2rem(26)
        margin-left px2rem(4)
      }
    }
    .min {
      margin-left px2rem(116)
      p {
        font px2rem(22) Arial
        color #999
        line-height px2rem(32)
        span {
          color #5DB8E9
        }
      }
    }
  }
  .but {
    margin-top px2rem(40)
    text-align center
    >>>.ivu-btn {
      font px2rem(24) Arail
      color #fff
      background #5DB8E9
      width px2rem(134)
      height px2rem(40)
      line-height px2rem(20)
    }
  }
}
</style>
