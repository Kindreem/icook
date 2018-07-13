<template>
  <div class="all">
    <div class="top">
      <router-link to="search"><h4>综合</h4></router-link>
      <router-link to="home"><h4>点赞</h4></router-link>
      <router-link to="home"><h4>最新</h4></router-link>
    </div>
    <div class="bot">
       <section class="left">
         <img src="./img/ZY-030.png" alt="">
         <h3>定位</h3>
       </section>
       <section class="min">
         <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            湖北
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <img src="../../common/img/links/1-015.png" alt="">
        </DropdownMenu>
      </Dropdown>
      <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            武汉
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <img src="../../common/img/links/1-015.png" alt="">
        </DropdownMenu>
      </Dropdown>
      <Dropdown style="margin-left: 20px" placement="bottom-end">
          <a href="javascript:void(0)">
            区域
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
            <img src="../../common/img/links/1-016.png" alt="">
          </DropdownMenu>
         </Dropdown>
       </section>
       <section class="right">
         <span>全区</span>
         <span>|</span>
         <span>好友</span>
       </section>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0 30px
  .top {
    height px2rem(62)
    padding-top px2rem(14)
    border-top 1px solid #ccc
    border-bottom 1px solid #ccc
    display flex
    justify-content space-between
    a {
      display block
      h4 {
        height px2rem(60)
        line-height px2rem(60)
        font px2rem(24) Arail
        color #666
      }
    }
  }
  .router-link-active {
    h4 {
      color #6CBEE8 !important
    }
  }
  .bot {
    height px2rem(66)
    font px2rem(24) Arail
    color #999
    border-bottom 1px solid #ccc
    display flex
    justify-content space-between
    .left {
      line-height px2rem(66)
      img {
        position relative
        top 10px
      }
      h3 {
        display inline-block
        color #6CBEE8
      }
    }
    .min {
      line-height px2rem(66)
    }
    .right {
      line-height px2rem(66)
    }
  }
}
>>>.ivu-dropdown {
  a {
    color #999
  }
  a:hover {
    color #6CBEE8
  }
}

</style>


