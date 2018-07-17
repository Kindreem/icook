
<template>
  <div class="all">
    <hheader/>
    <hmain/>
    <food/>
    <top/>
    <!-- <hslider/> -->
    <router-link to="Share">
        <!-- 悬浮的HTML -->
      <div
        @mousedown="down" @touchstart="down"
        @mousemove="move" @touchmove="move"
        @mouseup="end" @touchend="end"
      >
        <img id="moveDiv" class="xuanfu" src="./img/ZY-007.png" alt="">
      </div>
   </router-link>
  </div>
</template>

<script>
import hheader from './h-header'
import hmain from './h-main'
import food from './food'
import top from './top'
// import hslider from './h-slider'
export default {
  components : {
    hheader,
    hmain,
    food,
    top
    // hslider
  },
  data() {
  return {
    flags: false,
    position: {
      x: 0,
      y: 0
    },
    nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
  }
},

methods: {
  // 实现移动端拖拽
  down(){
    this.flags = true;
    var touch ;
    if(event.touches){
        touch = event.touches[0];
    }else {
        touch = event;
    }
    this.position.x = touch.clientX;
    this.position.y = touch.clientY;
    this.dx = moveDiv.offsetLeft;
    this.dy = moveDiv.offsetTop;
  },
  move(){
    if(this.flags){
      var touch ;
      if(event.touches){
          touch = event.touches[0];
      }else {
          touch = event;
      }
      this.nx = touch.clientX - this.position.x;
      this.ny = touch.clientY - this.position.y;
      this.xPum = this.dx+this.nx;
      this.yPum = this.dy+this.ny;
      moveDiv.style.left = this.xPum+"px";
      moveDiv.style.top = this.yPum +"px";
      // //阻止页面的滑动默认事件
      // document.addEventListener("touchmove",function(){
      //     event.preventDefault();
      // },false);
    }
  },
//鼠标释放时候的函数
  end(){
    this.flags = false;
  },
}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
// .add {
//   a {
//     display block
//     img {
//       width px2rem(96)
//     }
//   }
//   position fixed
//   bottom 28px
//   right 32px
// }

.xuanfu {
    touch-action: none;
    z-index: 1000;
    position: fixed;
    bottom px2rem(28)
    right: px2rem(32)
}
</style>
