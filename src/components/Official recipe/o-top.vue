<template>
  <div class="all">
     <section>
       <img :src="getlist.cbthumbimg" alt="">
     </section>
     <section class="text">
       <p>{{getlist.cbtext}}</p>
     </section>
     <section class="but">
       <router-link :to="'/flow/'+getlist.cookbookid">
         <Button id="but1" type="ghost">分解流程</Button>
       </router-link>
       <router-link to="#">
         <Button id="but2" type="ghost">语音帮手</Button>
       </router-link>
     </section>
     <section class="step">
       <div v-for="(item,index) in getlist.cbimg.split('$')" :key="index"><img :src="item" alt=""></div>
     </section>
  </div>
</template>

<script>
export default {
  props: ["items","tops","getlist"],
  data(){
    return{
      imglist:''
    }
  },
  created(){
  }
}

</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin px2rem(30) px2rem(30)
  section {
    img {
      width 100%
      border-radius 20px
      display block
    }
  }
}
.text {
  margin px2rem(20) 0px
  height px2rem(250)
  p {
    font-size px2rem(24)
    color #666
  }
}
.but {
  display flex
  justify-content space-between
  >>>.ivu-btn-ghost {
    height px2rem(80)
    width px2rem(310)
    font-size px2rem(30)
    line-height px2rem(70)
    border-radius 20px
    box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137)
      span {
        margin-left px2rem(54)
        color #fff
      }
    }
}
.step {
  margin-top px2rem(30)
  div {
    margin-bottom px2rem(10)
  }
}
#but1 {
  background #5DB8E9 url('./img/icon/part.png') no-repeat px2rem(34) center
  background-size px2rem(64)
}
#but2 {
  background #5DB8E9 url('./img/icon/vio.png') no-repeat px2rem(34) center
  background-size px2rem(64)
}
</style>

