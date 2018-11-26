<template>
  <div>
    <uheader :value='userlist.ubname'/>
    <uimg :userlist="userlist" :userbadge="userbadge"/>
    <upart :userlist="userlist"/>
    <ustep :userlist="userlist"/>
    <look :value='userlist.ubname' :ok='ok'/>
    <!-- <uslider :name='name'/> -->
  </div>
</template>

<script>
import {getuser,getcookbookbyname,userbadge} from '@/api'
import uheader from '../public/header'
import uimg from './uimg'
import upart from './upart'
import ustep from './ustep'
import look from './look'
// import uslider from '../public/slider'
export default {
  components: {
    uheader,
    uimg,
    upart,
    ustep,
    look,
    // uslider
  },
  data (){
    return {
      value: '彩椒炒回锅肉',
      name: 'Ta的个人推荐',
      userlist:[],
      ok: '',
      userbadge: ''
    }
  },
  created(){
    // console.log(this.userlist)
    let cbid= this.$route.params.id
    let userid = localStorage.getItem("userid");
    getuser(cbid,userid).then(res=>{
      this.userlist = res.data
      // console.log(res)

      getcookbookbyname(res.data.ubname).then(res => {
        if(res.code==200) {
            this.ok = true

        }else {
          this.ok = false
        }
        // console.log(this.ok)
      });

      userbadge(res.data.userid).then(res => {
      if (res.code == 200) {
        this.userbadge = res.data;
      }
      console.log(res.data)
    });


    })


  },
}
</script>

