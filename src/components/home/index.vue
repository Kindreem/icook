
<template>
  <div>
    <hheader/>
    <hmain/>
    <hfood/>
    <top/>
    <div class="add">
      <router-link to="Share">
        <img src="./img/ZY-007.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import hheader from './h-header'
import hmain from './h-main'
import hfood from './food'
import top from './top'
export default {
  components : {
    hheader,
    hmain,
    hfood,
    top,
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.add {
  a {
    display block
    img {
      width px2rem(96)
    }
  }
  position fixed
  bottom 28px
  right 32px
}
</style>
