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
  margin 0 30px
  section {
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    margin-bottom 40px
    .top {
      position relative
      .bg {
        width 100%
        border-top-left-radius 20px
        border-top-right-radius 20px
      }
      .heart {
        position absolute
        top 0.25rem
        left 0.75rem
      }
      .tag {
        position absolute
        top -2px
        left 0px
      }
      h3 {
        position absolute
        top 0.25rem
        left 0
        width 260px
        text-align center
        font 24px Arail
        color #5A4030
      }
    }
    .bot {
      p {
        font px2rem(24) Arail
        color #666
        line-height 38px
        padding 20px 20px 28px
      }
    }
  }
}
</style>
