<template>
  <div class="show">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">展示中</p>
      </header>
      <div class="badge" :style="{height:height}">
          <img src="./2.png" alt="">
          <p>粤派二段</p>
          <span>通过粤派菜系获得</span>
          <div class="end">
              <span>date</span>
              <span>奖励给什么事没什么没什么事吗</span>
              <span>已解锁</span>
          </div>
      </div>
      <p class="tit">最多可展示3个</p>
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
        height:''
    }
  },
  mounted(){
      let number= document.documentElement.clientHeight*0.70
      this.height = number+'px';
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
      text-align: center;
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
            width:90%;
            box-shadow: 8px 8px 2px rgba(0,0,0,.1);
            border-radius: 20px;
            margin: px2rem(10) auto;
            color: #999;
            position: relative;
            img{
                width: px2rem(90);
                margin-top:38%;
            }
            p{
                margin-top:  px2rem(10);
                color: #666;
                font-size: px2rem(13);
            }
            span{
                font-size: px2rem(10);
            }
            .end{
                width: 90%;
                position: absolute;
                bottom: px2rem(10) ;
                margin:0 px2rem(20);
                text-align: center;
                span:nth-child(1){
                    float: left;
                }
                span:nth-child(3){
                    float: right;
                }
            }
        }
        p.tit{
            margin-top: px2rem(20);
            font-size: px2rem(14);
            color: #777;
        }
        .btn{
            font-size:  px2rem(16);
            display: flex;
            justify-content: space-between;
            width:90%;
            margin:px2rem(8) auto ;
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
