<template>
  <div class="all">
    <form action="" method="get">
      <div class="icon">
        <section class="weixin">
          <div><img src="./img/DR-002.png" alt=""><span>微信</span></div>
          <div><Checkbox/></div>
        </section>
        <section class="qq">
          <div><img src="./img/DR-003.png" alt=""><span>QQ</span></div>
          <div><Checkbox/></div>
        </section>
        <section class="weibo">
          <div><img src="./img/RW-029.png" alt=""><span>微博</span></div>
          <div><Checkbox/></div>
       </section>
      </div>
      <p>每勾选一个发布按钮可获200金奖励</p>
      <input type="submit" value="发布" />
      <h4>发布后总共可获得1000金奖励</h4>
    </form>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(64) px2rem(70)
  form {
    .icon {
      margin-top px2rem(30)
      display flex
      justify-content space-around
      section {
        text-align center
        font-size px2rem(24)
        color #666
        span {
          position relative
          top -16px
          left 10px
        }
        img {
          width px2rem(48)
        }

      }
    }

  }
  p {
    font-size px2rem(24)
    color #666
    margin-top px2rem(40)
  }
  form >input {
    margin-top px2rem(40)
    width 100%
    height px2rem(80)
    font-size px2rem(30)
    color #999
    background #fff
    border none
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
  }
  h4 {
    text-align center
    font-size px2rem(22)
    line-height px2rem(36)
    margin-top px2rem(12)
  }

}
>>>.ivu-checkbox {
  height px2rem(32)
  width px2rem(32)
  border-radius 50%
  border: 1px solid #717171;
}
>>>.ivu-checkbox-inner {
  height px2rem(20)
  width px2rem(20)
  border-radius 50%
  border none
  top 5px
}
>>>.ivu-checkbox-checked .ivu-checkbox-inner {
    background-color #717171

}
>>>.ivu-checkbox-focus {
  box-shadow none
}
>>>.ivu-checkbox-checked .ivu-checkbox-inner:after {
    content: '';
    display: table;
    width: px2rem(0);
    height: px2rem(0);
    position: absolute;
    top: px2rem(8);
    left: px2rem(8);
    border: 5px solid #717171;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1);
    transition: all .2s ease-in-out;
}
</style>

