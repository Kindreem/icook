<template>
  <div class="member">

      <div class="logo">
          <img src="../../assets/images/DR-001.png" alt="">
          <p>游饪我生活！</p>
      </div>

       <div class="btn">
           <router-link to="register"><button class="btn_register">登录</button></router-link>
       </div>
       <div class="thirdparty">
           <div class="wx">
               <img src="../../assets/images/DR-002.png" alt="">
               <span @click="wx">微信</span>
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
// import axios from 'axios'
// import api from '@/api/index'
export default {
  data () {
    return {

    }
  },
  methods:{
      wx(){
        //   console.log('ssss')
        
        this.axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx46bfe246fb596974&secret=ecf3b8b5219b4a264eb33634af6e6c15').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)        
        })
      }
  },
    created() {
        //如果url里有token, 设置进cookie
        var token = this.$route.query.token;    
        if(typeof token !== 'undefined') {
        var exp = new Date();
        exp.setTime(exp.getTime() + 3600 * 1000);//过期时间60分钟
        document.cookie = 'token=' + token + ";expires=" + exp.toGMTString();
        console.log(token)
        }
        //获取token，前端主动跳转到微信获取code的链接——tokenUrl，这里最好由后端封装好一个接口，不要直接暴露整个链接。
        //returnUrl是传给后端用来跳转回前端页面的地址
        // if(getCookie('token') == null) {
        // // location.href = config.projectUrl + '/auth?returnUrl=' +  encodeURIComponent(config.projectUrl + '/#/');
        // location.href location.href=='https:/open.weixin.qq.com/connect/oauth2/authorize#wechat_redirect%22  '
    //   location.href= 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx46bfe246fb596974&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
        // }
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
            font-size: px2rem(14);
        }
        .btn{
            top:  70%;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            // display: flex;
            // justify-content: center;
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
            position: absolute;
            bottom: px2rem(20);
            left: 0;
            right: 0;
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
            font-size: px2rem(14);
        }
        .btn{
            top:  70%;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            // display: flex;
            // justify-content: center;
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
            position: absolute;
            bottom: px2rem(20);
            left: 0;
            right: 0;
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
