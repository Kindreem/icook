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
         <button @click="quiet">注销</button>
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
    },
    quiet() {
      localStorage.clear()
      this.$router.push({path: '/member'})
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
    line-height: px2rem(88);
    margin-top: px2rem(22);
    position absolute
    width: px2rem(48);
  }

  h3 {
    font-size px2rem(32)
    font-weight 300
    text-align: center;
    color: #199ed8;
  }
}

.list {
  margin-top: px2rem(20);
  padding-bottom px2rem(50)
  height: 100%;
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);

  ul {
    li {
      padding: 0 px2rem(20);
      font-size: px2rem(26);
      height: px2rem(90);
      line-height:px2rem(90);
      border-bottom: 1px solid #bbb;
    }
  }
  div {
    margin-top px2rem(160)
    text-align center
  }
  button {
    text-align: center;
    height: px2rem(80);
    width: px2rem(560);
    border-radius: 20px;
    box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);
    outline: none;
    border: none;
    background-color: #fff;
    font-size px2rem(30)
    color #888
  }
}
.mask {
  background-color #fff
  position absolute
  left px2rem(32)
  right px2rem(32)
  bottom px2rem(70)
  font-size px2rem(26)
  border-radius: 20px;
  box-shadow: 16px 16px 20px rgba(204, 204, 204, 0.349019607843137);
  h4 {
    border-bottom 1px solid #bbb
    height px2rem(90)
    line-height px2rem(90)
    text-align center

  }
  ul {
    margin px2rem(20) 0
    text-align center
    li {
      color #666
      line-height px2rem(56)
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


