<template>
  <div class="achieve">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">成就</p>
      </header>
      <div class="item">
          <div class="left"><img src="./2.png" alt=""></div>
          <div class="tit">
              <p>成就1是一个成就</p><span>在 特定的条件下,完成一个动作</span>
             <Progress :percent="100" status="active"></Progress>
          </div>
          <div class="right">
              <img src="./GR-016.png" alt="">
              <p>已获得</p>
          </div>
      </div>
      <div class="item">
          <div class="left"><img src="./2.png" alt=""></div>
          <div class="tit">
              <p>成就1是一个成就</p><span>在 特定的条件下,完成一个动作</span>
             <Progress :percent="76" status="active"></Progress>
          </div>
          <div class="right">
              <img src="./GR-016.png" alt="">
              <p>已获得</p>
          </div>
      </div>
      <div class="item">
          <div class="left"><img src="./2.png" alt=""></div>
          <div class="tit">
              <p>成就1是一个成就</p><span>在 特定的条件下,完成一个动作</span>
             <Progress :percent="80" status="active"></Progress>
          </div>
          <div class="right">
              <img src="./GR-016.png" alt="">
              <p>已获得</p>
          </div>
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
.achieve{
    .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    margin-left:px2rem(20) ;
    position: relative;
    .title{
        font-size: px2rem(20);
        position: absolute;
        font-size:  px2rem(14);
        color: #199ED8;
        top: px2rem(20);
        left: 50%;
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
    height: 100%;
    padding-top: px2rem(1);
    .item{
        width: px2rem(350);
        height: px2rem(90);
        margin: px2rem(15) auto;
        display: flex;
        padding-top: px2rem(16);
        box-shadow:  12px 15px rgba(0,0,0,.1);
        border-radius: px2rem(10);
        .left{
            img{
                width: px2rem(55);
                margin-right: px2rem(10);
            }
        }
        .tit{
            width: 65%;
            text-align: left;
            line-height: px2rem(18);
            p{
            font-size: px2rem(14);
            }
            span{
                font-size: px2rem(10);
            }
            .ivu-progress{
                // width: 92%;
                font-size: px2rem(12);
                display: flex;
            }
        }
        .right{
            margin: px2rem(5) px2rem(10);
            img{
                width: px2rem(30);
            }
            p{
                font-size: px2rem(10);
            }
        }
    }
}
</style>
