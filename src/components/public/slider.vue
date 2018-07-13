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
                slidesPerView: 3.4,
                spaceBetween: 24,
                freeMode: true,
                slidesOffsetBefore: 24,
            },
        items: [{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
                title: "黄闷牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
                title: "干锅牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
                title: "红油牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
                title: "黄闷牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
                title: "红油牛蛙",
                content: "用料相似度：80%"
            },{
                href: "O_recipe",
                src: require('../../common/img/links/1-007.jpg'),
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
  margin 0 30px 40px
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
      position absolute
      top 0.32rem
      left 0.75rem
    }
    h3 {
      position absolute
      top 0.32rem
      left 1.64rem
      font 24px Arial
      color #5A4030
      // text-align center
      // width 435px
    }
  }
}
>>>.swiper-container {
   padding-bottom 28px
 }
>>>.swiper-slide {
  width px2rem(180) !important
  a{
    display block
    img {
      width px2rem(180)
      display block
      border-top-left-radius 20px
      border-top-right-radius 20px
    }
  }
  .ban {
    background #5DB8E9
    text-align center
    padding 20px 0
    border-bottom-left-radius 20px
    border-bottom-right-radius 20px
    h3 {
      font px2rem(22) Arail
      color #fff
    }
    p {
      font px2rem(18) Arail
      color #fff
    }
  }
}
</style>


