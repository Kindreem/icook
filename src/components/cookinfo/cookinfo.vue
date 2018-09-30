<template>
  <div class="cookinfo">
    <div class="out">
     <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <div class="title">
                <p> {{id==1?'川':id==2?'鲁':id==3?'粤':id==4?'闽':id==5?'苏':id==6?'浙':id==7?'湘':id==8?'徽':'家常'}}菜</p>
            </div>
            <img src="./1.png" alt="" @click="tab">
      </header>
    </div>
      <div class="style">
           <router-view/>
      </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      istab: true,
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    backto() {
      // this.$router.go(-1);
      this.$router.push({ path: "/fstyle" });
    },
    tab() {
      if (this.istab == true) {
        this.$router.push({ path: "/tow/" + this.id });
      } else {
        this.$router.push({ path: "/one/" + this.id });
      }
      this.istab = !this.istab;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/hotcss/px2rem.scss";
.cookinfo {
  text-align: center;
  .out {
    height: px2rem(56);
    // padding-bottom: px2rem(30);
  }
  .header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: px2rem(56);
    background: #fff;
    text-align: left;
    position: relative;
    margin-bottom: px2rem(8);
    // padding-bottom: px2rem(30);
    .title {
      width: px2rem(80);
      position: absolute;
      text-align: center;
      top: px2rem(20);
      transform: translateX(-50%);
      left: 50%;
      p {
        white-space: nowrap;
        font-size: px2rem(14);
        color: #199ed8;
      }
    }
    div {
      padding: px2rem(5) px2rem(8);
    }
    img {
      margin-top: px2rem(20);
      margin-left: px2rem(10);
      width: px2rem(24);
      height: px2rem(24);
    }
    img:last-child {
      float: right;
      margin-right: px2rem(20);
    }
  }
  .style {
    margin: px2rem(20);
  }
}
</style>
