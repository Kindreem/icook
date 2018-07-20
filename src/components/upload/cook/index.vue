<template>
  <div>
    <add/>
    <cuse/>
    <send/>
  </div>
</template>

<script>
import add from '../add'
 import send from '../send'
 import cuse from './c-use.vue'
export default {
  components: {
    add,
    send,
    cuse,
  }
}
</script>

