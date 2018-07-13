<template>
  <div class="dan">
      <div class="content">
         <div class="badge"> <img src="./2.png" alt=""></div>
          <span class="top"></span>
            <div class="pic">
                <img src="./pic.png" alt="">
                <p>已完成</p>
            </div>
          <span></span>
           <div class="pic">
                <img src="./pic.png" alt="">
                <p>已完成</p>
            </div>
          <span></span>
          <div class="pic">
                <img src="./pic.png" alt="">
                <p class="begin">开始挑战</p>
            </div>
          <span></span>
          <div class="pic">
                <img src="./pic.png" alt="">
                <p class="begin">开始挑战</p>
            </div>
          <span class="bottom"></span>
         <div class="badge"> <img src="./2.png" alt=""></div>
      </div>
       
       
  </div>
</template>

<script>
export default {
  data () {
    return {
   
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.dan{
    .content{
       .badge{
            img{
            width: px2rem(70);
            height: px2rem(70);
        }
       }
        .pic{
            margin-top:px2rem(-3) ;
            img{
                width: px2rem(60);
                height: px2rem(60);
                border-radius: 50%;
            }
            p{
                font-size: px2rem(12);
                color: #F8E0DC;
                background: #004D95;
                width: px2rem(90);
                height: px2rem(20);
                line-height: px2rem(20);
                border-radius:px2rem(5); 
                margin: 0 auto;
            }
            .begin{
                background: #D7301A;
            }
        }
        span{
            display: inline-block;
            background: #199ED8;
            width: px2rem(1);
            height:px2rem(50);
        }
        .top{
            height:px2rem(40) ;
            margin-top: px2rem(-7);
        }
        .bottom{
            margin-bottom: px2rem(-7);
        }
    }
}

</style>
