<template>
  <div>
    <uheader :value='value'/>
    <uimg/>
    <upart/>
    <ustep/>
    <look/>
    <uslider :name='name'/>
  </div>
</template>

<script>
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
      value: '用户菜谱',
      name: 'Ta的个人推荐'
    }
  }
}
</script>

