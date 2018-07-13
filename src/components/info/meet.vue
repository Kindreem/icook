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
       <li>
         <img v-show="ishow" src="../../assets/images/DR-010-A.png" @click="onshow($event)">
         <img v-show="ishide"  src="../../assets/images/DR-010.png" @click="onshow($event)">

       </li>
       <li>
          <img v-show="ishow" src="../../assets/images/DR-011.png" @click="onshow">
          <img v-show="ishide"  src="../../assets/images/DR-011-A.png" @click="onshow">
       </li>
       <li>
          <img v-show="ishow" src="../../assets/images/DR-012.png" @click="onshow">
          <img v-show="ishide"  src="../../assets/images/DR-012-A.png" @click="onshow">
       </li>
        <li>
          <img v-show="ishow" src="../../assets/images/DR-013.png" @click="onshow">
          <img v-show="ishide"  src="../../assets/images/DR-013A.png" @click="onshow">
       </li>
        <li>
         <img v-show="ishow" src="../../assets/images/DR-014.png" @click="onshow">
         <img v-show="ishide"  src="../../assets/images/DR-014-A.png" @click="onshow">
       </li>
        <li>
         <img v-show="ishow" src="../../assets/images/DR-015.png" @click="onshow">
         <img v-show="ishide"  src="../../assets/images/DR-015-A.png" @click="onshow">
       </li>
        <li>
         <img v-show="ishow" src="../../assets/images/DR-016.png" @click="onshow">
         <img v-show="ishide"  src="../../assets/images/DR-016A.png" @click="onshow">
       </li>
        <li>
         <img v-show="ishow" src="../../assets/images/DR-017.png" @click="onshow">
         <img v-show="ishide"  src="../../assets/images/DR-017-A.png" @click="onshow">
       </li>
        <li>
        <img v-show="ishow" src="../../assets/images/DR-018.png" @click="onshow">
        <img v-show="ishide"  src="../../assets/images/DR-018-A.png" @click="onshow">
       </li>
    </ul>
      <div class="btn-meet">
        <p>完成奖励 : 完成后可获得 徽章</p>
        <router-link to="/info/impression">
         <button class="next">下一步</button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        ishow:1,
        ishide:0
    }
  },
   methods:{
     onshow(e){
       this.ishow=!this.ishow
       this.ishide=!this.ishide
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
    margin-top: px2rem(20);
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
      color: #999;
      font-size: px2rem(20)
    }
  }


}


</style>
