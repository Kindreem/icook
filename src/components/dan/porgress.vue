<template>
  <div class="porgress">
         <div class="progressContainer">        
            <div class="progressItem" v-bind:style="{width:barwidth+'%',background:color}"></div>
            <div class="right" v-if="isshow">{{barwidth+'%'}}</div>
            <div class="center" v-else>16/18</div>
       </div>          
  </div>
</template>

<script>
export default {
    props: ["barwidth","color","isshow"],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
  .progressContainer{
            position: relative;
            height: px2rem(3);
            width: 100%;
            background-color: #666666;
            border-radius:px2rem(1.5);
            color: #999;
             
          .progressItem{
             position: absolute;
             border-radius:px2rem(1.5);
             height: px2rem(3);
             width: 30%;
             background-color: orange;
        }
            .right{
                font-size: px2rem(9);
                position: absolute;
                right:px2rem(-22);
                top: px2rem(-5);
            }
            .center{
                position: absolute;
                font-size: px2rem(8);
                top: px2rem(6);
                transform: translateX(70%)
            }

  }
</style>
