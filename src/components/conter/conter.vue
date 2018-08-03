<template>
  <div class="conter">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
      <div class="head">
         <div class="demo-avatar">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>
        <div class="name">
            <p>昵称</p>
            <p>所属公会</p>
        </div>
        <div class="right">
            <router-link to="conter/show" ><img src="./2.png" alt=""></router-link>
            <router-link to="conter/show" ><img src="./2.png" alt=""></router-link>
        </div>
      </div>
       <div class="item">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的钱包</p>
            </div>
           <ul class="money">
               <li>第一种货币:999999</li>
               <li>第二种货币:999999</li>
               <li>第三种货币:999999</li>
           </ul>
       </div>
        <div class="item">
           <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我学会的菜肴:38道</p>
            </div>
           <ul class="meet">
               <li>
                   <img src="./pic.png" alt="">
                   <p>蛋炒饭</p>
               </li>
                <li>
                   <img src="./pic.png" alt="">
                   <p>蛋炒饭</p>
               </li>
                <li>
                   <img src="./pic.png" alt="">
                   <p>蛋炒饭</p>
               </li>
                <li>
                   <img src="./pic.png" alt="">
                   <p>蛋炒饭</p>
               </li>

           </ul>
       </div>
       <div class="item menu">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的菜谱(共36个)</p>
            </div>
           <ul class="menus">
               <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>

           </ul>
       </div>
       <div class="item menu">
             <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我的作品(共36个)</p>
            </div>
           <ul class="menus">
               <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>

           </ul>
       </div>
         <div class="item menu">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的收藏(共36个)</p>
            </div>
           <ul class="menus">
               <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>
                <li>
                   <img src="./pic.png" alt="">
               </li>

           </ul>
       </div>
       <div class="item badge">
            <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的徽章</p>
           </div>
           <ul class="badges">
               <li v-for="(item,index) in imgs" :key="index">
                   <router-link to="conter/badge" >
                   <img :src="item.url" alt="">
                   </router-link>
               </li>

           </ul>
       </div>
        <div class="item badge">
             <div class="title">
                <img src="./GR-007.png" alt="">
               <p>我的成就</p>
            </div>
           <ul class="badges2">
               <li>
                    <router-link to="conter/achieve" ><img src="./2.png" alt=""></router-link>
               </li>
                <li>
                    <router-link to="conter/achieve" ><img src="./2.png" alt=""></router-link>

               </li>
                <li>
                    <router-link to="conter/achieve" ><img src="./2.png" alt=""></router-link>
               </li>
                <li>
                    <router-link to="conter/achieve" ><img src="./2.png" alt=""></router-link>
               </li>

           </ul>
       </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        imgs:[
           { url:require('./1.png')},
           { url:require('./8.png')},
           { url:require('./3.png')},
           { url:require('./4.png')},
        ]

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
.conter{
    .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    div{
      padding: 20px;
    }
    img{
      margin-top: px2rem(5);
      width: px2rem(24);
    }
  }
    padding:  px2rem(10);
    text-align: left;
    .head{
        position: relative;
        span{
            width: px2rem(65);
            height: px2rem(65);
            border-radius: 50%;
         }
         .name{
            position: absolute;
            font-size: px2rem(12);
            top: 0;
            left: px2rem(75);
            transform: translateY(50%);
            p:last-child{
                color: #999;
            }
         }
         .right{
             vertical-align: middle;
             position: absolute;
             transform: translateY(50%);
             text-align: right;
             top: 0;
             right: 0;
             img{
                  width: px2rem(35);
                  height: px2rem(35);
             }
         }
    }
    .item.menu{
        height:  px2rem(170);
    }
    .item.badge{
        height:  px2rem(150);
    }
    .item{
        width: 100%;
        height:  px2rem(130);
        margin-top: px2rem(15);
        border-radius: px2rem(10);
        box-shadow:  12px 15px rgba(0,0,0,.1);
        .title{
            width: px2rem(180);
            height: px2rem(30);
            position: relative;
                img{
                width: px2rem(180);
                height: px2rem(40);
                 }
            p{
                font-size: px2rem(12);
                line-height: px2rem(30);
                margin-left: px2rem(20);
                padding-left:  px2rem(25);
                background: url(./titles.png)no-repeat center left;
                background-size: px2rem(20) px2rem(15);
                position: absolute;
                top: 0;
            }
        }
        ul{
            list-style: none;
            font-size: px2rem(12);
            margin-top: px2rem(15);
            display: flex;
            li{
                flex-direction: column;
                flex: 1;
                text-align: center;
            }
        }
        ul.money{
            display: block;
            li{
            text-align: left;
            margin:px2rem(8) px2rem(20);
            }
        }
        ul.meet li{
            img{
                width: px2rem(45);
                height: px2rem(45);
                border-radius: 50%;
                overflow: hidden;
            }
        }
        ul.menus{
            margin:px2rem(20) px2rem(10);
            img{
             width: px2rem(90);
             height: px2rem(100);
             border-radius:px2rem(10);
             overflow: hidden;
            }
        }
        ul.badges li{
            margin-top: px2rem(10);
            img{
                width: px2rem(64);
            }
        }
         ul.badges2 {
            // margin: px2rem(30) px2rem(20);
            img{
                width: px2rem(64);
            }
        }

    }
}
</style>
