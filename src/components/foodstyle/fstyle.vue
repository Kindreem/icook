<template>
  <div class="all">
    <header>
      <img src="../public/img/DR-005.png" alt="" @click="back">
      <h3>烹饪菜系</h3>
    </header>
    <div class="genre">
      <ul class="meet">
                <li v-for="(item,id) in data" :key="id">
                   <img :src="item.factionsimg" @click="open(item.factionsid)">
                   <p>{{item.factionsname}}派</p>
               </li>
           </ul>
    </div>
  </div>
</template>
<script>
import { faction } from "@/api";
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    let userid = localStorage.getItem("userid");
    faction(userid).then(res => {
      this.data = res.data;
      //  console.log(res)
    });
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(32);
}

header {
  height: px2rem(88);
  line-height: px2rem(88);

  img {
    margin-top: px2rem(22);
    position absolute
    width: px2rem(48);
  }

  h3 {
    text-align: center;
    font-size: px2rem(26);
    color: #5DB8E9;
  }
}

.genre {
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


