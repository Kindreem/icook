<template>
  <div class="all"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check="false"
  infinite-scroll-distance="10">
    <div v-for="(item,index) in cooklist" :key="index">
      <div :class="item.booktype==1?'o_ban':'p_ban'">
        <router-link :to="item.booktype==1?'O_recipe/'+item.id:'U_menu/'+item.id">
        <section class="p_top">
          <!-- <img :src="item.img" alt=""> -->
          <div class="aimg"><img :src="item.img" alt=""></div>
          <!-- <p>TOP{{$store.state.i++}}</p> -->
        </section>
        <section :class="item.booktype==1?'o_bot':'p_bot'">
          <div class="head"><img :src="item.fkphoto" alt=""><h4>{{item.fknickname}}</h4></div>
          <div class="icon"><img :src="item.icon1" alt=""><img :src="item.icon2" alt=""></div>
          <div class="good"><img src="./img/ZY-012.png" alt=""><h4>{{item.star}}</h4></div>
          <h4>{{item.name}}</h4>
          <!-- <div class="save"><img src="./img/ZY-042.png" alt=""></div> -->
        </section>
        </router-link>
      </div>
    </div>
    <li class="more_loading" v-show="!queryLoading">
      <mt-spinner type="snake" color="#ccc" :size="70" v-show="loading&&!allLoaded"></mt-spinner>
      <span class="allload" v-show="allLoaded">已全部加载</span>
    </li>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { searchbook } from "@/api";
export default {
  data() {
    return {
      cooklist: "",
      pagesize: 5, //页数
      loading: false,
      queryLoading: false,
      allLoaded: false,
      num: 1,
      value: "",
      // i:1,
      top: false,
      utop: true
    };
  },
  computed: mapGetters({
    list: "getlist"
  }),
  created() {
    // console.log(this.$store.state.items)
    this.cooklist = this.$store.state.items;
    // this.i=this.$store.state.i
  },
  methods: {
    loadMore() {
      //  if(this.allLoaded){
      //   this.loading = true;
      //   return;
      //   }
      //  if(this.queryLoading){
      //   return;
      //   }
      // this.loading = !this.queryLoading;
      this.loading = true;
      setTimeout(() => {
        this.size = this.$store.state.size;
        this.value = this.$store.state.val;
        console.log(this.value);
        // this.size+=5
        this.num++;
        // console.log(this.num)
        // this.$store.commit('setsize',this.pagesize)
        searchbook(this.value, this.num, 5,this.$store.state.searchsort).then(res => {
          // this.cooklist= res.data
          if (res.code == 200) {
            this.allLoaded = false;
            //  console.log(res.data)
            this.cooklist = this.cooklist.concat(res.data);
            this.$store.commit("setlist", this.cooklist);
          } else {
            //  this.allLoaded = false
            this.num = 1;
            this.allLoaded = true;
            return false;
          }
        });
        this.loading = false;
      }, 2500);
    }
  },
  watch: {
    list: {
      handler: function(val, oldVal) {
        this.cooklist = val;
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: px2rem(36) px2rem(30) 0px;

  >>> .mint-spinner-snake {
    margin: 0 auto;
  }

  .allload {
    margin-top: px2rem(-10);
    font-size: px2rem(28);
    display: block;
    text-align: center;
  }

  a {
    display: inline-block;
    height: px2rem(690*9/16);
    width: 100%;
  }

  .p_ban {
    margin-bottom: px2rem(40);
    position: relative;
    height: px2rem(470);
    box-shadow: 12px 12px 12px rgba(204, 204, 204, 0.4);
    border-radius: 20px;
    // background: url('./img/右上角.png') no-repeat 100% 0;
    // background-size: px2rem(83);

    h4 {
      color: #666;
    }

    // p {
    //   font: px2rem(24) Arail;
    //   color: #fff;
    //   position: absolute;
    //   top: px2rem(17);
    //   right: px2rem(-2);
    //   transform: rotate(45deg);
    // }
  }

  .o_ban {
    margin-bottom: px2rem(40);
    position: relative;
    height: px2rem(470);
    box-shadow: 12px 12px 12px rgba(204, 204, 204, 0.4);
    border-radius: 20px;
    // background: #5DB8E9;
    h4 {
      color: #666;
    }
  }
}

.p_top {
  .aimg {
    img{
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      width: 100%;
      height: px2rem(690*9/16);
    }
  }

  // .o-imgs {
  //   border-radius: 20px;
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-70%);
  //   left: px2rem(30);
  //   width: px2rem(144);
  //   height: px2rem(144);
  //   background-repeat: no-repeat;
  //   background-size: px2rem(140) px2rem(140);
  // }

  h4 {
    font: px2rem(28) Arail;
    position: absolute;
    top: px2rem(72);
    left: px2rem(186);
  }
}

.p_bot {
  height px2rem(82)
  .good {
    position: absolute;
    bottom: px2rem(22);
    right: px2rem(300);

    img {
      width: px2rem(26);
    }

    h4 {
      display: inline-block;
      font: px2rem(22) Arail;
      // color #666
      position: relative;
      top: -5px;
      left: 5px;
    }
  }
  >h4{
    position: absolute;
    bottom: px2rem(22);
    right: px2rem(20);
    // display: inline-block;
    font-size px2rem(24)

  }
}

.o_bot {
  height px2rem(82)
  .good {
    display: none;
  }
  >h4{
    // position: absolute;
    // bottom: px2rem(26);
    // right: px2rem(20);
    // // display: inline-block;
    // font-size px2rem(26);
    display none
  }
}

.head {
  position: absolute;
  bottom: px2rem(12);
  left: px2rem(20);
  float: left;

  img {
    width: px2rem(48);
    border-radius: 50%;
  }

  h4 {
    display: inline-block;
    font: px2rem(26) Arail;
    position: relative;
    top: px2rem(-14);
    left: px2rem(10);
  }
}

.icon {
  // display inline
  float: left;
  position: relative;
  bottom: px2rem(-176);
  left: px2rem(56);

  img {
    width: px2rem(36);
    margin-right: px2rem(10);
  }
}
</style>
