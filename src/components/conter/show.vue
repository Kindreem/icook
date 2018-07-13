<template>
  <div class="show">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">展示中</p>
      </header>
      <div class="badge">
          <img src="./2.png" alt="">
          <h2>粤派高级徽章</h2>
          <p>★★★★</p>
          <span>通过粤派菜系获得</span>
      </div>
       <div class="btn">
           <button class="demount">卸下</button>
           <button class="change">更换</button>
       </div>
       
  </div>
</template>

<script>
export default {
  data () {
    return {
   
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
    .show{
        .header{
            height: px2rem(44);
            background: none;
            text-align: left;
            position: relative;
            margin-left: px2rem(10);
            .title{
                font-size: px2rem(20);
                position: absolute;
                font-size:  px2rem(14);
                color: #199ED8;
                top: px2rem(20);
                right: 0;
                transform: translateX(-50%)
            }
            div{
            padding: 20px;
            }
            img{
            margin-top: px2rem(20);
            width: px2rem(24);
            height: px2rem(24);
            }
        }
        .badge{
            width:px2rem(350);
            height: px2rem(460);
            box-shadow: 8px 8px 2px rgba(0,0,0,.1);
            margin: px2rem(10) auto;
            color: #999;
            img{
                width: px2rem(80);
                height: px2rem(90);
                margin-top:px2rem(100);
            }
            h2{
                font-size: px2rem(18);
            }
            p{
                font-size: px2rem(12);
            }
            span{
                font-size: px2rem(10);
            }
        }
        .btn{
            font-size:  px2rem(16);
            display: flex;
            justify-content: center;
            margin-top:px2rem(20) ;
            button{
                width: px2rem(150);
                height: px2rem(40);
                border-radius:px2rem(10);
                outline: none;
                border: none;
            }
            .demount{
                background: #5DB8E9;
                color: #fff;
                margin-right: px2rem(20) ;
            }
            .change{
                color: #999;
                background: white;
                box-shadow: 8px 8px 2px #d7d7d7;
            }
        }
    }
</style>
