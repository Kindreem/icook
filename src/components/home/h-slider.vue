<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><hmain/></swiper-slide>
    <swiper-slide><food/><top/></swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import hmain from './h-main'
import food from './food'
import top from './top'
  export default {
    name: 'carrousel',
    components: {
        swiper,
        swiperSlide,
        hmain,
        food,
        top
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: 'auto',
          slidesPerView: 'auto',
          mousewheel: false,
          mousewheelControl: false,
          height: window.innerHeight,
          resistanceRatio: 0,
          observeParents: true,
          direction: 'vertical',
          preventDefault: true,
          // allowSlidePrev: false


          // // freeMode: true,
          // // freeModeMomentum: false,
          // // freeModeMomentumBounce: false,
          // // onSlideNextStart: function(swiper) {//回调函数，滑块释放时如果触发slider向前(右、下)切换则执行。类似于onSlideChangeStart
          // // var i = swiper.activeIndex;
          // // //根据i来判断要加载该部分以的方法，预加载

          // // }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }
</script>


<style lang="css">
  @import 'swiper/dist/css/swiper.css';
</style>

