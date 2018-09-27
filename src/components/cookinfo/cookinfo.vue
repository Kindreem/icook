<template>
  <div class="cookinfo">
     <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <div class="title"> 
                <p>粤派一段</p>
            </div>
            <img src="./1.png" alt="">
      </header>
      <div class="style">
           <router-view/>
      </div>

  </div>
</template>

<script>
export default {
  components: {
   },
  data () {
    return { 
        barwidth:50,
        color:'blue'
    }
  },
  methods:{
      backto(){
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.cookinfo{
  text-align: center;
  .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    position: relative;
    margin-bottom:px2rem(8) ;
    .title{
        width:px2rem(80) ;
        position: absolute;
        text-align: center;
        top: px2rem(20);
        transform: translateX(-50%);
        left: 50%;
      p{
        white-space:nowrap;
        font-size:  px2rem(14);
        color: #199ED8;
      }
    }
    div{
      padding: px2rem(5) px2rem(8);
    }
    img{
      margin-top:  px2rem(20);
      margin-left:  px2rem(10);
      width: px2rem(24);
      height: px2rem(24);
    }
    img:last-child{
        float: right;
        margin-right: px2rem(20);
    }
  }
  .style{
      margin: px2rem(20);
  }
   
}

</style>
