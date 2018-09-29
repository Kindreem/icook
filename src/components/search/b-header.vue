<template>
  <div class="all">
    <div class="top">
      <a @click="change1"><h4 :class="active?'cactive':''">点赞</h4></a>
      <a @click="change2"><h4 :class="active?'':'cactive'">最新</h4></a>
</div>
    <!-- <div class="bot">
       <section class="left" @click="DW">
         <img src="./img/ZY-030.png" alt="">
         <h3>定位</h3>
       </section>
       <section class="min">
         <x-address v-model="addressValue" raw-value :list="addressData" value-text-align="center" placeholder="请选择地址"></x-address>
       </section>
       <section class="right">
         <span>全区</span>
         <span>|</span>
         <span>好友</span>
       </section>
    </div>
    <div id="allmap"></div> -->
  </div>
</template>

<script>
import { XAddress, ChinaAddressV4Data } from "vux";
import gcoord from "gcoord";
import { searchbook } from "@/api";
// import BMap from 'BMap'
export default {
  components: {
    XAddress
  },
  data() {
    return {
      addressData: ChinaAddressV4Data,
      addressValue: ["", "", ""],
      position: "",
      active: true,
      psize: 5,
      list: '',
    };
  },
  methods: {
    // DW() {
    //   this.position();
    // },
    change1() {
      this.$store.state.searchsort = 1;
      this.active = true;

      this.$store.state.items = "";
      searchbook(this.$store.state.val, 1, this.psize,this.$store.state.searchsort).then(res => {
        this.list = res.data;
        this.$store.commit("setlist", this.list);
        // console.log(this.$store.state.val);
      });
    },
    change2() {
      this.$store.state.searchsort = 2;
      this.active = false;

      this.$store.state.items = "";
      searchbook(this.$store.state.val, 1, this.psize,this.$store.state.searchsort).then(res => {
        this.list = res.data;
        this.$store.commit("setlist", this.list);
        // console.log(this.$store.state.val);
      });
    }
  },
  created() {
    var _this = this;
    // this.active = true;
     if (this.$store.state.searchsort==1) {
       this.active = true;
     }else {
        this.active = false;
     }
    //  var map = new BMap.Map("allmap");
    //  var point = new BMap.Point(116.331398,39.897445);
    //   map.centerAndZoom(point,12);
    //   var geolocation = new BMap.Geolocation();
    //    geolocation.getCurrentPosition(function(r){
    //    if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //    var mk = new BMap.Marker(r.point);
    //    map.addOverlay(mk);
    //    map.panTo(r.point);
    //  alert('您的位置：'+r.point.lng+','+r.point.lat);

    //    var jinwei = gcoord.transform(
    //       [ r.point.lng, r.point.lat ],    // 经纬度坐标
    //       gcoord.WGS84,                 // 当前坐标系
    //       gcoord.BD09                   // 目标坐标系
    //       );
    //       // console.log( jinwei );
    //     map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //    // 创建地理编码实例
    //    var myGeo = new BMap.Geocoder();
    //    // 根据坐标得到地址描述
    //    myGeo.getLocation(new BMap.Point(jinwei[0],jinwei[1]), function(result){
    //   if (result){
    //      var addComp = result.addressComponents;
    //     //  console.log(result.addressComponents);
    //      _this.addressValue = [addComp.province,addComp.city,addComp.district]
    //    }
    //  });

    // }
    // else {
    //   alert('failed'+this.getStatus());
    // }
    // })


//dui
  //   this.position = function() {
  //     var map, geolocation;
  //     map = new AMap.Map("allmap", {
  //       resizeEnable: true
  //     });

  //     map.plugin("AMap.Geolocation", function() {
  //       geolocation = new AMap.Geolocation({
  //         // 是否使用高精度定位，默认：true
  //         enableHighAccuracy: true,
  //         // 设置定位超时时间，默认：无穷大
  //         timeout: 5000,
  //         // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
  //         buttonOffset: new AMap.Pixel(10, 20),
  //         //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
  //         zoomToAccuracy: true,
  //         //  定位按钮的排放位置,  RB表示右下
  //         buttonPosition: "RB"
  //       });
  //       map.addControl(geolocation);
  //       geolocation.getCurrentPosition();
  //       AMap.event.addListener(geolocation, "complete", onComplete);
  //       AMap.event.addListener(geolocation, "error", onError);
  //       // console.log(onComplete)
  //       // console.log(onError)

  //       function onComplete(data) {
  //         // data是具体的定位信息

  //         //  alert(data.position.getLng())
  //         var jinwei = gcoord.transform(
  //           [data.position.getLng(), data.position.getLat()], // 经纬度坐标
  //           gcoord.WGS84, // 当前坐标系
  //           gcoord.GCJ02 // 目标坐标系
  //         );
  //         //  alert( jinwei );

  //         AMap.plugin("AMap.Geocoder", function() {
  //           var geocoder = new AMap.Geocoder({
  //             // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
  //             // city: '010'
  //           });
  //           var lnglat = [jinwei[0], jinwei[1]];
  //           geocoder.getAddress(lnglat, function(status, result) {
  //             if (status === "complete" && result.info === "OK") {
  //               // result为对应的地理位置详细信息
  //               var addComp = result.regeocode.addressComponent;
  //               // alert(addComp.province)
  //               _this.addressValue = [
  //                 addComp.province,
  //                 addComp.city,
  //                 addComp.district
  //               ];
  //             }
  //           });
  //         });
  //       }

  //       function onError(data) {
  //         // 定位出错
  //         // console.log(data)
  //         // alert(data)
  //         alert("定位失败，请手动输入。");
  //       }
  //     });
  //   };
  //   this.position();
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin px2rem(40) px2rem(30) 0px
  .top {
    height px2rem(62)
    padding-top px2rem(14)
    border-top 1px solid #ccc
    border-bottom 1px solid #ccc
    display flex
    justify-content space-around
    padding-left 20px
    padding-right 20px
    a {
      display block
      h4 {
        height px2rem(60)
        line-height px2rem(60)
        font px2rem(24) Arail
        color #666
      }
    }
  }
  .cactive {
    color #6CBEE8 !important
  }
  .bot {
    height px2rem(66)
    font px2rem(24) Arail
    color #999
    border-bottom 1px solid #ccc
    display flex
    justify-content space-between
    .left {
      line-height px2rem(66)
      img {
        position relative
        top 10px
        width px2rem(36)
      }
      h3 {
        display inline-block
        color #6CBEE8
      }
    }
    .min {
      line-height px2rem(66)
    }
    .right {
      line-height px2rem(66)
    }
  }
}
>>>.scroller-item {
  font-size 50px !important
}
</style>

<style lang="stylus">
@import '../../assets/px2rem.styl'
.vux-popup-header-left {
  font-size px2rem(28)
}
.vux-popup-header-right {
  font-size px2rem(32)
  color #5DB8E9 !important
}
.scroller-item {
  font-size px2rem(30) !important
  height px2rem(46) !important
  line-height px2rem(46) !important
}
.scroller-item-selected {
  font-size px2rem(30) !important
  height px2rem(46) !important
  line-height px2rem(46) !important
}
.vux-picker-item {
  // height 600px !important
}
.scroller-component {
  height px2rem(500) !important
}
.scroller-mask {
background-size 102% px2rem(228) !important
bottom 0px !important

height 100% !important
}
.scroller-indicator {
  height px2rem(46) !important//修改需刷新
  top px2rem(227) !important
}
.vux-popup-header {
  height px2rem(56) !important
  line-height px2rem(56) !important
}
// #allmap {
//   height 100px
//   width 100px
// }
</style>


