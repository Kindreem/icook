<template>
  <div class="all">
    <header>
      <img src="../public/img/DR-005.png" alt="" @click="back">
      <h3>烹饪菜系</h3>
    </header>
    <div class="genre">
      <ul class="meet">
                <li v-for="(item,id) in data" :key="id">
                  <router-link :to="'cookinfo/'+item.factionsid">
                   <img :src="item.factionsimg">
                   </router-link>
                   <p>{{item.factionsname}}</p>
               </li>
           </ul>
    </div>
    <div class="f1" v-if="guide4">
      <img src="./1 (2).png" alt="">
    </div>
    <div class="guide" v-if="guide4">
     <h4 class="h1">目前只收录了中华美食的各流派。随版本的更新迭代，全世界的美食流派都将呈现在此。</h4>
     <img class="img1" src="./8-流派.png" alt="">
     <button @click="end">朕知道了</button>
   </div>
  </div>
</template>
<script>
import { faction } from "@/api";
export default {
  data() {
    return {
      data: "",
      guide4: false
    };
  },
  created() {
    this.$store.state.one=""
    this.$store.state.tow=""
    this.$store.state.num1=1
    this.$store.state.num2=1
    let userid = localStorage.getItem("userid");
    faction(userid).then(res => {
      this.data = res.data;
      //  console.log(res)
    });

    if(localStorage.getItem('guide4')==1) {
        this.guide4=true
    }
  },
  methods: {
    back() {
      // this.$router.go(-1); //返回上一层
      this.$router.push({path: '/'})
    },
    end() {
      localStorage.setItem('guide4',0)
      this.guide4=false

    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.f1 {
  position: fixed;
  top: px2rem(200);
  left: 15.5%
  z-index: 10000;
  img {
    width px2rem(150)
  }
}
.guide {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  .h1 {
    position: fixed;
    top: px2rem(500);
    left: 50%;
    margin-left: -42%;
    color: #fff;
    font-size: px2rem(26);
    letter-spacing: px2rem(4);
    line-height: px2rem(36);
    width: 84%;
    white-space: normal;
  }
  .img1 {
    position: fixed;
    top: px2rem(364);
    left: 24%;
    width: px2rem(38);
  }
   button {
    position: fixed;
    bottom: px2rem(250);
    left: 50%;
    margin-left: px2rem(-90);
    width: px2rem(180);
    height: px2rem(54);
    color: #fff;
    font-size: px2rem(26);
    border: 1px solid #fff;
    border-radius: 10px;
    background: transparent;
    outline: none;
  }
}
.all {
  margin: px2rem(12) px2rem(32);
}

header {
  height: px2rem(88);
  line-height: px2rem(88);
  // text-align center
  img {
    margin-top: px2rem(20.8);
    position absolute
    // top px2rem(18);
    // left 0px
    width: px2rem(48);
  }

  h3 {
    text-align center
    font-size px2rem(32)
    font-weight 300
    color: #199ed8;
  }
}

.genre {
  // position relative
  margin-top: px2rem(20);
  padding: px2rem(40) px2rem(65);
  // height: px2rem(360);
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      margin-top: px2rem(40);
      width: 33.33%;
      text-align: center;

      p {
        margin-top: px2rem(10);
        font-size: px2rem(26);
      }

      img {
        width: px2rem(150);
      }
    }
  }
}
</style>


