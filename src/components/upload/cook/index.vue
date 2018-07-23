<template>
  <div>
    <add/>
    <cuse/>
    <cstep/>
    <send/>
  </div>
</template>

<script>
import add from '../add'
 import send from '../send'
 import cuse from './c-use.vue'
 import cstep from './c-step.vue'
export default {
  components: {
    add,
    send,
    cuse,
    cstep
  }
}
</script>

