<template>
  <div class="info">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
  <div class="demo-avatar">
      <p>留下您的印象</p>
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
            <input type="text" placeholder="输入您的年龄" readonly="readonly" class="age" v-model="age" @focus="openPicker">
             <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
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
       <router-link to="/load/load">
           <input type="button" class="next" value="下一步">
       </router-link>
  </form>
    <div class="end">
        <div class="left"><img src="./xxx.png" alt=""></div>
        <div class="con">
            <p><span>'烹饪之心'</span>徽章</p>
            <p>褒奖给每位ICOOK烹饪之旅的烹饪家</p>
        </div>
        <div class="right"><span>EXP+3</span>
        <img src="./DR-007.png" alt="">
        <span>+3</span></div>
    </div>

  </div>
</template>

<script>
import { DatetimePicker } from 'mint-ui';
import moment from 'moment'
export default {
  data () {
    return {
            img:{
                url:'https://i.loli.net/2017/08/21/599a521472424.jpg'
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
         color: #666;
    }
    .sex2{
        flex: 1;
        text-align: right;
        input{
            width: px2rem(12);
            height:px2rem(12);
            margin-left: px2rem(12);
        }
        label{
            font-size: px2rem(12);
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
        width: 65%;
        left: auto;
        border-radius: 10px;
        background: rgba(255,255,255,.9);
        height: px2rem(140);
        transform: none;
        .picker-items{
            height: px2rem(100);
            margin:px2rem(10) 0;
            .picker-item{
                font-size: px2rem(14);
            }
        }
        .picker-toolbar{
            position: absolute;
            height: px2rem(20);
            bottom: 0;
            width: 100%;
            span{
                display: inline-block;
                font-size: px2rem(14);
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
    .end{
        position: relative;
        display: flex;
        width:  px2rem(260);
        margin: px2rem(10) auto;
        .left img{
            margin-left:px2rem(-10) ;
            width:px2rem(60);
        }
       .con{
           margin: px2rem(10) px2rem(5);
           text-align: left;
            p{
            font-size: px2rem(10);
            line-height: px2rem(20);
            color: #999;
        }
       }
       span{
           color: #199ED8;
           font-size: px2rem(10);
       }
       .right{
           position: absolute;
           right: 0;
           top: px2rem(10);
           img{
               width: px2rem(12);
               vertical-align:bottom;
           }
       }
    }

}


</style>
