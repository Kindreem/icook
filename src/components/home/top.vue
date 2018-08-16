<template>
  <div class="all" @mouseup="end" @touchend="end">
    <header>
      <p>本周流行菜肴TOP10</p>
    </header>
    <div class="item" v-for="(item,index) in items" :key="index">
      <img class="bg" :src="item.ibg" alt="">
      <img class="tab" src="./img/ZY-009.png" alt="">
      <img class="heart" src="./img/ZY-043.png" alt="">
      <p>ICOOK烹饪家推荐</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
        window.addEventListener('scroll', this.move)
        //  window.addEventListener('scroll', this.end)
        var pageHeight = document.documentElement.clientHeight;
        this.height = pageHeight*(930/1334)
    },
  data() {
    return {
      height: '',
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
  },
  methods: {
    end() {
       var height = this.height
       var oheight = this.height-25
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  console.log(scrollTop)
       if(scrollTop<=(oheight+41)&&scrollTop>(oheight-21)) {
            document.documentElement.scrollTop=oheight-21
            document.body.scrollTop=oheight-21
       }
       else if(scrollTop>=(oheight+41)&&scrollTop<(height+145)) {
         document.documentElement.scrollTop=height+145
         document.body.scrollTop=height+145
       }
     },
  }

}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin px2rem(36) px2rem(30) 0px px2rem(30)
  header {
    height px2rem(48)
    line-height px2rem(48)
    border-bottom 2px solid #5DB8E9
    margin-bottom px2rem(20)
    p {
      font px2rem(24) '微软雅黑'
      color #5DB8E9
    }
  }
}
.item {
  margin-bottom px2rem(44)
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
    width px2rem(345)
    position absolute
    top -4px
    left 0
  }
  .heart {
    width px2rem(36)
    position absolute
    top 0.25rem
    left 0.75rem
  }
  p {
    position absolute
    top 0.25rem
    left 0
    width px2rem(386)
    text-align center
    font px2rem(24) '微软雅黑'
    color #5A4030
  }

}
</style>

