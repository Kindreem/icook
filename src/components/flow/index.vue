<template>
  <div class="menu">
    <sheader :value='value'/>
    <!-- <fready/> -->
    <div v-if="list==null?false:true">
     <div class="item" v-if="list">
      <div class="tit">PART1 食材准备</div>
      <div class="item1">
          <div class="top">
              <img src="./0.png">
              <p>食材</p>
          </div>
          <ul class="item-ul">
                <li v-for="(item,index) in list.sysBookFoodVOlist" :key="index">
                <p>{{item.foodname}}</p>{{item.weight?item.weight:item.description}}{{item.weight?item.unit:''}}{{item.weight?item.description:''}}
            </li>
          </ul>
      </div>
      <div class="item2">
           <div class="top">
              <img src="./0.png">
              <p>调料</p>
          </div>
          <ul class="item-ul">
             <li v-for="(item,index) in list.sysBookCondimentVOlist" :key="index">
                 <p>{{item.condimentname}}</p>{{item.weight?item.weight:item.description}}{{item.weight?item.unit:''}}{{item.weight?item.description:''}}
             </li>
          </ul>
      </div>
      <div class="item3" v-show="list.sysBookExcipientsVOlist">
           <div class="top">
              <img src="./0.png">
              <p>辅料</p>
          </div>
          <ul class="item-ul">
             <li v-for="(item,index) in list.sysBookExcipientsVOlist" :key="index">
                 <p>{{item.excipientsname}}</p>{{item.weight?item.weight:item.description}}{{item.weight?item.unit:''}}{{item.weight?item.description:''}}
             </li>
          </ul>
      </div>
    </div>
    <div class="item" v-if="list">
        <div class="tit">PART2 食材处理</div>
        <ul class="item3 item-ul">
          <li class="long" v-show="item.handlinglength==1?1:0" v-for="(item,index) in list.sysBookHandlingVOlist" :key="index">
                <p>{{item.name}}</p>{{item.handlingname}}
            </li>
            <li class="short" v-show="item.handlinglength==0?1:0" v-for="(item,index) in list.sysBookHandlingVOlist" :key="index">
                <p>{{item.name}}</p>{{item.handlingname}}
            </li>

             <!-- <li><p>五花肉</p>600克</li>  -->
        </ul>
    </div>
      <div class="item step"  v-if="list">
        <div class="tit">PART3 烹饪</div>
          <div class="top">
              <img src="./0.png">
              <p>{{value}}</p>
              <div class="top_step">
                  <span>步</span>
                  <span>骤</span>
              </div>
          </div>
              <ul>
                  <li v-for="(item,index) in list.sysBookCookingVOlist" :key="index">
                      <div class="left">
                          <img src="./8.png">
                          <p class="number">{{item.step}}</p>
                          <div class="wire">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                      </div>
                      <div class="right">
                         <p v-bind:style="{background:'rgb('+Math.floor(Math.random() * 200)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'}">{{item.description.split('$')[0]}}</p>
                         <img src="./9.png">
                         <div class="cen">
                            <div class="line">
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             </div>
                         </div>
                      </div>
                      <div class="text">
                          <p>{{item.description.split('$')[1]}}</p>
                      </div>
                  </li>
              </ul>
              <div class="achieve">烹饪完成</div>
      </div>
    <div class="item step"  v-if="show">
        <div class="tit">PART4 装盘</div>
          <div class="top">
              <img src="./0.png">
              <p>{{this.$store.state.cbname}}</p>
              <div class="top_step">
                  <span>步</span>
                  <span>骤</span>
              </div>
          </div>
              <ul>
                  <li v-for="(item,index) in list.sysBookTrayVOlist" :key="index">
                      <div class="left">
                          <img src="./8.png">
                          <p class="number">{{item.step}}</p>
                          <div class="wire">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                      </div>
                      <div class="right">
                         <p v-bind:style="{background:'rgb('+Math.floor(Math.random() * 200)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'}">
                             {{item.excipientsname}}</p>
                         <img src="./9.png">
                         <div class="cen">
                            <div class="line">
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                             </div>
                         </div>
                      </div>
                      <div class="text">
                          <p>{{item.description}}</p>
                      </div>
                  </li>
              </ul>
              <div class="achieve">装盘完成</div>
      </div>



    </div>
    <div v-else class="nodata">暂无分解,敬请期待</div>
  </div>
</template>

<script>
import sheader from "../public/header";
import { process } from "@/api";
// import fready from './f-ready'
export default {
  components: {
    sheader
    // fready,
  },
  data() {
    return {
      bookid: "", //菜谱id
      value: this.$store.state.cbname,
      step: [
        { id: 1, bg: "#E3CC6F", name: "起汤锅", tit: "锅中加入冷水" },
        {
          id: 2,
          bg: "#625739",
          name: "煮羊肉",
          tit: "将羊肉加入水中,并将水煮至沸腾"
        },
        {
          id: 3,
          bg: "#6A7B8B",
          name: "起清洗",
          tit: "将带有血沫的汤倒掉,把羊肉洗干净"
        },
        {
          id: 4,
          bg: "#8C6270",
          name: "加热水煮羊肉",
          tit: "加入热水羊肉锅中煮"
        },
        {
          id: 5,
          bg: "#B1250E",
          name: "盛出冷却",
          tit: "羊肉盛出冷却至室温羊汤备用"
        },
        { id: 6, bg: "#BCB6B6", name: "切片", tit: "羊肉冷却后切片羊肉片备用" }
      ],
      list: "",
      show: ""
    };
  },
  mounted() {
    this.bookid = this.$route.params.id;
    process(this.bookid).then(res => {
      // console.log(res)
      if (res.code == 200) {
        this.list = res.data;
        if (
          res.data.sysBookTrayVOlist == null ||
          res.data.sysBookTrayVOlist.length == 0
        ) {
          this.show = false;
        } else {
          this.show = true;
        }
        // console.log(this.show)
      } else if (res.code == 500) {
        this.list = res.data;
      }
      // console.log(res.data.sysBookTrayVOlist)
    });
    // r(index) {
    //   let r, g, b;
    //   r = Math.floor(Math.random() * 256);
    //   g = Math.floor(Math.random() * 256);
    //   b = Math.floor(Math.random() * 256);
    //   return "rgb(" + r + "," + g + "," + b + ")";
    //   // :style="{background:'rgb('+Math.floor(Math.random() * 220)+','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)+')'}"
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/hotcss/px2rem.scss";
.menu {
  width: 90%;
  margin: px2rem(20) auto;
  .nodata {
    width: 100%;
    text-align: center;
    font-size: px2rem(20);
    margin: px2rem(20) auto;
  }
  li {
    list-style: none;
    font-size: px2rem(14);
    margin-bottom: px2rem(15);
  }
  .all {
    margin: px2rem(-15) 0 px2rem(10) 0;
  }
  .item {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 8px 8px 4px 6px rgba(126, 122, 122, 0.1);
    margin-bottom: px2rem(5);
    .tit {
      background: url("./1.png") repeat-x;
      height: px2rem(40);
      line-height: px2rem(40);
      font-size: px2rem(16);
      color: #fff;
      padding-left: px2rem(15);
    }
    .top {
      position: relative;
      margin-top: px2rem(15);
      img {
        width: px2rem(120);
        height: px2rem(40);
      }
      p {
        width: 100%;
        height: px2rem(30);
        line-height: px2rem(30);
        top: px2rem(2);
        left: px2rem(30);
        padding-left: px2rem(25);
        position: absolute;
        font-size: px2rem(14);
        background: url("./titles.png") no-repeat center left;
        background-size: px2rem(20) px2rem(15);
      }
      .top_step {
        position: absolute;
        top: 0;
        right: px2rem(20);
        font-size: px2rem(16);
        color: #5cb8e7;
        span:last-child {
          margin-left: px2rem(15);
          margin-top: px2rem(-5);
          display: block;
          font-size: px2rem(15);
        }
      }
    }
    .item-ul {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
      align-items: center;
      li {
        width: 42%;
        // height: px2rem(60);
        margin: px2rem(10);
        background: url(./1.png);
        border-radius: px2rem(5);
        text-align: center;
        color: #fff;
        padding: px2rem(10);
        p {
        }
      }
    }
    .item2 li {
      background: url(./2.png);
    }
    // .item3 li {
    //   background: url(./3.png);
    // }
    .item3 .short {
      background: url(./3.png);
      width: 42%;
      // height: px2rem(60);
      margin: px2rem(10);
      border-radius: px2rem(5);
      text-align: center;
      color: #fff;
      padding: px2rem(10);
    }
    .item3 .long {
      width: 100%;
      flex-wrap: nowrap;
      padding: px2rem(10);
    }
  }
  .item.step {
    .top img {
      width: px2rem(180);
      margin-bottom: px2rem(10);
    }
  }
  .step li {
    width: 100%;
    margin: 0 auto;
    height: px2rem(72);
    display: flex;
    .left {
      position: relative;
      width: px2rem(50);
      margin-left: px2rem(20);
      img {
        width: px2rem(30);
        position: absolute;
        top: px2rem(2);
      }
      p {
        position: absolute;
        width: px2rem(16);
        height: px2rem(16);
        font-size: px2rem(16);
        top: px2rem(5);
        left: px2rem(6);
        text-align: center;
      }
      .wire {
        position: absolute;
        top: px2rem(31);
        left: px2rem(13);
        width: px2rem(15);
        height: px2rem(50);
        span {
          display: block;
          width: px2rem(3);
          height: px2rem(4);
          margin-bottom: px2rem(2);
          border-right: px2rem(2) dotted #199ed8;
        }
      }
    }
    .right {
      position: relative;
      width: px2rem(160);
      p {
        width: px2rem(80);
        height: px2rem(35);
        padding: 0 px2rem(10);
        text-align: center;
        border-radius: px2rem(8);
        background: skyblue;
        color: #fffffb;
        line-height: px2rem(18);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        position: absolute;
        width: px2rem(80);
        left: px2rem(80);
        top: px2rem(13);
      }
      .cen {
        width: px2rem(115);
        height: 100%;
        margin-top: px2rem(-18);
        border-right: px2rem(3) solid #199ed8;
        position: relative;
        .line {
          position: absolute;
          width: px2rem(20);
          right: px2rem(-23);
          top: 0;
          span {
            display: block;
            width: px2rem(8);
            height: px2rem(3);
            background: #f0605f;
            margin-top: px2rem(4);
            border-radius: px2rem(3);
          }
          span:first-child,
          span:nth-of-type(6n) {
            width: px2rem(16);
          }
        }
      }
    }
    .text {
      margin-left: px2rem(3);
      p {
        width: px2rem(100);
        height: px2rem(35);
        font-size: px2rem(12);
        line-height: px2rem(15);
        color: #a0a0a0;
        display: flex;
        align-items: center;
        word-break: break-all;
        word-wrap: break-word;
      }
    }
  }
  .step li:last-child {
    margin-bottom: px2rem(20);
    height: px2rem(60);
    //    background: pink;
    .left > .wire > span {
      width: 0;
      height: 0;
    }
    .cen {
      height: px2rem(35);
      .line > span {
        background: none;
      }
      .line > span:nth-child(1),
      .line > span:nth-child(2),
      .line > span:nth-child(3) {
        background: #f0605f;
      }
      .line > span:last-child {
        width: px2rem(42);
        height: px2rem(42);
        position: absolute;
        top: px2rem(28);
        left: px2rem(-16.5);
        background: url(./8.png) no-repeat;
        background-size: px2rem(30) px2rem(30);
      }
    }
  }
  .achieve {
    width: 80%;
    margin: px2rem(25) auto;
    height: px2rem(40);
    line-height: px2rem(40);
    background: url(./1.png);
    color: #fffffb;
    font-size: px2rem(18);
    text-align: center;
    border-radius: px2rem(8);
  }
}
</style>
