<template>
  <div class="all">
    <div>
      <router-link :to="'/O_recipe/'+value" v-if="ok">
        <h2>查看ICOOK官方菜谱</h2>
      </router-link>
        <h2 v-else>查看ICOOK官方菜谱</h2>
    </div>
  </div>
</template>

<script>
import { getcookbookbyname } from "@/api";
export default {
  props: ['value','ok'],
  // data() {
  //   return {
  //     ok: ''
  //   }
  // },
  // created() {
  //   getcookbookbyname(this.value).then(res => {
  //       if(res.code==200) {
  //           this.ok = true

  //       }else {
  //         this.ok = false
  //       }
  //       console.log(this.ok)
  //     });
  // }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(30) px2rem(40)
  div {
    background #5DB8E9
    height px2rem(104)
    line-height px2rem(104)
    text-align center
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    h2 {
      font-size px2rem(28)
      color #fff
      font-weight 600
    }
  }
}
</style>
