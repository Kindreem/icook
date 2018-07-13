<template>
  <div class="info">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
  <div class="demo-avatar">
      <p>完善个人信息</p>
     <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
  </div>
 
   <Form :model="formItem" >
        <div class="item">
            <input v-model="formItem.nickname" placeholder="请输入2至24个字符" id="nickname"/> 
            <img src="../../assets/images/DR-026.png" @click="clear">
        </div>
        <div class="item">
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
            <p id="sel">仅自己可见</p>
        </div>
         <div class="item">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </div>
       <p class="txt">选择您的性别完成奖励,完成后可获得<span>烹饪之心</span>的徽章</p>
       <router-link to="info/meet">
           <input type="button" class="next" value="下一步">
       </router-link>

  </Form>


  </div>
</template>

<script>

export default {
  data () {
    return {
        formItem:{
            nickname:'',
            dateTime: '',
            startDate: new Date(),
        },
   
         
           cityList: [
                    {
                        value: '1',
                        label: '仅自己可见'
                    },
                    {
                        value: '2',
                        label: '所有人可见'
                    },
                    {
                        value: '3',
                        label: '部分人可见'
                    },
                ],
                model3: '',
                radio:'male'
    }
  },
  created() {
      this.model3 = this.cityList[0].value
  },

  methods:{
      clear(){
        console.log('www')
      },
       openPicker () {
         this.$refs.picker.open()
        },  
      handleConfirm (data) {
        let date = moment(data).format('YYYY.MM.DD')
        this.dateTime = date
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
       margin: 0 auto;
       width:  px2rem(238);
       display: flex;
       position: relative;
    #nickname{
        margin-bottom: px2rem(20);
        width:  px2rem(238);
        height:  px2rem(25);
        margin-top:px2rem(20);
        font-size: px2rem(12);
        border: none;
        
   }
   img{
       width:  px2rem(20);
        height:  px2rem(20);
   }
    #sel{
         width: px2rem(100);
         height:  px2rem(20);
         font-size: px2rem(12);
         margin-left: 300px;
         option{
             font-size: 10px;
         }
    }
    .ivu-radio-wrapper{
          font-size: 40px
      }
    .ivu-radio-inner{
        width: 30px;
        height: 30px;
        background: #d7d7d7;
    }
.ivu-radio-checked .ivu-radio-inner:after {
    opacity: 1;
    transform: scale(1);
    transition: all .2s ease-in-out;
}
    .ivu-radio-inner:after {
    position: absolute;
    width: 15px;
    height: 15px;
    left: 6px;
    top: 6px;
    border-radius: 6px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: ' ';
    background-color: #2d8cf0;
    opacity: 0;
    transition: all .2s ease-in-out;
    transform: scale(0);
}
         
  }
    .txt{
        font-size:px2rem(10);
        margin-top:px2rem(80);
        color: #999;
        span{
            color: #199ED8
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
