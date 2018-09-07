  <template>
    <div class="dtime">
        <input type="text" placeholder="输入您的年龄" class="age" readonly="readonly" v-model="age" @focus="openPicker">
             <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
                :endDate="endDate"
                >
                </mt-datetime-picker>
    </div>
  </template> 
<script>
import moment from "moment";
export default {
    data(){
        return{
            endDate: new Date(),
            startDate: new Date('1970-1-1'),
            age: ""
        }
    },
    methods:{
         openPicker() {
            this.$refs.picker.open();
          },
         handleConfirm(data) {
            let date = moment(data).format("YYYY-­­­­­MM-DD");
            this.age = date;
          },
    }
}
</script>

<style lang="scss">
@import "@/assets/hotcss/px2rem.scss";
  .mint-popup {
    top: 50%;
    width: 85%;
    left: 8%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    height: px2rem(200);
    transform: none;
    .picker-slot-wrapper {
      margin-top: px2rem(-15);
    }
    .picker-items {
      height: px2rem(100);
      margin: px2rem(25) 0;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      .picker-item {
        font-size: px2rem(16);
        // height: 60px!important;
        // line-height: 60px!important;
        // transform: perspective(600px) rotateY(20deg);
        transform: rotate3d(1, 0, 0, 50deg) translate3d(0px, 0px, px2rem(2));
      }
      .picker-item.picker-selected {    
        height: 70px!important;
        line-height: 70px!important;
        font-size: px2rem(16);
        transform: rotate3d(1, 0, 0, 0) translate3d(0px, 0px, px2rem(0));
      }
    }
    .picker-toolbar {
      position: absolute;
      height: px2rem(25);
      bottom: px2rem(12);
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        font-size: px2rem(14);
        display: inline-block;
        margin: 0 px2rem(20);
        width: px2rem(85);
        border: 1px solid #999;
        border-radius: px2rem(3);
        line-height: px2rem(25);
        color: #999;
      }
      span:last-child {
        color: #199ed8;
        border: 1px solid #199ed8;
      }
    }
  }
</style>
