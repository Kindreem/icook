<template>
  <div class="login">
       <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
    <div class="tit">输入您的手机号码</div>
       <form >
          <input type="text" v-model="tel" placeholder="输入手机号码">
            <button value="注册" class="btn_login">注册</button>
          <p class="txt">注册代表你已同意<span>注册协议好</span>和<span>隐私政策</span></p>

       </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
        tel:''
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
.login{
      text-align: center;
      input{
        outline: none;
        border:none;
      }
 .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    margin-left: px2rem(20);
    div{
      padding: 20px;
    }
    img{
      margin-top: px2rem(20);
      width: px2rem(24);
      height: px2rem(24);
    }
  }
  .tit{
    font-size: px2rem(22);
    color: #199ED8;
    margin-top: px2rem(20);
  }
  input,button{
      margin-top:px2rem(100) ;
      width: px2rem(238);
      height: px2rem(25);
      font-size:  px2rem(14);
      text-align: center;
      border: none;
    }
    .btn_login{
      width: px2rem(150);
      height: px2rem(40);
      margin-top: px2rem(70);
      border-radius:  px2rem(10);
      background: white;
      outline: none;
      box-shadow:8px 8px 2px #d7d7d7;
      color: #999;
    }
    .txt{
        font-size:px2rem(10);
        margin-top:px2rem(10);
        color: #999;
        span{
            color: #199ED8
        }
    }     
}

</style>
