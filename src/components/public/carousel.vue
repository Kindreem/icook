<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in items" :key="index">
      <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                    <div :class="item.tag?'tag':''"></div>
                    <h4 :class="item.tag?'zi':''">{{item.tag}}</h4>
                    <div class="ban">
                      <h3>{{item.title}}</h3>
                    </div>
        </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  mame: "carousel",

  props: {
    swiperOption: {},
    items: {}
  }
};
</script>


<style lang="css">
@import "swiper/dist/css/swiper.css";
</style>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.tag {
  border-top-right-radius: 20px;
  // border-right-radius: 20px;
  position: absolute;
  top: 0;
  right: 0;
  height: 0;
  width: 0;
  border-top: px2rem(38) solid #5db8e9;
  border-left: px2rem(38) solid transparent;
  border-right: px2rem(38) solid #5db8e9;
  border-bottom: px2rem(38) solid transparent;
  opacity: 0.5;
}

.zi {
  position: absolute;
  top: px2rem(13);
  right: px2rem(-4);
  transform: rotate(45deg);
  font-size: px2rem(20);
  color: #fff;
}
</style>



