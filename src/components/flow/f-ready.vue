<template>
  <div class="zong">
    <fheader :title='title'/>
    <fblock :part='part' :items="items"/>
  </div>
</template>

<script>
import fheader from '../public/fheader'
import fblock from '../public/fblock'
export default {
  components: {
    fheader,
    fblock,
  },
  data () {
    return {
      title: 'PART1 食材准备',
      part: '食材',
      items: [
        {
          name: "五花肉",
          vol: "600克"
        },
        {
          name: "四季豆",
          vol: "200克"
        },{
          name: "梅菜",
          vol: "200克"
        },

      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.zong {
  margin px2rem(52) px2rem(30) 0
  border-radius 20px
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
}
</style>






