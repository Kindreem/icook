<template>
  <div class="zong">
    <fheader :title='title'/>
    <fblock :part='part1' :items="items1" :bg="bg1"/>
    <fblock :part='part2' :items="items2" :bg="bg2"/>
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
      part1: '食材',
      part2: '调料',
      bg1: 'background:#569dc7',
      bg2: 'background:#2b6887',
      items1: [
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
      ],
      items2: [
        {
          name: "盐",
          vol: "2克"
        },
        {
          name: "老抽",
          vol: "4克"
        },{
          name: "生抽",
          vol: "2克"
        },{
          name: "鸡精",
          vol: "4克"
        },{
          name: "糖",
          vol: "1克"
        },{
          name: "调和油",
          vol: "2克"
        },
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.zong {
  margin px2rem(52) px2rem(30) 0
  padding-bottom px2rem(30)
  border-radius 20px
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
}
</style>






