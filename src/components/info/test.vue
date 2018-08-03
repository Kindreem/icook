<template>
  <div class="meet">
    <header class="header">
        <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
     <div class="tit">选择您拿手的或想做的<p>最多可选4个</p></div>
      <div class="search">
         <input type="text" placeholder="输入菜系或菜谱" v-model="search" @keyup.enter="enter">
         <div class="icon"><img src="../../assets/images/DR-019.png" alt=""></div>
         <div class="sel"></div>
         <transition>
         <p class="warning" v-show="warning">最多可选4个！</p>
         </transition>
      </div>
    <ul class="greens">
       <li v-for="(item,index) in names" :key="index" @click="onshow(index)" :style="{background:item.bg}">
         <p>{{item.name}}</p>
         <span class="checkbox"><input type="radio" :checked="item.ishow"></span>
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
        warning:0,
        search:'',  //搜索框内容
        names:[
            {id:1,bg:'#CA2C50',name:'麻婆豆腐',ishow:0},
            {id:2,bg:'#5DB8E9',name:'佛跳墙',ishow:0},
            {id:3,bg:'#E9537C',name:'东坡肉',ishow:0},
            {id:4,bg:'#82C6CB',name:'干炸响铃',ishow:0},
            {id:5,bg:'#68B82E',name:'剁椒鱼头',ishow:0},
            {id:6,bg:'#8C9CCA',name:'泉州肉粽',ishow:0},
            {id:7,bg:'#8F8B81',name:'波丝芋头',ishow:0},
            {id:8,bg:'#D6B823',name:'土豆丝',ishow:0},
            {id:9,bg:'#EE7A2D',name:'太极豆腐',ishow:0},
        ]
        // name:['麻婆豆腐','佛跳墙','东坡肉','干炸响铃','剁椒鱼头','泉州肉粽','波丝芋头','土豆丝','太极豆腐']
    }
  },
  created() {
    },

   methods:{
     onshow(id){
    //    this.imgs[id].ishow=!this.imgs[id].ishow
       this.names[id].ishow=!this.names[id].ishow

      //最多选4个
        let checked = []
        this.names.forEach(function(item){
          if(item.ishow!=0){
           checked.push(item.ishow)
          }
        })
          if(checked.length>4){
              this.names[id].ishow=0 
              //超过限制
                this.warning=1;
                 setTimeout(()=>{
                   this.warning=0;
                 },1000)
            }
     },
     backto(){
      this.$router.go(-1);
      },
      enter(){
        let r, g, b;
        r = Math.floor(Math.random() * 220);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

      //获取已选个数
         let checked = []
            this.names.forEach(function(item){
              if(item.ishow!=0){
              checked.push(item.ishow)
              }
            })

        if(this.search!==''&&checked.length<4){
        this.names.unshift({id:'',bg:"rgb(" +r + ',' +g+ ',' +b+ ")",name:this.search,ishow:1})
        }else{
          //超出限制
             this.warning=1;
                setTimeout(()=>{
                  this.warning=0;
                },1000)
       }
         this.search='';
      }
    },

    computed: {
    // 随机背景色
     RandomColor(index) {
        let r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return "rgb(" +r + ',' +g+ ',' +b+ ")";
        // :style="{background:'rgb('+Math.floor(Math.random() * 220)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'}"
        }
    },
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
    .sel{

    }
  }

  .greens{
      margin: px2rem(25) auto;
      display: flex;
      width: px2rem(300);
      height:px2rem(280);
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
      li{
        list-style: none;
        width: 33.3333%;
        width: px2rem(80);
        height: px2rem(77);
        background: pink;
        margin:px2rem(10);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: px2rem(14);
        color: #ffffff;
        position: relative;
      .checkbox{
        display: block;
        border: px2rem(1) solid #fff;
        width: px2rem(13);
        height: px2rem(13);
        border-radius: 50%;
        position: absolute;
        right:px2rem(2);
        bottom: px2rem(2);
          input{
            // display:none;
            width: 0;
            // position: relative;
        }
          input:checked::before{
            content: '';
            display: inline-block;
            width: px2rem(7);
            height: px2rem(7);
            background: #fff;
            position: absolute;
            border-radius: 50%;
            top: px2rem(2);
            left:px2rem(2);
          }
      }
      }
  }
  .warning{
    position: absolute;
    width:  px2rem(120);
    height:px2rem(25);
    line-height: px2rem(25);
    background:rgba(0,0,0,.7);
    border-radius: 8px;
    left: 50%;
    top: px2rem(180);
    transform: translateX(-50%);
    font-size: px2rem(12);
    color: #fff;
    z-index: 999;
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
    .v-enter {
      opacity: 0;
      top: px2rem(200); /*进入起点在屏幕100%部分,即屏幕最右*/
    }
    .v-leave-to {
      opacity: 1;
      top: px2rem(180);
    }
    .v-enter-active,
    .v-leave-active {
      transition: all 0.2s ease-out;
    }   
   }


</style>
