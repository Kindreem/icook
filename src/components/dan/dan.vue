<template>
  <div class="dan">
     <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <div class="title"> 
                <p>粤派一段</p>
                <porgress :barwidth="barwidth" :color="color" :show="show"></porgress>
            </div>
      </header>
      <div class="content">
         <div class="badge"> <img src="./2.png" alt=""></div>
          <span class="top"></span>
            <div class="pic">
                <img src="./1.png" alt="">
                <p>已完成</p>
                <span></span>
            </div>
           <div class="pic">
                <img src="./1.png" alt="">
                <h3>lv.2 荷包蛋</h3>
                <p>已完成</p>
                <span></span>
            </div>
          <div class="pic">
                <img src="./11.png" alt="">
                <h3>lv.3 荷包蛋</h3>
                <p class="begin">开始挑战</p>
                <span></span>
            </div>
          <div class="pic">
                <img src="./111.png" alt="">
                <h3>lv.4 荷包蛋</h3>
                <p class="begin">开始挑战</p>
                <span class="bottom"></span>
            </div>
           <div class="badge"> <img src="./2.png" alt=""></div>
              <p class="begin end">领取段位</p>
      </div>


  </div>
</template>

<script>
import porgress from './porgress'
export default {
  components: {
     porgress
   },
  data () {
    return {
        show:0,
        barwidth:50,
        color:'blue'
    }
  },
  methods:{
      backto(){
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.dan{
  text-align: center;
  .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    position: relative;
    margin-bottom:px2rem(8) ;
    .title{
        width:px2rem(80) ;
        position: absolute;
        text-align: center;
        top: px2rem(10);
        transform: translateX(-50%);
        left: 50%;
      p{
        white-space:nowrap;
        font-size:  px2rem(14);
        color: #199ED8;
      }
    }
    div{
      padding: px2rem(5) px2rem(8);
    }
    img{
      margin-top:  px2rem(20);
      width: px2rem(24);
      height: px2rem(24);
    }
  }
    .content{

       .badge{
            img{
            width: px2rem(60);
            margin-top:px2rem(15);
        }
       }
        .pic{
            margin-top:px2rem(-3);
            img{
                width: px2rem(48);
                height: px2rem(48);
                border-radius: 50%;
            }
            h3{
                font-size:px2rem(14);
                margin-top: px2rem(-4);
                font-weight: normal;
            }
            p{
                font-size: px2rem(9);
                color: #F8E0DC;
                background: #004D95;
                width: px2rem(60);
                height: px2rem(15);
                line-height: px2rem(15);
                border-radius:px2rem(5);
                margin: 0 auto;
            }
            .begin{
                background: #D7301A;
            }
        }
        .end{
            font-size: px2rem(9);
            color: #F8E0DC;
            background: #D7301A;
            width: px2rem(60);
            height: px2rem(15);
            line-height: px2rem(15);
            border-radius:px2rem(5);
            margin: 0 auto;
            margin-bottom:px2rem(15) ;
        }
        .pic span,span{
            display: inline-block;
            background: #199ED8;
            width:1px;
            height:px2rem(35);
        }
        span.top{
            height: px2rem(26);
            margin-top: px2rem(-2);
        }
        .bottom{
            margin-bottom: px2rem(-20);
        }
    }
}

</style>
