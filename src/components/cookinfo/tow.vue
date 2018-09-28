<template>
  <div class="tow">
      <ul class="imgs">
          <li v-for="(item,index) in imgs" :key="index">
              <img :src="item.url" alt="" ref="imgwidth">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return { 
        imgheight:'',
        imgs:[
            {url:require('./2.jpg')},
            {url:require('./2.jpg')},
            {url:require('./2.jpg')},
            {url:require('./2.jpg')},
            {url:require('./2.jpg')},
            {url:require('./2.jpg')},
        ]
    }
  },
  mounted(){
      this.imgheight =this.$refs.$el.clientWidth
      console.log(this.imgheight)
  },
  methods:{
      
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.tow{
    .imgs{
        li{
            margin-bottom:px2rem(10);
            float: left;
            width: 48%;
            img{
                width: 100%;
                display: block;
            }
        }
        li:nth-child(odd){
            margin-right: px2rem(10);
        }
    }
}
</style>
