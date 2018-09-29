<template>
  <div class="all">
    <header>
      <img src="../public/img/DR-005.png" alt="" @click="back">
      <h3>设置</h3>
    </header>
    <section class="list">
      <ul>
        <router-link to="/user"><li>个人中心</li></router-link>
        <li @click="show=!show">语音人声</li>
      </ul>
      <div>
         <button>注销</button>
      </div>
    </section>
    <transition name="slide-fade">
    <section class="mask" v-show="show">
       <h4>请选择语音人声</h4>
       <ul>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
         <li>人声选项语音人声</li>
       </ul>
    </section>
    </transition>
  </div>
</template>

<script>
import { faction } from "@/api";
export default {
  data() {
    return {
      show: false
    };
  },
  created() {},
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
  margin: px2rem(12) px2rem(32);
}

header {
  height: px2rem(88);
  line-height: px2rem(88);

  img {
    margin-top: px2rem(18);
    float: left;
    width: px2rem(48);
  }

  h3 {
    text-align: center;
    font-size: px2rem(26);
    color: #5DB8E9;
  }
}

.list {
  margin-top: 20px;
  padding-bottom 50px
  height: 100%;
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);

  ul {
    li {
      padding: 0 20px;
      font-size: 26px;
      height: 90px;
      line-height: 90px;
      border-bottom: 1px solid #bbb;
    }
  }
  div {
    margin-top 160px
    text-align center
  }
  button {
    text-align: center;
    height: 80px;
    width: 560px;
    border-radius: 20px;
    box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);
    outline: none;
    border: none;
    background-color: #fff;
    font-size 30px
    color #888
  }
}
.mask {
  position absolute
  left 32px
  right 32px
  bottom 70px
  font-size 26px
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);
  h4 {
    border-bottom 1px solid #bbb
    height 90px
    line-height 90px
    text-align center

  }
  ul {
    margin 20px 0
    text-align center
    li {
      color #666
      line-height 56px
    }
  }

}
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  transform: translateY(40px);
  opacity: 0;
}

</style>


