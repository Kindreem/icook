<template>
  <div class="member">

      <div class="logo">
          <img src="../../assets/images/DR-001.png" alt="">
          <p>游饪我生活！</p>
      </div>

       <div class="btn">
           <router-link to="register/register"><button class="btn_register">登录</button></router-link>
       </div>
       <div class="thirdparty">
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

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
    .member{
      text-align: center;
        .logo img{
            margin-top: px2rem(108);
            width: px2rem(195);
            height: px2rem(39);
        }
        .logo p{
            color: #199ED8;
            font-size: px2rem(14)
        }
        .btn{
            margin-top: px2rem(250);
            display: flex;
            justify-content: center;
            .btn_register,
            .btn_login{
                width: px2rem(150);
                height: px2rem(40);
                font-size: px2rem(16);
                border: none;
                outline: none;
                border-radius:px2rem(10);
            }
            .btn_register{
                background: #5DB8E9;
                color: white;
            }
            .btn_login{
                color: #999;
                background: white;
                box-shadow: 8px 8px 2px #d7d7d7;
            }
        }
        .thirdparty{
            margin-top: px2rem(80);
            display: flex;
            justify-content: center;
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
