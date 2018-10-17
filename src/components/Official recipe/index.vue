<template>
  <div>
    <oheader :value='getlist.cbname'/>
    <otop :items='items' :tops='tops' :getlist='getlist'/>
    <upload/>
    <slider :name='name1'/>
    <slider :name='name2'/>
  </div>
</template>

<script>
import {getcook} from '@/api'
import oheader from '../public/header'
import otop from './o-top'
import upload from '../public/upload'
import slider from '../public/slider'
export default {
  components : {
    oheader,
    otop,
    upload,
    slider,
  },
  data() {
    return{
      value: '爆炒麻辣兔',
      name1: '关联菜谱（按用料关联）',
      name2: '关联菜谱（按做法关联）',
      items: [{
                img: require('./img/爆炒麻辣兔/0爆炒麻辣兔4-3.jpg')
            },{
                img: require('./img/爆炒麻辣兔/1爆炒麻辣兔16-9.jpg')
            },{
                img: require('./img/爆炒麻辣兔/2爆炒麻辣兔16-9.jpg')
            },{
                img: require('./img/爆炒麻辣兔/3爆炒麻辣兔16-9 .jpg')
            },
      ],
      tops: {
        index: require('./img/爆炒麻辣兔/麻辣兔封面.jpg'),
        text: "实在是很香很下饭的肉肉！而且兔肉高蛋白、低脂肪、性凉味甘，用麻辣的做法做出来吃起来也不会上火哦！女孩子多吃兔肉据说还可以美容哎！居家过日子，不可能像餐厅一样搞上一盆红辣椒看着过瘾吃一顿受不了，还是细水长流，麻辣也好、咸淡也好，适中即可。这样既满足了口舌之欲，又不会给肠胃带来很重的负担。"
      },
      getlist:''     //通过id获取官方菜谱的数据
    }
  },
  created(){
     let cbid= this.$route.params.id
     getcook(cbid).then(res=>{
       this.getlist=res.data
       console.log(this.getlist)
        this.$store.commit("setcbname", this.getlist.cbname);
        // localStorage.setItem("cbname", this.getlist.cbname);    //菜谱名字
     })
  }
}
</script>
