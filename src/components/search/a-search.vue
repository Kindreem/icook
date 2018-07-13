<template>
  <div class="all">
    <section class="top">
      <Input v-model="value" placeholder="输入菜系或菜谱" clearable @on-enter="handleAdd"/>
      <img class="left" src="./img/DR-005.png" alt="" @click="back">
      <img class="right" src="./img/ZY-028.png" alt="">
    </section>
    <section class="bot">
      <div class="title">
        <img class="tag" src="./img/ZY-021.png" alt="">
        <img class="heart" src="./img/ZY-043.png" alt="">
        <h3>历史搜索</h3>
      </div>
      <div class="content">
        <Tag v-for="(item,index) in items" :key="item" :name="index" closable @on-close="handleClose" @click.native="handleshow(item)">{{item}}</Tag>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              items: ['麻辣鸡丝','水煮肉','叉烧肉'],
              value: ''
            }
        },
        methods: {
            back(){
            this.$router.go(-1);//返回上一层
            },
            handleshow(item) {
              this.value = item
            },
            handleClose (event, name) {
              this.items.splice(name, 1);
            },
            handleAdd () {
              for(var i=0;i<this.items.length;i++) {
                if(this.value == this.items[i]) {
                    return false
                }
               }
              this.items.push(this.value)
            }

        }
    }
</script>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';
.all {
  margin 0 30px
  .top {
    text-align center
    height 100px
    line-height 100px
    .left {
      float left
      margin-top 30px
    }
    .right {
      float right
      margin-top 22px
    }
    .ivu-input-wrapper {
      width 78%
    }
  }
  .bot {
    margin-top 30px
    border-radius 20px
    box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
    div {
      position relative
      .heart {
        position absolute
        top 0.32rem
        left 0.75rem
      }
      h3 {
        position absolute
        top 0.32rem
        left 1.65rem
        font 24px Arial
        color #5A4030
      }
    }
    .content {
      margin-left 30px
      padding-bottom 30px
    }
      >>>.ivu-tag {
        height px2rem(48)
        width px2rem(140)
        margin-right 10px
        margin-bottom 16px
        background #5DB8E9
        font px2rem(20) Arail
        text-align center
        border-radius 20px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      }
      >>>.ivu-tag-text {
        line-height px2rem(48)
        color #fff
        border-radius 20px
      }
      >>>.ivu-icon {
        font-size px2rem(26)
        position absolute
        top px2rem(12)
        right px2rem(12)
        color #fff
        font-weight 900
      }
  }
}
>>>.ivu-input {
  height px2rem(54) !important
  border-color #5DB8E9
  font px2rem(26) Arail
  text-align center
  border-radius 20px
}
>>>.ivu-input-icon {
  line-height px2rem(56)
  font-size px2rem(35)
  margin-right px2rem(14)
}
</style>
