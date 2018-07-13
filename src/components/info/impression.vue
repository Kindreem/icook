<template>
  <div class="info">
      <header class="header">
        <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
  <div class="demo-avatar">
      <p>留下你的印象</p>
     <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
  </div>

   <Form :model="formItem" >
        <div class="item">
            <Input v-model="formItem.nickname" placeholder="请输入2至24个字符" id="nickname"/>
            <img src="../../assets/images/DR-026.png" alt="">
        </div>
        <div class="item">
           <DatePicker type="date" :options="options1" placeholder="选择您的生日" style="width: 250px" id="age"></DatePicker>
             <Select v-model="model3" style="width:100px" placeholder="仅自己可见">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
         <div class="item">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female" >女</Radio>
            </RadioGroup>

        </div>
       <p class="txt">选择您的性别完成奖励,完成后可获得<span>烹饪之心的</span>徽章</p>
       <router-link to="/load/load">
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
        },
        options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
           cityList: [
                    {
                        value: '仅自己可见',
                        label: '仅自己可见'
                    },
                    {
                        value: '所有人可见',
                        label: '所以人可见'
                    },
                    {
                        value: '部分人可见',
                        label: '部分人可见'
                    },
                ],
                model3: '',
                radio: 'male',
    }
  },
   methods:{
      backto(){
      this.$router.go(-1);
    }
  },
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
        .ivu-input{
              width:  px2rem(238);
              height:  px2rem(25);
              margin-top:px2rem(20);
              font-size: px2rem(12);
        }
   }
   img{
        width:  px2rem(16);
        height:  px2rem(16);
        position: absolute;
        right: px2rem(5);
        top: px2rem(25);

   }
    #age{
        margin-right:  px2rem(60);
        margin-bottom:px2rem(20);
        font-size:  px2rem(10);
        display: flex;
      .ivu-input{
          font-size: px2rem(12);
          width: px2rem(100);
          height: px2rem(20);
      }
      .ivu-icon {
          font-size:  px2rem(12);
          line-height: px2rem(20);
          flex-direction: column;
          transform: translateX(-20px);

      }
        .ivu-select-dropdown{
        width:  px2rem(400)!important;
        left: 0px!important;
    }
    .ivu-date-picker-cells span em{
        margin:2px 18px 2px 2px;
    }
    }
    .ivu-select-selection{
         width: px2rem(80);
         height:  px2rem(20);
        .ivu-select-placeholder,.ivu-select-selected-value{
            font-size: px2rem(10);
            height: px2rem(20);
            line-height:px2rem(20)
            }
      }

    .ivu-select-dropdown{
        width: 200px!important;
        left: 400px!important;
    }
    .ivu-select-item{
        font-size: px2rem(10)!important;
    }
    .ivu-radio-wrapper{
          font-size: 40px
      }
    .ivu-radio-inner{
        width: 30px;
        height: 30px;
        background: #d7d7d7
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
