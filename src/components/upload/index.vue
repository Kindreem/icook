<template>
  <div class="all">
    <uheader/>
    <router-view/>
  </div>
</template>

<script>
import uheader from './uheader'
export default {
  components: {
    uheader,
  },
  data() {
    return {
    }
  },
  methods: {

  },
  
}
</script>
<style lang="stylus" scoped>
@import './../../assets/px2rem.styl';

</style>

