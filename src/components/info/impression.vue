<template>
  <div class="imp">

      <datetime
        v-model="value1"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)">
      </datetime>


  </div>
</template>


<script>
import { Datetime } from 'vux'

export default {
  props: ["value1"],
  components: {
    Datetime,
  },
  data () {
    return {
      value1:'',
      noonValue: '2018-04-13 PM',
      readonly: true,
      format: 'YYYY-MM-DD HH:mm',
      value1: '2015-11-12',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
    }
  },
  methods: {
    log (str1, str2 = '') {
      console.log(str1, str2)
    },
    onConfirm (val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.value1)
    },
    // showPlugin () {
    //   this.$vux.datetime.show({
    //     cancelText: '取消',
    //     confirmText: '确定',
    //     format: 'YYYY-MM-DD HH',
    //     value: '2017-05-20 18',
    //     onConfirm (val) {
    //       console.log('plugin confirm', val)
    //     },
    //     onHide () {
    //       console.log('plugin hide')
    //     }
    //   })
    // },
    // toggleFormat () {
    //   if (this.format === 'YYYY-MM-DD') {
    //     this.format = 'YYYY-MM-DD HH:mm'
    //   } else if (this.format === 'YYYY-MM-DD HH:mm') {
    //     this.format = 'YYYY-MM-DD'
    //   }
    // },
    change (value) {
      console.log('change', value)
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/hotcss/px2rem.scss";
.center {
//   padding-top: 10px;
//   padding-left: 15px;
//   color: green;
}
.vux-datetime{
  span,p{
    font-size:  px2rem(15);
  }
}
.dp-container{
        width: 80%!important;
        left: 10%!important;
        height: px2rem(200);
        margin-bottom:px2rem(120);
        transform: none!important;
        border-radius: 20px;
        overflow: hidden;
    /deep/ .dp-content{
      .dp-item{
        height:  px2rem(160);
        margin-top: px2rem(14);
        .scroller-component{
          height: px2rem(120);
          position: relative;
        .scroller-mask {
            background-size:100% px2rem(50) !important;
            bottom :0px !important;
            // height:100% !important;
              }
          .scroller-indicator{
              height: px2rem(25);
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
          }
        }
        .scroller-item{
            height: px2rem(25)!important;
            line-height:  px2rem(20)!important;
            font-size: px2rem(20);
        }
        }
    }
    /deep/ .dp-header{
            width:80%;
            left: 10%;
            position: absolute!important;
            bottom:px2rem(10)!important;
        .dp-item{
            font-size:  px2rem(14);
            width: px2rem(85);
            border: 1px solid #999;
            border-radius: px2rem(3);
            height: px2rem(25);
            line-height: px2rem(25);
            color: #999;
            padding: 0;
            text-align: center;
        }
        .dp-item:nth-child(2){
          border: none;
           margin: 0 px2rem(30);
        }
        .dp-item:nth-child(3){
            color: #199ed8;
            border: 1px solid #199ed8;
        }
    }
}
</style>