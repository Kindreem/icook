<template>
    <div class="genre">
         <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">流派</p>
      </header>
    <div class="search">
        <input type="text" placeholder="请输入信息">
        <div class="icon"><img src="../../assets/images/DR-019.png" alt=""></div>
    </div>
          <div class="item">
           <div class="title">
               <img src="./GR-007.png" alt="">
               <p>粤派</p>
               </div>
           <ul class="meet">
               <li>
                   <img src="./2.png" alt="">
                   <p>已获得</p>
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <p>进行中</p>
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>

           </ul>
       </div>
       <div class="item">
           <div class="title">
               <img src="./GR-007.png" alt="">
               <p>川派</p></div>
           <ul class="meet">
               <li>
                   <img src="./2.png" alt="">
                   <p>已获得</p>
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <p>进行中</p>
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>

           </ul>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
      backto(){
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.genre{
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
        top: px2rem(20);
        left: 50%;
        transform: translateX(-50%)
    }
    div{
      padding: 20px;
    }
    img{
      margin-top:  px2rem(20);
      width: px2rem(24);
      height: px2rem(24);
    }
  }
    padding:  px2rem(5);
    text-align: left;
      .search{
        width: px2rem(285);
        height: px2rem(25);
        border-radius: px2rem(10);
        border:px2rem(1) solid #199ED8;
        margin:  px2rem(20) auto;
        position: relative;
        input{
        border: none;
        outline: none;
        text-align: center;
        font-size:  px2rem(12);
        margin: px2rem(3) px2rem(72) ;
        }
        .icon{
        position: absolute;
        right:0;
        top: 0;
        margin-right:px2rem(5);
        margin-top: px2rem(3);
        img{
            width: px2rem(18);
            height: px2rem(18);
        }
    }
  }
   .item{
        width: 100%;
        height:  px2rem(250);
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
            margin-top: px2rem(10);
            display: flex;
            flex-wrap: wrap;
            li{
                flex-direction: column;
                width: 25%;
                text-align: center;
                margin-top: px2rem(10);
                img:first-child{
                    width:px2rem(70);
                    height: px2rem(70);
                }
                p{
                  margin: px2rem(-8) auto;
                  color: #999;
                }
                img:last-child{
                    width: px2rem(15);
                    height: px2rem(15);
                    display: block;
                    margin: px2rem(-8) auto;
                }
            }
        }
   }

}
</style>
