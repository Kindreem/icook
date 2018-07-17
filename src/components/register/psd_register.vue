<template>
  <div class="psd_reg">
    <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
   <div class="tit">手机密码登录</div>
     <div class="psd_register">
        <form action="" >
           <input type="text" v-model="username" placeholder="输入手机号码">
         <br>
           <input type="text" v-model="password" placeholder="输入密码" class="psd">
         <br>
          <router-link to="/info">
          <button class="btn_register">登录</button>
          </router-link>
          <div class="else" >
          <a href="#" class="forget">忘记密码</a>
          <router-link to='/register/register'>验证码登录</router-link>
          </div>
        </form>
     </div>
       <div class="thirdparty">
         <p>第三方登录</p>
           <div class="wx">
               <img src="../../assets/images/DR-002.png" alt="">
               <span>微信</span>
           </div>
           <div class="qq">
               <img src="../../assets/images/DR-003.png" alt="">
               <span>QQ</span>
           </div>
            <div class="more">
                <img src="../../assets/images/DR-004.png" alt="">
            </div>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        username:'',
        password:''
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
.psd_reg{
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
    .psd_register{
        margin-top: px2rem(100) ;
        height: px2rem(200) ;
        input{
        width: px2rem(238);
        height: px2rem(25);
        font-size:  px2rem(14);
        text-align: center;
        border: none;
        margin:px2rem(10) 0 ;
        }
        .btn_register{
        width: px2rem(150);
        height: px2rem(40);
        margin-top: px2rem(65);
        font-size: px2rem(16);
        border: none;
        outline: none;
        border-radius:  px2rem(10);
        background: white;
        outline: none;
        box-shadow:8px 8px 2px #d7d7d7;
        color: #999;
        }
        .else{
            margin-top: px2rem(5) ;
            a{
            font-size: px2rem(10);
            color: #199ED8;
            text-decoration: none;
            }
            .forget{
                color: #999;
                margin-right: px2rem(60);
            }
        }
    }
    .thirdparty{
        margin-top: px2rem(160);
        display: flex;
        justify-content: center;
        position: relative;
        p{
            font-size: px2rem(14);
            position: absolute;
            bottom:  px2rem(30);
            color: #199ED8;
        }
        div{
            flex-direction: row;
            img{
                width:px2rem(24);
                height: px2rem(24);
                vertical-align: middle;
            }
            span{
                font-size: px2rem(10);
            }
        }
        .qq{
            margin: 0 px2rem(88);
        }
  }
}
</style>
