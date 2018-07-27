<template>
  <div class="tast">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">任务</p>
      </header>
      <div class="item" v-for="(item,index) in pic" :key="index">
         <div class="left">
             <p class="tit">头衔</p>
             <span></span>
             <p class="tit2">任务</p>
         </div>
         <div class="yuan">
             <span class="wire1"></span>
             <img :src="item.imgs" alt="">
             <p>{{item.title}}</p>
             <div class="wire2">
                 <span></span>
                  <span></span>
             </div>
         </div>
         <div class="right">
             <div class="pic">
                 <img v-if="item.show" :src="item.pic1"  @click="get(index)">
                 <img v-else :src="item.pic2" >

                 <img v-if="item.show" :src="item.pic1"  @click="get(index)">
                 <img v-else :src="item.pic2" >
             </div>
             <div class="award">
             <p>等级奖励</p>
             <p>任务奖励</p>
             </div>
         </div>
      </div>


  </div>
</template>

<script>
export default {
  data () {
    return {

        pic:[
            {id:1,title:'lv.1',imgs:require('./left.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:2,title:'lv.2',imgs:require('./right.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:3,title:'lv.3',imgs:require('./left.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:4,title:'lv.4',imgs:require('./right.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:5,title:'lv.5',imgs:require('./left.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:6,title:'lv.6',imgs:require('./right.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:7,title:'lv.7',imgs:require('./left.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
            {id:8,title:'lv.8',imgs:require('./right.png'),pic1:require('./RW-004.png'),pic2:require('./RW-005.png'),show:1},
        ],

    }
  },
    methods:{
        get(index){
            // console.log(this.pic[index])
            this.pic[index].show= 0;
        },
         backto(){
             this.$router.go(-1);
     }
  },
    created(){
        // console.log(this.pic)
    }
 }
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.tast{
    .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    position: relative;
    .title{
        font-size: px2rem(20);
        position: absolute;
        font-size:  px2rem(14);
        color: #199ED8;
        top: 0;
        left: 50%;
        transform: translateX(-50%)
    }
    div{
      padding: 20px;
    }
    img{
      width: px2rem(24);
      height: px2rem(24);
      margin-left: px2rem(-20);;
    }
  }
    margin: 0 px2rem(40);
    margin-top:px2rem(20);
    .item{
        width: px2rem(185);
        height: px2rem(70);
        display: flex;
        margin: 0 auto;
        justify-content: center;
        span{
            position: absolute;
            background: #199ED8;
            z-index: -1;
        }
        .left{
            position: relative;
            margin-top: px2rem(8);
           p{
            font-size: px2rem(9);
            width: px2rem(50);
            height: px2rem(20);
            line-height:  px2rem(20);
            background: #199ED8;
            border-radius:px2rem(10);
            color: #fff;
            text-align: center;
           }
           .tit2{
               margin-top:  px2rem(15);
               background: #ADDBF3;
           }
           span{
               width: px2rem(1);
               height: px2rem(15);
               position: absolute;
               right: 50%;
           }
        }
        .yuan{
                width: px2rem(70);
                height: px2rem(70);
                position: relative;
                margin: 0 px2rem(45);
                z-index: 22;
            img{
                width: px2rem(70);
                height: px2rem(70);
                // vertical-align: middle;
            }
            P{
                font-size: px2rem(20);
                position: absolute;
                top: 50%;
                left: 30%;
                transform: translatey(-50%);
                color: #199ED8;

            }
            .wire1{
                width: px2rem(70);
                height:px2rem(1);
                left: -100%;
                top:px2rem(35);
            }
            .wire2{
                span{
                    width: px2rem(52);
                    height:px2rem(1);
                    left: 90%;
                    top:px2rem(50);
                }
                span:first-child{
                    top: px2rem(20);
                }
            }
        }
        .right{
            width: px2rem(80);
            display: flex;
            img{
                width: px2rem(24);
                height: px2rem(24);
                margin: px2rem(5) 0;
            }
            p{
                width: px2rem(50);
                font-size: px2rem(11);
                margin: px2rem(13) px2rem(3);
                color: #999;
            }
        }
    }
}
</style>
