<template>
  <div class="info">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
  <div class="demo-avatar">
      <p>完善个人信息</p>
      <Upload
       action="//jsonplaceholder.typicode.com/posts/"
       :show-upload-list="false">
     <Avatar :src="img.url" />
      </Upload>
  </div>

   <form >
        <div class="item">
            <input v-model="nickname" placeholder="请输入2至24个字符" id="nickname"/>
            <img src="../../assets/images/DR-026.png" @click="clear">
        </div>
        <div class="item">
            <input type="text" placeholder="输入您的年龄" class="age" readonly="readonly" v-model="age" @focus="openPicker">
             <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                >
                </mt-datetime-picker>
            <p id="sel">仅自己可见></p>
        </div>
         <div class="item" >
            <p class="sex">选择您的性别</p>
             <div class="sex2">
                  <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">男</label>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">女</label>
             </div>
        </div>
       <p class="txt">选择您的性别完成奖励,完成后可获得<span>烹饪之心</span>的徽章</p>
       <router-link to="/info/meet">
           <input type="button" class="next" value="下一步">
       </router-link>

  </form>


  </div>
</template>

<script>
import { DatetimePicker } from 'mint-ui';
import moment from 'moment'
export default {
  data () {
    return {
            img:{
                url:require('./TX.png')
            },
            nickname:'',
            startDate: new Date(),
            age:'',
            picked:'One'
    }
  },
  created() {
  },

  methods:{
      clear(){
        this.nickname="";
      },
       openPicker () {
         this.$refs.picker.open()
        },
      handleConfirm (data) {
        let date = moment(data).format('YYYY.MM.DD')
        this.age = date
     } ,
     backto(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/hotcss/px2rem.scss';
.info{
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
    }
  }
    .demo-avatar{
    p{
        font-size: px2rem(20);
        color: #199ED8;
        margin: 20px 0;
    }
    span{
        width: px2rem(96);
        height: px2rem(96);
        border-radius: 50%;

    }
}

  .item{
       margin: px2rem(20) auto;
       width:  px2rem(250);
       display: flex;
       position: relative;
    
    #nickname{
        width:  px2rem(250);
        height:  px2rem(25);
        font-size: px2rem(12);
        border: none;
        position: relative;

   }
   img{
       width:  px2rem(15);
       height:  px2rem(15);
       position: absolute;
       right: px2rem(2);
       top: px2rem(5);
   }
    #sel,{
         height:  px2rem(20);
         font-size: px2rem(12);
         line-height:  px2rem(20);
         right: 0;
         position: absolute;
         color: #999;
    }
    .age,.sex{
         font-size: px2rem(12);
         line-height: px2rem(20);
         background: #fff;
         color: #666;
    }
    .sex2{
        flex: 1;
        text-align: right;
        input{
            width: px2rem(14);
            height:px2rem(14);
            margin-left: px2rem(12);
            vertical-align: middle;
        }
        label{
            font-size: px2rem(12);
            vertical-align: middle;
         }
    }

  }
    .txt{
        font-size:px2rem(11);
        margin-top:px2rem(80);
        color: #999;
        span{
            color: #199ED8;
        }
    }
    .mint-popup{
        top: 50%;
        width: 70%;
        left: 15%;
        border-radius: 10px;
        background: rgba(255,255,255,.9);
        height: px2rem(180);
        transform: none;
        .picker-slot-wrapper{
            margin-top:px2rem(-15) ;
        }
        .picker-items{
            height: px2rem(100);
            margin:px2rem(25) 0;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            .picker-item{
                font-size: px2rem(15);
                // transform: perspective(600px) rotateY(20deg);
                transform: rotate3d(1, 0, 0, 50deg) translate3d(0px, 0px, px2rem(2));
            }
            .picker-item.picker-selected{
                font-size: px2rem(16);
                transform: rotate3d(1, 0, 0, 0) translate3d(0px, 0px, px2rem(0));
            }
        }
        .picker-toolbar{
            position: absolute;
            height: px2rem(25);
            bottom: px2rem(12);
            width: 100%;
            display: flex;
            justify-content: center;
            span{
                font-size: px2rem(14);
                display: inline-block;
                margin:0 px2rem(20);
                width: px2rem(85); 
                border:1px solid #999;
                border-radius: px2rem(3);
                line-height: px2rem(25); 
                color: #999;
            }
            span:last-child{
                color: #199ED8;
                border: 1px solid #199ED8;
            }
        }
    }
     .next{
      width: px2rem(270);
      height: px2rem(40);
      margin-top: px2rem(10);
      border-radius:  px2rem(10);
      background: white;
      outline: none;
      box-shadow:8px 8px 2px #d7d7d7;
      color: #999;
      font-size: px2rem(20)
    }

}


</style>
