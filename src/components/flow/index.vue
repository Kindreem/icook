<template>
  <div>
    <sheader :value='value'/>
    <fready/>
  </div>
</template>

<script>
import sheader from '../public/header'
import fready from './f-ready'
export default {
  components: {
    sheader,
    fready,
  },
  data() {
    return {
      value: '梅干菜烧四季豆',
    }
  }

}
</script>

