<template>
  <div class="all">
    <div class="top"><img src="../../common/img/links/1-001.jpg" alt=""></div>
    <div class="ban">
      <div class="b_top">
        <h1>快手香辣牛蛙</h1>
        <router-link to="home" id="sound"><img src="./img/ZY-022.png" alt=""></router-link>
        <router-link to="flow" id="step"><img src="./img/ZY-023.png" alt=""></router-link>
      </div>
      <div class="b_bot">
        <div>
          <section>
            <div class="title"><img class="bg" src="./img/ZY-021.png" alt=""><img class="heart" src="./img/ZY-043.png" alt=""><h3>主料</h3></div>
            <div class="content" v-for="(main,index) in mains" :key="index">
              <ul>
                <li><p>{{main.title}}</p><p>{{main.amount}}</p></li>
              </ul>
            </div>
          </section>
          <section>
            <div class="title"><img class="bg" src="./img/ZY-021.png" alt=""><img class="heart" src="./img/ZY-043.png" alt=""><h3>配料</h3></div>
            <div class="content" v-for="(fix,index) in fixs" :key="index">
              <ul>
                <li><p>{{fix.title}}</p><p>{{fix.amount}}</p></li>
              </ul>
            </div>
          </section>
          <section>
            <div class="title"><img class="bg" src="./img/ZY-021.png" alt=""><img class="heart" src="./img/ZY-043.png" alt=""><h3>调料</h3></div>
            <div class="content" v-for="(spice,index) in spices" :key="index">
              <ul>
                <li><p>{{spice.title}}</p><p>{{spice.amount}}</p></li>
              </ul>
            </div>
          </section>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mains: [
        {
          title: '牛蛙',
          amount: '4只约750克'
        }
      ],
      fixs: [
        {
          title: '洋葱圈',
          amount: '约750克'
        }, {
          title: '小米辣椒',
          amount: '4约750克'
        }, {
          title: '花椒',
          amount: '4只约750克'
        }, {
          title: '姜',
          amount: '4只约750克'
        },
      ],
      spices: [
        {
          title: '生抽',
          amount: '750克'
        },{
          title: '料酒',
          amount: '4约750克'
        },{
          title: '糖',
          amount: '4只约750克'
        },{
          title: '盐',
          amount: '4只约750克'
        },{
          title: '胡椒粉',
          amount: '4只约750克'
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
  .top {
    img {
      width 100%
      border-radius 20px
      box-shadow 10px 10px 5px rgba(204, 204, 204, 0.5)
    }
  }
  .ban {
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    border-radius 20px
    margin-bottom px2rem(40)
    .b_top {
      height px2rem(78)
      background #5DB8E9
      text-align center
      position relative
      margin-top px2rem(60)
      border-top-left-radius 20px
      border-top-right-radius 20px
      h1 {
        font px2rem(36) Arail
        line-height px2rem(78)
        color #fff
      }
      #sound {
        width px2rem(72)
        position absolute
        top -20px
        right 112px
      }
      #step {
        width px2rem(72)
        position absolute
        top -20px
        right 20px
      }
    }
    .b_bot {
      div {
        section {
          position relative
          margin-top px2rem(4)
          padding-bottom px2rem(32)
          .title {
            .bg {
              width px2rem(240)
            }
            .heart {
              width px2rem(36)
              position absolute
              top px2rem(16)
              left px2rem(38)
            }
            h3 {
              font px2rem(24) Arial
              color #5A4030
              width px2rem(240)
              text-align center
              height px2rem(66)
              line-height px2rem(66)
              position absolute
              top 0px
              left 0px
            }
          }
          .content {
            ul {
              margin 0px px2rem(30)
              font px2rem(24) Arial
              color #666
              line-height px2rem(36)
              li {
                display flex
                justify-content space-between
              }
            }
          }

        }
      }


    }
  }
}
</style>
