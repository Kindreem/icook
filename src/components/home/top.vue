<template>
  <div class="all" @mouseup="end" @touchend="end">
    <header>
      <p>本周流行菜肴TOP10</p>
    </header>
    <div class="item" v-for="(item,index) in $store.state.top" :key="index">
      <router-link :to="'U_menu/'+item.ubid">
      <img class="bg" :src="item.ubthumbimg" alt="">
     <div class="tab">
      <!-- <img  src="./img/ZY-009.png" alt=""> -->
      <img class="heart" src="./img/ZY-043.png" alt="">
      <p>{{item.ubname}}</p>
    </div>
    </router-link>
    </div>
  </div>
</template>

<script>
import { userbooktopten,updateuser } from "@/api";
export default {
  created() {},
  mounted() {
    // let usernicknam
    // if(this.usernickname.length==0){
    //    usernicknam=''

    // }else{
    //    usernicknam =`&usernickname=${this.usernickname}`
    // }
    // updateuser(28,usernicknam,'','','').then(res => {
    //     console.log(res)
    // })




    //  console.log(document.body.scrollTop)
    window.addEventListener("scroll", this.move);
    //  window.addEventListener('scroll', this.end)
    var pageHeight = document.documentElement.clientHeight;
    this.height = pageHeight * (930 / 1334);

    userbooktopten().then(res => {
      if (res.code == 200) {
        if (this.$store.state.top == res.data) {
          this.$store.state.top = this.$store.state.top;
          // console.log(1)
        }
        else {
           this.$store.state.top = res.data
            // console.log(2)
        }
      }
    });
  },
  data() {
    return {
      height: "",
      usernickname: "kin"
      // items: ""
    };
  },
  methods: {
    end() {
      var height = this.height;
      var oheight = this.height - 25;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  console.log(scrollTop)
      if (scrollTop <= oheight + 41 && scrollTop > oheight - 21) {
        document.documentElement.scrollTop = oheight - 21;
        document.body.scrollTop = oheight - 21;
      } else if (scrollTop >= oheight + 41 && scrollTop < height + 145) {
        document.documentElement.scrollTop = height + 145;
        document.body.scrollTop = height + 145;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: px2rem(36) px2rem(30) 0px px2rem(30);

  header {
    height: px2rem(48);
    line-height: px2rem(48);
    border-bottom: 2px solid #5DB8E9;
    margin-bottom: px2rem(20);

    p {
      font: px2rem(24) '微软雅黑';
      color: #5DB8E9;
    }
  }
}

.item {
  margin-bottom: px2rem(44);
  box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137);
  border-radius: 20px;

  img {
    display: block;
  }

  position: relative;

  // height 386px
  .bg {
    width: 100%;
    border-radius: 20px;
  }

  .tab {
    // width: px2rem(320);
    padding-right: px2rem(46);
    height: px2rem(88);
    position: absolute;
    top: px2rem(-4);
    left: px2rem(-2);
    background: url('./img/ZY-009.png') no-repeat 100% 100%;
    background-size: 100% 100%;
  }

  .heart {
    width: px2rem(36);
    position: relative;
    top: 0.26rem;
    // left: 0.73rem;
    margin-top: px2rem(6);
    margin-left: px2rem(27);
    display: inline-block;
  }

  p {
    margin-left: px2rem(12);
    // position: relative;
    // top: 0.29rem;
    // left: 0.6rem;
    // width: px2rem(386);
    // text-align: left;
    font: px2rem(24) '微软雅黑';
    color: #5A4030;
    display: inline-block;
  }
}
</style>

