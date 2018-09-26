<template>
  <div>
    <uheader :value='userlist.ubname'/>
    <uimg :userlist="userlist"/>
    <upart :userlist="userlist"/>
    <ustep :userlist="userlist"/>
    <look/>
    <uslider :name='name'/>
  </div>
</template>

<script>
import {getuser} from '@/api'
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
    // console.log(this.userlist)
    let cbid= this.$route.params.id
    let userid = localStorage.getItem("userid");
    getuser(cbid,userid).then(res=>{
      this.userlist = res.data
      console.log(res)
    })
  },
}
</script>

