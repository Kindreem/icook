<template>
  <div>
    <uheader :value='userlist.cbname'/>
    <uimg :userlist="userlist"/>
    <upart/>
    <ustep/>
    <look/>
    <uslider :name='name'/>
  </div>
</template>

<script>
import {getcook} from '@/api'
import uheader from '../public/header'
import uimg from './uimg'
import upart from './upart'
import ustep from './ustep'
import look from './look'
import uslider from '../public/slider'
export default {
  components: {
    uheader,
    uimg,
    upart,
    ustep,
    look,
    uslider
  },
  data (){
    return {
      value: '彩椒炒回锅肉',
      name: 'Ta的个人推荐',
      userlist:[]
    }
  },
  created(){
    let cbid= this.$route.params.id 
    getcook(cbid).then(res=>{
      this.userlist = res.data
      console.log(res)
    })
  },
}
</script>

