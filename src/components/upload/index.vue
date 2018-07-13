<template>
  <div>
    <uheader/>
    <router-view/>
  </div>
</template>

<script>
import uheader from './uheader'
export default {
  components: {
    uheader,

  }
}
</script>

