<template>
  <div class="all">
    <div v-for="(item,index) in items" :key="index">
      <div :class="item.seen?'o_ban':'p_ban'">
        <router-link to="U_menu">
        <section class="p_top">
          <img :src="item.img" alt="">
          <h4>{{item.title}}</h4>
          <p>{{item.top}}</p>
        </section>
        <section :class="item.seen?'o_bot':'p_bot'">
          <div class="head"><img :src="item.src" alt=""><h4>{{item.name}}</h4></div>
          <div class="icon"><img :src="item.icon1" alt=""><img :src="item.icon2" alt=""></div>
          <div class="good"><img src="./img/ZY-012.png" alt=""><h4>{{item.good}}</h4></div>
          <!-- <div class="save"><img src="./img/ZY-042.png" alt=""></div> -->
        </section>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
         {
          title: '经典油焖大虾',
          img: require('../../common/img/links/1-017.png'),
          top: 'TOP1',
          src: require('./img/head/TX (1).png'),
          name: '什么名',
          icon1: require('../../common/img/36X36/资源 101徽.png'),
          icon2: require('../../common/img/36X36/资源 51鲁.png'),
          good: "9898"
        },{
          title: '经典油焖大虾',
          img: require('../../common/img/links/1-017.png'),
          top: 'TOP2',
          src: require('./img/head/TX (2).png'),
          name: '什么名',
          icon1: require('../../common/img/川派徽章/6川派大师.png'),
          icon2: require('../../common/img/川派徽章/8川派厨神.png'),
          good: "9898"
        },{
          title: '经典油焖大虾',
          img: require('../../common/img/links/1-017.png'),
          top: 'TOP3',
          src: require('./img/head/TX (3).png'),
          name: '什么名',
          icon1: require('../../common/img/川派徽章/6川派大师.png'),
          icon2: require('../../common/img/川派徽章/8川派厨神.png'),
          good: "9898"
        },{
          title: '经典油焖大虾',
          img: require('../../common/img/links/1-017.png'),
          top: 'TOP4',
          src: require('./img/head/TX (4).png'),
          name: '什么名',
          icon1: require('../../common/img/川派徽章/6川派大师.png'),
          icon2: require('../../common/img/川派徽章/8川派厨神.png'),
          good: "9898"
        },{
          title: '超级油焖大虾',
          img: require('../../common/img/links/1-017.png'),
          good: '9898',
          name: '官方菜谱 ICOOK运营团队',
          src: require('./img/1-025(官方菜头像).png'),
          seen: true,
        },
      ],
      lists: [
         {
          seen: true,
          o_title: '经典油焖大虾',
          bg: require('./img/帽子.png'),
          o_good: '9898'
        },
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 36px 30px 0px
  a {
    display inline-block
    height px2rem(238)
    width 100%
  }
  .p_ban {
    margin-bottom 40px
    position relative
    height px2rem(238)
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    background url('./img/右上角.png') no-repeat 100% 0
    background-size px2rem(83)
    h4{
      color #666
    }
  }
  .o_ban {
    margin-bottom 40px
    position relative
    height px2rem(238)
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    background #5DB8E9
    h4 {
      color #fff
    }
  }
  // .o_ban {
  //   margin-bottom px2rem(40)
  //   position relative
  //   height px2rem(238)
  //   box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  //   border-radius 20px
  //   background #5DB8E9
  //   .pic {
  //    height px2rem(192)
  //    width px2rem(204)
  //    text-align center
  //    position absolute
  //    top px2rem(20)
  //    left px2rem(20)
  //    background #fff
  //    border-radius 20px
  //    img {
  //     margin-top px2rem(42)
  //     width px2rem(108)
  //     }
  //   }
  //   .otitle {
  //     font px2rem(28) Arail
  //     color #fff
  //     position absolute
  //     top px2rem(100)
  //     left px2rem(246)
  //   }
  // }
}
.p_top {
  img {
    border-radius 20px
    position absolute
    top px2rem(20)
    left px2rem(30)
    width px2rem(144)
  }
  h4 {
    font px2rem(28) Arail
    position absolute
    top px2rem(72)
    left px2rem(186)
  }
  p{
    font px2rem(24) Arail
    color #fff
    position absolute
    top px2rem(17)
    right px2rem(-2)
    transform rotate(45deg)
  }
}
.p_bot {
   height px2rem(238)
   background url('./img/ZY-042.png') no-repeat 96% 86%
   background-size px2rem(36) auto
}
.o_bot {
   height px2rem(238)
   background url('./img/ZY-042-1.png') no-repeat 96% 86%
   background-size px2rem(36) auto
}
.head {
  position relative
  bottom px2rem(-170)
  left px2rem(30)
  float left
  img {
    width px2rem(48)
  }
  h4 {
    display inline-block
    font px2rem(26) Arail
    position relative
    top px2rem(-14)
    left px2rem(10)
  }
}
.icon {
  // display inline
  float left
  position relative
  bottom px2rem(-176)
  left px2rem(56)
  img {
    width px2rem(36)
    margin-right px2rem(10)
  }
}
.good {
  position absolute
  bottom px2rem(25)
  right px2rem(168)
  img{
    width px2rem(24)
  }
  h4 {
    display inline-block
    font px2rem(22) Arail
    // color #666
    position relative
    top -5px
    left 10px
  }
}

</style>
