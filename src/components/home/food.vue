<template>
  <div class="all" @mouseup="end" @touchend="end">
     <div class="top">
       <router-link to="home" class="left">
         <p>&lt;湘派</p>
       </router-link>
       <router-link to="home" class="right">
         <p>川派&gt;</p>
       </router-link>
     </div>
     <div class="ban">
       <div class="b-top">
         <h1>粤派三段</h1>
         <p>您已掌握18道菜式,获得粤派段位经验478/1200</p>
       </div>
       <div class="b-bot">
         <!-- <div class="ex"><router-link to="O_recipe"><img src="../../common/img/links/1-017.png" alt=""></router-link><p>恭喜您已桨握：佛跳墙。在本道菜咬基础向债改变N个步骤即可学会粤派菜系两个船新的菜肴。快来看看！</p></div>
         <div class="step">
           <router-link to="O_recipe" id="d3">
             <img src="../../common/img/links/1-1.png" alt="">
           </router-link>
           <router-link to="O_recipe" id="d2">
             <img src="../../common/img/links/1-2.png" alt="">
           </router-link>
           <router-link to="O_recipe" id="d1">
             <img src="../../common/img/links/1-3.png" alt="">
           </router-link>
         </div> -->

         <div class="silder">
           <Carousel :items="items" :swiperOption="swiperOption" />
         </div>
         <router-link to="home" class="b-right">
            <p>看完整粤派菜肴&gt;</p>
         </router-link>
       </div>
     </div>
  </div>
</template>

<script>
import Carousel from "../public/carousel";
export default {
  components: {
    Carousel
  },
  mounted() {
    window.addEventListener("scroll", this.move);
    //  window.addEventListener('scroll', this.end)
    var pageHeight = document.documentElement.clientHeight;
    this.height = pageHeight * (930 / 1334);
    this.pb = pageHeight * (146 / 1334);
  },
  data() {
    return {
      height: "",
      pb: "",
      swiperOption: {
        slidesPerView: 3,
        // spaceBetween: 24,
        freeMode: true
        // slidesOffsetBefore: 30,
        // slidesOffsetAfter: 30
      },
      items: [
        {
          href: "home",
          src: require("./img/1-025.png"),
          title: "黄闷牛蛙 lv5"
        },
        {
          href: "home",
          src: require("./img/1-025.png"),
          title: "干锅牛蛙 lv5",
          tag: "已完成"
        },
        {
          href: "home",
          src: require("./img/1-025.png"),
          title: "红油牛蛙 lv5"
        },
        {
          href: "home",
          src: require("./img/1-025.png"),
          title: "黄闷牛蛙 lv5"
        }
      ]
    };
  },
  methods: {
    end() {
      var height = this.height;
      var oheight = this.height - 25;
      var pb = this.pb;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  console.log(scrollTop)
      if (scrollTop <= oheight + 41 && scrollTop > oheight - 21) {
        document.documentElement.scrollTop = oheight - 21;
        document.body.scrollTop = oheight - 21;
      } else if (scrollTop >= oheight + 41 && scrollTop < height + pb) {
        document.documentElement.scrollTop = height + pb;
        document.body.scrollTop = height + pb;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: px2rem(10) px2rem(30) 0px;
}

.top {
  font: px2rem(24) '微软雅黑';
  padding-bottom: px2rem(72);

  p {
    color: #727171;
  }
}

.left {
  float: left;
}

.right {
  float: right;
}

.ban {
  border-radius: 20px;
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  // margin-top px2rem(72)
  margin-bottom: px2rem(8);

  .b-top {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    background-color: rgba(93, 184, 233, 1);
    color: #fff;
    height: px2rem(110);
    padding-top: px2rem(16);

    h1 {
      font: px2rem(38) '微软雅黑';
    }

    p {
      font: px2rem(22) '微软雅黑';
    }
  }
}

.b-bot {
  padding: px2rem(40) px2rem(30) 0;

  .silder {
    >>>.swiper-container {
      padding-bottom: px2rem(20);
    }

    >>>.swiper-slide {
      width: px2rem(191) !important;
      margin-right: px2rem(26);
      a {

        display: block;
        position relative
        img {
          width: px2rem(191);
          display: block;
          border-radius: 20px;
          // border-top-right-radius 20px
        }
      }
      
      .ban {
        text-align: center;
        padding: px2rem(20) 0;

        // border-radius 20px
        // border-bottom-right-radius 20px
        h3 {
          font: px2rem(24) Arail;
          color: #727272;
        }
      }
    }
  }
}

.b-right {
  text-align: right;

  p {
    font: px2rem(24) '微软雅黑';
    color: #777;
    padding-bottom: px2rem(28);
  }
}
</style>
