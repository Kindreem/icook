<template>
  <div class="test">
      <input type="text" class="age" placeholder="输入您的年龄" readonly="readonly" v-model="date2" @focus = "setDate2">
  </div>
</template>

<script>
 export default {
   props: ["date2"],
   data(){
       return{
          //    date2:'',
          //  date2:'2010-3-2'
         }
   },
   methods:{
     setDate(){

       this.$picker.show({
         type:'datePicker',
         onOk: (date) =>{
           this.date = date
         }
       });

     },
     setDate2(){

       this.$picker.show({
         type:'datePicker',
         date:this.date2,  //初始化时间
         endTime:'2017-12-30',  //截至时间
         startTime:'1977-01-01',  //开始时间
         onOk:(e)=>{
           this.date2 = e;
         },

       })

     },

   },

 }
 </script>
</script>

<style lang="scss">
@import '@/assets/hotcss/px2rem.scss';
.test{  
  p{
    font-size: px2rem(20);
  }
  input{

    font-size: px2rem(20);
  }
}
.m-picker{
  .m-picker-box{
      top: 50%;
      width: 85%;
      left: 8%;
      border-radius: 15px;
      overflow: hidden;
      height: px2rem(250);
      transform: none;
    }
    .m-picker-header{
      width: 100%;
      position: absolute;
      bottom: 5px;
      span{
          font-size: px2rem(14);
          display: inline-block;
          margin: 0 px2rem(20);
          width: px2rem(85);
          border: 1px solid #999;
          border-radius: px2rem(3);
          height: px2rem(25);
          line-height: px2rem(25);
          text-align: center;
          color: #999;
      }
        span:last-child {
        color: #199ed8;
        border: 1px solid #199ed8;
      }
    }
    .m-picker-item-box{
        margin-top: 20px;
        height: px2rem(190);
        transform-style: preserve-3d;
      // transform: perspective(860px) rotateX(-10deg);  
      .m-picker-item{
         transform: perspective(860px) rotateX(10deg); 
        .m-scroller-indicator{
            background: rgba(255, 255, 255, 0);
            border-top: 1px solid rgba(166, 166, 166, .2);
            border-bottom: 1px solid rgba(166, 166, 166, .2);
            color: #000;
        }
            .m-scroller-item{
              transform:rotate3d(0, 0, 0,0deg) translate3d(8px, 0px, px2rem(2));
         }
      }
    }
  }
</style>
