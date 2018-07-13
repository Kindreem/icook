<template>
  <div class="all">
    <section v-for="(item,index) in items" :key="index">
      <div class="top">
        <img class="bg" :src="item.bg" alt="">
        <img class="tag" src="./img/ZY-021.png" alt="">
        <img class="heart" src="./img/ZY-043.png" alt="">
        <h3>{{item.title}}</h3>
      </div>
      <div class="bot">
        <p>{{item.content}}</p>
      </div>
    </section>

  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
         {
          title: '步骤一',
          bg: require('../../common/img/links/1-006.jpg'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet'
        },{
          title: '步骤二',
          bg: require('../../common/img/links/1-006.jpg'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet'
        },{
          title: '步骤三',
          bg: require('../../common/img/links/1-006.jpg'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet'
        },{
          title: '步骤四',
          bg: require('../../common/img/links/1-006.jpg'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet'
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0 px2rem(30)
  section {
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    margin-bottom px2rem(40)
    .top {
      position relative
      .bg {
        width 100%
        border-top-left-radius 20px
        border-top-right-radius 20px
      }
      .heart {
        width px2rem(36)
        position absolute
        top px2rem(12)
        left px2rem(36)
      }
      .tag {
        width px2rem(234)
        position absolute
        top px2rem(-2)
        left 0px
      }
      h3 {
        position absolute
        top px2rem(12)
        left 0
        width px2rem(250)
        text-align center
        font px2rem(24) Arail
        color #5A4030
      }
    }
    .bot {
      p {
        font px2rem(24) Arail
        color #666
        line-height px2rem(38)
        padding px2rem(20) px2rem(20) px2rem(28)
      }
    }
  }
}
</style>
