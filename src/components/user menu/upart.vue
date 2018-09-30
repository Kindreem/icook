<template>
  <div class="all">
    <div class="ban">
      <section class="top"><h1>{{userlist.ubname}}</h1><img @click="save" :src="saveimg" alt=""></section>
      <section class="bot">
        <h4>食材</h4>
        <div class="con">
          <ul>
            <li v-for="(item,index) in userlist.userFoodDtos" :key="index"><h4>{{item.ubfname}}</h4><h4>{{item.ubfdescription}}</h4></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { bookcollect, bookuncollect } from "@/api";
export default {
  props: ["userlist"],
  data() {
    return {
      saveimg: ""
    };
  },
  created() {
      let ubid = this.$route.params.id;
      let userid = localStorage.getItem("userid");
      bookcollect(ubid, userid).then(res => {
        if (res.code == 200) {
          this.saveimg = require("./img/1-020-1.png");
          bookuncollect(ubid, userid).then(res => {
          })
        }else{
          this.saveimg = require("./img/ZY-041.png");
        }
      })
  },
  methods: {
    save() {
      let ubid = this.$route.params.id;
      let userid = localStorage.getItem("userid");
      bookcollect(ubid, userid).then(res => {
        // console.log(res);
        if (res.code == 200) {
          console.log(res);
          this.saveimg = require("./img/ZY-041.png");
        } else {
          bookuncollect(ubid, userid).then(res => {
            if (res.code == 200) {
              console.log(res);
              this.saveimg = require("./img/1-020-1.png");
            }
          });
        }
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(30) px2rem(80);

  .top {
    height: px2rem(80);
    background: #5DB8E9;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;

    h1 {
      font-size: px2rem(40);
      color: #fff;
      line-height: px2rem(80);
    }

    img {
      position: absolute;
      top: px2rem(-20);
      right: px2rem(40);
      width: px2rem(72);
    }
  }

  .bot {
    >h4 {
      text-align: center;
      font-size: px2rem(30);
      color: #5DB8E9;
      margin-bottom: px2rem(20);
    }

    .con {
      ul {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        border-top: 0.5px solid #5DB8E9;
        border-bottom: 0.02px solid #ccc;
        margin: 0 auto;

        // text-align center
        li {
          line-height: px2rem(60);
          border-bottom: 0.02px solid #ccc;
          // height 50px
          // margin 0 auto
          padding 0 px2rem(16)
          justify-content: space-between;
          width: 50%;
          display: flex;

          h4 {
            // justify-content space-between !important
            font-size: px2rem(26);
          }
        }
      }

      h4:nth-child(1) {
        // text-align left
      }

      h4:nth-child(2) {
        // text-align right
      }
    }

    padding: px2rem(20) px2rem(0) px2rem(50);

    img {
      width: 100%;
    }
  }
}

.ban {
  box-shadow: 10px 10px 5px rgba(204, 204, 204, 0.4);
  border-radius: 20px;
}

ul::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  height: 100%;
  border-left: 0.02px solid #ccc;
}
</style>

