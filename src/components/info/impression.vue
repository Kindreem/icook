<template>
  <div>

    <group title="默认格式">
      <datetime
        v-model="value1"
        @on-change="change"
        title="哈哈哈"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"></datetime>
    </group>

   
   
    <!-- <group :title="$t('Default format: YYYY-MM-DD')">
      <datetime
        :order-map="{
          year: 3,
          month: 2,
          day: 1
        }"
        v-model="value1"
        @on-change="change"
        title="customize column order"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"></datetime>
    </group> -->


  </div>
</template>


<script>
import { Datetime, Group, XButton } from 'vux'

export default {
  components: {
    Datetime,
    Group,
    XButton
  },
  data () {
    return {
      noonValue: '2018-04-13 PM',
      readonly: true,
      minuteListValue: '2017-06-12 09:00',
      hourListValue: '2017-06-12 09:00',
      format: 'YYYY-MM-DD HH:mm',
      value1: '2015-11-12',
      valueReadonly: '2015-11-12',
      value2: '',
      value3: '',
      value3_1: '',
      value4: '',
      value5: '',
      value6: '2016-08-18',
      value7: '',
      value8: '',
      limitHourValue: '',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      },
      value9: '',
      visibility: false,
      computeHoursValue: '',
      computeDaysValue: '',
      computeHoursFunction (date, isToday, generateRange) {
        if (isToday) {
          return generateRange(new Date().getHours(), 23)
        } else {
          return generateRange(0, 23)
        }
      },
      computeDaysFunction (options, generateRange) {
        return [options.month] // if current month is n, days are [n]
      },
      onlySetEndDate: '2017-10-11',
      onlySetEndDateValue: ''
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
    showPlugin () {
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH',
        value: '2017-05-20 18',
        onConfirm (val) {
          console.log('plugin confirm', val)
        },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        }
      })
    },
    toggleFormat () {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else if (this.format === 'YYYY-MM-DD HH:mm') {
        this.format = 'YYYY-MM-DD'
      }
    },
    change (value) {
      console.log('change', value)
    },
    clearValue (value) {
      this.value6 = ''
    },
    clearValue8 (value) {
      this.value8 = ''
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    }
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
.dp-container{
        width: 86%!important;
        left: 7%!important;
        height: px2rem(200);
        margin-bottom:px2rem(120);
        transform: none!important;
        border-radius: 20px;
        overflow: hidden;
    /deep/ .dp-content{
        margin-top: px2rem(20);
        .scroller-indicator{
            height: px2rem(30);
        }
        .scroller-item{
            height: px2rem(25);
            font-size: px2rem(18);
        }
    }
    /deep/ .dp-header{
            width: 80%;
            left: 10%;
            position: absolute;
            bottom:px2rem(10);
        .dp-item{
            font-size:  px2rem(20);
        }
    }
}
</style>