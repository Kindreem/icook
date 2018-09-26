<template>
  <div class="register" :style="{height:height}">
  <header class="header">
           <img src="@/assets/images/DR-005.png" @click="backto">
    </header>
  <div class="tit">手机号登录</div>
     <div class="tel_register">
        <form >
           <input type="text" class="mui-input-clear" v-model="userphone" placeholder="输入手机号码">
             <transition>
            <p class="warning" v-show="warning">{{tit}}</p>
            </transition>
            <div class = "spin" v-show="tips">
              <p>{{tit}}</p>
              <mt-spinner v-if="spin" :type="3" :size="30"></mt-spinner>
              <Icon v-else type="md-checkmark-circle-outline" />
            </div>
         <br>
           <input type="text" v-model="password" placeholder="输入验证码" class="psd">
         <br>
          <input type="button" :value="val+s" class="code" @click="code">
         <br>
          <!-- <router-link to="/info"> -->
          <input class="btn_register" @click="login" value='登录' readonly="readonly" :style="style">
          <!-- </router-link> -->
          <!-- <router-link to='/register/psd'>密码登录</router-link> -->
        </form>
     </div>
       <div class="thirdparty">
         <p>第三方登录</p>
           <div class="wx">
               <img src="../../assets/images/DR-002.png" alt="">
               <span>微信</span>
           </div>
           <!-- <div class="qq">
               <img src="../../assets/images/DR-003.png" alt="">
               <span>QQ</span>
           </div>
            <div class="more">
                <img src="../../assets/images/DR-004.png" alt="">
            </div> -->
       </div>
  </div>
</template>

<script>
import {sendsms,register} from '@/api'
export default {
  data () {
    return {
      userphone:'',
      password:'',
      tit:'',
      val:'获取验证码',
      timer: null,
      tips:0,
      spin:1,
      warning:0,
      s:'',
      height:'',     //屏幕高度
      usernickname: '',
      style:{
      }
    }
  },
  mounted(){
      this.height = document.documentElement.clientHeight+'px'
      console.log(this.height);
      if(this.userphone&&this.password){
      }
  },
  watch:{
    userphone(val,old){
      console.log('111')
    },
    password(val,old){
       if(val.length==6){
          this.style={
            background:"#199ED8",
            color:"#fff", 
            boxShadow:"none"
         }
       }else{
           this.style=''
         }
    }
  },
   methods:{
      backto(){
      this.$router.go(-1);
        },
      //获取验证码
      code(){
        if((/^1(3|4|5|7|8)\d{9}$/.test(this.userphone))){
         if (!this.timer) {
                this.tit = "正在发送"
                this.tips=1;
                sendsms(this.userphone).then(res=>{
                  if(res.code==200){
                      this.tit = "发送成功"
                      this.spin=0;
                    setTimeout(()=>{
                              this.tips=0;
                            },700)
                  }
                  // console.log(res)
                })
                this.s=' s';
                const TIME_COUNT= 60
                this.val = TIME_COUNT;
                this.timer = setInterval(() => {
                  if (this.val > 0 && this.val <= TIME_COUNT) {
                   this.val--;
                  } else {
                    clearInterval(this.timer);
                    this.timer = null;
                    this.s='';
                    this.val = '获取验证码';
                  }
                }, 1000)
              }
        }else{
        this.tit = '请输入正确的手机号';
        this.warning=1;
        setTimeout(()=>{
                  this.warning=0;
                },700)
          }
      },
      //登录
      login() {
      if(this.userphone){
          if(( /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.userphone))){
              if(this.password){
                   register(this.userphone,this.password).then(res=>{
                    //  console.log(res)
                    if(res.code!=200){
                       this.tit = '验证码有误';
                       this.warning=1;
                        setTimeout(()=>{
                              this.warning=0;
                            },700)
                        }else{
                        localStorage.setItem('myphone', res.data.userphone)
                        localStorage.setItem('mytoken', res.data.token)
                        localStorage.setItem('userid', res.data.userid)
                        localStorage.setItem('certificationstatus', res.data.certificationstatus)
                        localStorage.setItem('usernickname', res.data.usernickname)
                        localStorage.setItem('userphoto', res.data.userphoto)

                        this.usernickname = res.data.usernickname
                         console.log(this.usernickname)
                         if(this.usernickname == null) {
                           this.$router.push({path: '/info'})
                         }
                         else {
                           this.$router.push({path: '/'})
                         }
                        }
                   })
                  }else{
                    this.tit = '请输入验证码';
                    this.warning=1;
                    setTimeout(()=>{
                              this.warning=0;
                            },700)
                  }
          }else{
            this.tit = '请输入正确的手机号';
            this.warning=1;
            setTimeout(()=>{
                      this.warning=0;
                    },700)
              }
        }else{
             this.tit = '手机号不能为空';
            this.warning=1;
            setTimeout(()=>{
                      this.warning=0;
                    },700)
        }

    },



      }

}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.register{
  position: relative;
  // height: 1000px;
   .warning{
        position: absolute;
        width:  px2rem(120);
        height:px2rem(25);
        line-height: px2rem(25);
        background:rgba(0,0,0,.7);
        border-radius: 8px;
        left: 50%;
        top: px2rem(135);
        transform: translateX(-50%);
        font-size: px2rem(12);
        color: #fff;
        z-index: 999;
    }
    .spin{
        position: absolute;
        width:  px2rem(100);
        left: 50%;
        top: px2rem(135);
        transform: translateX(-50%);
        background:rgba(0,0,0,.7);
        font-size: px2rem(12);
        border-radius: 8px;
        color: #fff;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          margin-right: 7px;
        }
        i{
          font-size: 30px;
          color: #fff;
        }

    }
      .v-enter {
        opacity: 0;
        top: px2rem(200); /*进入起点在屏幕100%部分,即屏幕最右*/
        }
        .v-leave-to {
        opacity: 1;
        // top: px2rem(180);
        }
        .v-enter-active,
        .v-leave-active {
        transition: all 0.2s ease-out;
        }

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
  .tel_register{
    position: absolute;
    top:  30%;
    left: 50%;
    transform: translateX(-50%);
    height:px2rem(200) ;
    input{
      width: px2rem(238);
      height: px2rem(25);
      font-size:  px2rem(14);
      text-align: center;
      border: none;
    }
    .psd{
      margin: px2rem(20) 0;
    }
    .code{
      width: px2rem(80);
      height: px2rem(25);
      font-size: px2rem(10);
      background: white;
      color: #999;
      border: 1px solid #999;
      border-radius:20px;
      box-shadow: 2px 2px #cccccc;
      outline: none;
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
    a{
      display: block;
      margin-top:10px;
      font-size: px2rem(10);
      color: #199ED8;
      text-decoration: none;
    }
  }
 .thirdparty{
      position: absolute;
      bottom: px2rem(20);
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
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
