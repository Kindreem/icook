<template>
  <div class="all">
    <div class="ban" v-for="(item,index) in userlist.userStepDtos" :key="index">
      <header>
        <img class="tab" src="./img/1-021.png" alt="">
        <img class="heart" src="./img/1-012.png" alt="">
        <p>步骤{{index+1}}</p>
      </header>
      <div class="item">
        <img class="bg" :src="item.ubsimg" alt="">
        <p>{{item.ubsdescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: ["userlist"],
  data() {
    return {
      items: [
         {
          ibg: require('./img/彩椒炒回锅肉/0彩椒炒回锅肉4-3.jpg'),
          step: "步骤一",
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        },{
          ibg: require('./img/彩椒炒回锅肉/1彩椒炒回锅肉16-9.jpg'),
          step: "步骤二",
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        },{
          ibg: require('./img/彩椒炒回锅肉/2彩椒炒回锅肉16-9.jpg'),
          step: "步骤三",
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        },{
          ibg: require('./img/彩椒炒回锅肉/3彩椒炒回锅肉16-9.jpg'),
          step: "步骤四",
          content: '是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中。'
        },
      ],
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all{
  margin 0 px2rem(30) 0
}
.ban {
  // box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  margin-bottom px2rem(80)
  header {
    position relative
    border-bottom 1px solid #5DB8E9
    margin-bottom px2rem(20)
    .tab {
    width px2rem(250)
  }
  .heart {
    width px2rem(36)
    position absolute
    top px2rem(14)
    left px2rem(36)
  }
  p {
    position absolute
    top px2rem(14)
    left px2rem(0)
    width px2rem(250)
    text-align center
    font px2rem(24) '微软雅黑'
    color #5A4030
  }

  }
  .item {
    img {
      width 100%
      border-radius 20px
    }
    p {
      margin-top px2rem(20)
      font-size px2rem(26)
      line-height px2rem(36)
      color #727272
    }
  }
}
</style>
