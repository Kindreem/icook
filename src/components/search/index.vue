<template>
  <div>
    <asearch/>
    <bheader/>
    <list/>
  </div>
</template>

<script>
import asearch from './a-search'
import bheader from './b-header'
import list from './list'
export default {
  components: {
    asearch,
    bheader,
    list
  },
}
</script>
