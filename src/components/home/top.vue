<template>
  <div class="all">
    <header>
      <p>本周流行菜肴TOP10</p>
    </header>
    <div class="item" v-for="(item,index) in items" :key="index">
      <img class="bg" :src="item.ibg" alt="">
      <img class="tab" :src="item.itab" alt="">
      <img class="heart" :src="item.iheart" alt="">
      <p>ICOOK烹饪家推荐</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        },{
          ibg: require("../../common/img/links/1-006.jpg"),
          itab: require("./img/ZY-009.png"),
          iheart: require("./img/ZY-043.png")
        }
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 20px 30px 0px 30px
  header {
    height 48px
    line-height 48px
    border-bottom 2px solid #5DB8E9
    margin-bottom 20px
    p {
      font 24px '微软雅黑'
      color #5DB8E9
    }
  }
}
.item {
  margin-bottom 44px
  box-shadow 8px 8px 4px rgba(204, 204, 204, 0.349019607843137)
  border-radius 20px
  img {
    display block
  }
  position relative
  // height 386px
  .bg {
    width 100%
    border-radius 20px
  }
  .tab {
    position absolute
    top -4px
    left 0
  }
  .heart {
    position absolute
    top 0.25rem
    left 0.75rem
  }
  p {
    position absolute
    top 0.25rem
    left 0
    width 386px
    text-align center
    font 24px '微软雅黑'
    color #5A4030
  }

}
</style>

