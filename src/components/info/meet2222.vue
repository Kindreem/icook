<template>
  <div class="meet">
    <header class="header">
        <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
     <div class="tit">选择您拿手的或想做的<p>最多可选4个</p></div>
      <div class="search">
         <input type="text" placeholder="输入菜系或菜谱">
         <div class="icon"><img src="../../assets/images/DR-019.png" alt=""></div>
      </div>
    <ul class="greens">
       <li v-for="(item,index) in imgs" :key="index">
         <img v-show="item.ishow" :src="item.url1" @click="onshow(index)">
         <img v-show="item.ishide"  :src="item.url2" @click="onshow(index)">
       </li>
    </ul>
      <div class="btn-meet">
        <p>完成奖励 : 完成后可获得 徽章</p>
        <router-link to="/load/load">
         <button class="next">下一步</button>
        </router-link>
      </div>
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
export default {
  data () {
    return {
        imgs:[
            {id:1,ishow:1,ishide:0,url1:require('../../assets/images/DR-010-A.png'),url2:require('../../assets/images/DR-010.png')},
            {id:2,ishow:1,ishide:0,url1:require('../../assets/images/DR-011.png'),url2:require('../../assets/images/DR-011-A.png')},
            {id:3,ishow:1,ishide:0,url1:require('../../assets/images/DR-012.png'),url2:require('../../assets/images/DR-012-A.png')},
            {id:4,ishow:1,ishide:0,url1:require('../../assets/images/DR-013.png'),url2:require('../../assets/images/DR-013A.png')},
            {id:5,ishow:1,ishide:0,url1:require('../../assets/images/DR-014.png'),url2:require('../../assets/images/DR-014-A.png')},
            {id:6,ishow:1,ishide:0,url1:require('../../assets/images/DR-015.png'),url2:require('../../assets/images/DR-015-A.png')},
            {id:7,ishow:1,ishide:0,url1:require('../../assets/images/DR-016.png'),url2:require('../../assets/images/DR-016A.png')},
            {id:8,ishow:1,ishide:0,url1:require('../../assets/images/DR-017.png'),url2:require('../../assets/images/DR-017-A.png')},
            {id:9,ishow:1,ishide:0,url1:require('../../assets/images/DR-018.png'),url2:require('../../assets/images/DR-018-A.png')},
        ]
    }
  },
   methods:{
     onshow(id){
       this.imgs[id].ishow=!this.imgs[id].ishow
       this.imgs[id].ishide=!this.imgs[id].ishide
     },
     backto(){
      this.$router.go(-1);
    }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.meet{
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
    margin-top: px2rem(10);
    p{
      color: #999;
      font-size: px2rem(16)
    }
  }

  .search{
    width: px2rem(285);
    height: px2rem(25);
    border-radius: px2rem(10);
    border:1px solid #199ED8;
    margin:  px2rem(20) auto;
    position: relative;
    input{
      border: none;
      outline: none;
      text-align: center;
      font-size:  px2rem(12);
      margin-top: px2rem(3);
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

  .greens{
    margin: px2rem(25) auto;
    display: flex;
    width: px2rem(300);
    flex-wrap: wrap;
    li{
      list-style: none;
      width: 33.3333%;
      margin-bottom: px2rem(16);
      img{
        width: px2rem(80);
        height: px2rem(77);
      }
    }
  }
  .btn-meet{
    p{
      font-size: px2rem(10);
      color: #999;
    }
    .next{
      width: px2rem(270);
      height: px2rem(40);
      margin-top: px2rem(10);
      border-radius:  px2rem(10);
      background: white;
      outline: none;
      box-shadow:8px 8px 2px #d7d7d7;
      border: none;
      color: #999;
      font-size: px2rem(20)
    }
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
