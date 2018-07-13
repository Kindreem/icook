<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in items" :key="index">
      <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                    <div class="ban">
                      <h3>{{item.title}}</h3>
                      <p>{{item.content}}</p>
                    </div>
        </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
      components: {
      swiper,
      swiperSlide
  },
     mame:'carrousel',

      props: {
        swiperOption: {

        },
        items: {

        }
    },
}
</script>


<style lang="css">
  @import 'swiper/dist/css/swiper.css';
</style>


