<template>
  <div class="tow">
      <ul class="imgs"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="10">
          <li v-for="(item,index) in imgs" :key="index">
       <router-link :to="'/O_recipe/'+item.cookbookid">
              <img :src="item.cbthumbimg" alt="" ref="imgwidth">
        </router-link>
          </li>
        <li class="more_loading" v-show="!queryLoading">
        <mt-spinner type="snake" color="#ccc" :size="70" v-show="loading&&!allLoaded"></mt-spinner>
        <span class="allload" v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
  </div>
</template>

<script>
import { getcooklist } from "@/api";
export default {
  data() {
    return {
      imgheight: "",
      imgs: "",
      num: 1, //页数
      pagesize: 14, //条数
      loading: false,
      queryLoading: false,
      allLoaded: false,
      id: ""
    };
  },
  mounted() {
    //   this.imgheight =this.$refs.$el.clientWidth
    this.id = this.$route.params.id;
    if (this.$store.state.tow == "") {
      getcooklist(this.id, 1, this.pagesize).then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.imgs = res.data;
          this.$store.commit("settow", this.imgs);
        }
      });
    }else {
       this.imgs= this.$store.state.tow
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        // this.size+=5
        this.$store.state.num2++;
        // console.log(this.num)
        // this.$store.commit('setsize',this.pagesize)
        if (!this.allLoaded) {
          getcooklist(this.id, this.$store.state.num2, this.pagesize).then(res => {
            // this.cooklist= res.data
            if (res.code == 200) {
              this.allLoaded = false;
              //  console.log(res.data)
              this.imgs = this.imgs.concat(res.data);
              this.$store.commit("settow", this.imgs);
            } else {
              //  this.allLoaded = false
              // this.num = 1;
              this.allLoaded = true;
            }
          });
        }
        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/hotcss/px2rem.scss";
.tow {
  .more_loading {
    width: 100% !important;
    margin: px2rem(10) auto !important;
    padding-right:px2rem(15) ;
    // padding: 0 !important;
    /deep/ .mint-spinner-snake {
      margin: 0 auto;
    }
    .allload {
      margin-top: px2rem(-10);
      font-size: px2rem(14);
      display: block;
      text-align: center;
    }
  }
  .imgs {
    li {
      list-style: none;
      margin-bottom: px2rem(10);
      float: left;
      width: 48%;
      img {
        width: 100%;
        display: block;
      }
    }
    li:nth-child(odd) {
      margin-right: px2rem(10);
    }
  }
}
</style>
