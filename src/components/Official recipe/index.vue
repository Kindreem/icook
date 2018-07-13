<template>
  <div>
    <oheader :value='value'/>
    <opart/>
    <ostep/>
    <upload/>
    <slider :name='name1'/>
    <slider :name='name2'/>
  </div>
</template>

<script>
import oheader from '../public/header'
import opart from './o-part'
import ostep from './o-step'
import upload from '../public/upload'
import slider from '../public/slider'

export default {
  components : {
    oheader,
    opart,
    ostep,
    upload,
    slider,
  },
  data() {
    return{
      value: '官方菜谱',
      name1: '关联菜谱（按用料关联）',
      name2: '关联菜谱（按做法关联）'
    }
  }
}
</script>
