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
        <Button shape="circle">点击上传</Button>
      </section>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  >div {
    padding 20px 32px 40px 16px
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    margin-bottom 40px
  }
  margin 0 30px
  h3 {
    font px2rem(24) Arail
    color #5DB8E9
    margin-bottom 20px
  }
  .main {
    .left {
      float left
    }
    .right {
      float right
      font px2rem(22) Arial
      color #5DB8E9
      #rock {
        background url('./img/DR-007.png') no-repeat 0
        padding-left 26px
        margin-left 4px
      }
    }
    .min {
      margin-left 116px
      p {
        font px2rem(22) Arial
        color #999
        line-height 32px
        span {
          color #5DB8E9
        }
      }
    }
  }
  .but {
    margin-top 40px
    text-align center
    >>>.ivu-btn {
      font px2rem(24) Arail
      color #fff
      background #5DB8E9
      width px2rem(134)
      height px2rem(40)
      line-height 20px
    }
  }
}
</style>
