<template>
  <div class="all">
    <section class="title">
      <img id="tag" src="./img/ZY-025.png" alt="">
      <img id="heart" src="./img/ZY-043.png" alt="">
      <h3>{{name}}</h3>
    </section>
    <section>
       <Carousel :items="items" :swiperOption="swiperOption"/>
    </section>
  </div>
</template>

<script>
import Carousel from './carousel'
export default {
  components: {
     Carousel
   },
   props: ['name'],
   data() {
     return {
        swiperOption: {
                slidesPerView: 3,
                // spaceBetween: 24,
                freeMode: true,
                slidesOffsetBefore: 30,
            },
        items: [{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "黄闷牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "干锅牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "红油牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "黄闷牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "红油牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-025.png'),
                title: "黄闷牛蛙",
                content: "用料相似度：80%"
            }]
     }
   }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0 px2rem(30) px2rem(40)
  border-radius 20px
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  .title {
    position relative
    // #tag {
    //   position absolute
    //   top 0px
    //   left 0px
    // }
    #heart {
      width px2rem(36)
      position absolute
      top px2rem(14)
      left px2rem(42)
    }
    #tag {
      width px2rem(380)
      height px2rem(90)
    }
    h3 {
      position absolute
      top px2rem(14)
      left px2rem(100)
      font px2rem(24) Arial
      color #5A4030
      // text-align center
      // width 435px
    }
  }
}
>>>.swiper-container {
   padding-bottom px2rem(20)
 }
>>>.swiper-slide {
  width px2rem(192) !important
  margin-right px2rem(26)
  a{
    display block
    img {
      width px2rem(192)
      display block
      border-radius 20px
      // border-top-right-radius 20px
    }
  }
  .ban {
    text-align center
    padding px2rem(20) 0
    // border-radius 20px
    // border-bottom-right-radius 20px
    h3 {
      font px2rem(24) Arail
      color #727272
    }
  }
}
</style>


