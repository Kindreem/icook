<template>
  <div class="all">
     <section>
       <img :src="getlist.cbthumbimg" alt="">
     </section>
     <section class="text">
       <p>{{getlist.cbtext}}</p>
     </section>
     <section class="but">
       <router-link :to="'/flow/'+getlist.cookbookid">
         <Button id="but1" type="ghost">分解流程</Button>
       </router-link>

         <Button class="but2" type="ghost" @click="music">
           <img :class="show?'':'quan'" :src="show?require('./img/1-030-1.png'):require('./img/QQ20181017171135.png')" alt="">
           语音帮手
         </Button>
         <Button class="but2 fbut2" type="ghost" v-if="$store.state.guide5">
           <img src="./img/1-030-1.png" alt="">
           语音帮手
         </Button>
     </section>
     <section class="step">
       <div v-for="(item,index) in (getlist.cbimg||'').split('$')" :key="index"><img :src="item" alt=""></div>
     </section>
     <router-link to="/Share">
     <section class="up">
          <button>点击上传</button>
      </section>
      </router-link>
     <section class="yuyin">
       <audio ref="yy" preload="auto" loop="loop" v-show="show"></audio>
     </section>

     <div class="up fup" v-if="$store.state.guide5">
       <button>点击上传</button>
     </div>
  </div>
</template>

<script>
import { process } from "@/api";
import { yuyin } from "@/api/api1";
import { gtok } from "@/api/api2";
export default {
  props: ["items","tops","getlist"],
  data(){
    return{
      imglist:'',
      show: true,
      text: ''
    }
  },
  mounted(){
    let self = this
    this.bookid = this.$route.params.id;
    process(this.bookid).then(res => {
       console.log(res.data)
       let text1 = "part1：食材准备。"
       let sc = "食材："
       let tl = "调料："
       let fl = "辅料："
       let text2 = "part2：食材处理。"
       let text3 = "part3：烹饪。"
       if(res.data.sysBookFoodVOlist!==null&&res.data.sysBookFoodVOlist.length>0){
          res.data.sysBookFoodVOlist.forEach(val => {
              sc = sc + `${val.foodname}，${val.weight}${val.unit}${val.description}，`
          });
       }else{sc =""}
       if(res.data.sysBookCondimentVOlist!==null&&res.data.sysBookCondimentVOlist.length>0){
         res.data.sysBookCondimentVOlist.forEach(val => {
              tl = tl + `${val.condimentname}，${val.weight}${val.unit}${val.description}，`
          });

       }else{tl =""}
       if(res.data.sysBookExcipientsVOlist!==null&&res.data.sysBookExcipientsVOlist.length>0){
          res.data.sysBookExcipientsVOlist.forEach(val => {
              fl = fl + `${val.excipientsname}，${val.weight}${val.unit}${val.description}，`
          });
        //  console.log(1)
       }else{fl =""
      //  console.log(123456)
       }
       text1 = text1+sc+tl+fl
       if(res.data.sysBookHandlingVOlist!==null&&res.data.sysBookHandlingVOlist.length>0){
           res.data.sysBookHandlingVOlist.forEach(val => {
              text2 = text2 + `${val.name}，${val.handlingname}，`
          });
       }else{text2 =""}
       if(res.data.sysBookCookingVOlist!==null&&res.data.sysBookCookingVOlist.length>0){
           res.data.sysBookCookingVOlist.forEach((val,index)=> {
              text3 = text3 + `步骤${index+1}，${val.description.split('$')}。`
          });
       }else{text3 =""}
       console.log(text1)
       console.log(text2)
       console.log(text3)
       this.text = text1+text2+text3+"烹饪完成。"
       console.log(this.text)

      //  语音
      if(localStorage.getItem('setvoice')==null){
        localStorage.setItem("setvoice", 0)
      }
       let tok = localStorage.getItem("bdyytok");
      yuyin(this.text, "7666dwdawadioj", tok,5,4,5,localStorage.getItem('setvoice')).then(res => {
        // console.log(res);
        var url = res.request.responseURL
              self.$refs.yy.src = url;

        if (res.data.err_subcode == 110) {
          // console.log(123);
          gtok().then(res => {
            localStorage.setItem("bdyytok", res.refresh_token);
            tok = localStorage.getItem("bdyytok");
            console.log(tok);
            yuyin(this.text, "7666dwdawadfe", tok,5,4,5,localStorage.getItem('setvoice')).then(res => {
              console.log(res);
              var url = res.request.responseURL
              self.$refs.yy.src = url;
              // this.refs.yy.play();
            });
          });
        }
      });
    })
  },
  methods: {
    music(){
       this.show=!this.show
      //  this.$refs.yy.play();
        if(this.$refs.yy.paused){
            this.$refs.yy.play();
        }else{
          this.$refs.yy.pause()
        }
    },

  }
}

</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.fup {
  position absolute
  bottom px2rem(0)
  left 0
  right 0
  z-index 10000 !important
  button {
     box-shadow none !important
  }
}
.fbut2 {
  position absolute !important
  top 0
  right px2rem(0)
  z-index 10000 !important
  box-shadow none !important
}
.all {
  margin px2rem(30) px2rem(30)
  section {
    img {
      width 100%
      border-radius 20px
      display block
    }
  }
}
.text {
  margin px2rem(20) 0px
  height px2rem(300)
  p {
    font-size px2rem(26)
    color #666
    text-indent px2rem(52)
  }
}
.but {
  position relative
  display flex
  justify-content space-between
  >>>.ivu-btn-ghost {
    background-color #5DB8E9
    height px2rem(80)
    width px2rem(310)
    font-size px2rem(30)
    line-height px2rem(70)
    border-radius 20px
    box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.349019607843137)
      span {
        margin-left px2rem(54)
        color #fff
      }
    }
    img {
    width px2rem(54) !important
    position absolute
    top px2rem(13)
    right px2rem(218)
  }
}
.step {
  margin-top px2rem(30)
  div {
    margin-bottom px2rem(10)
  }
}
#but1 {
  background #5DB8E9 url('./img/icon/part.png') no-repeat px2rem(34) center !important
  background-size px2rem(64) !important
}
.but2 {
  background-color #5DB8E9 !important
  background-size px2rem(64) !important
}
.up {
  text-align center
  margin-top px2rem(50)
  button {
    background #5DB8E9
    width: 80%;
    height: px2rem(80);
    line-height px2rem(80)
    color: #fff;
    font-size: px2rem(30);
    border: 1px solid #fff;
    // background: transparent;
    outline: none;
    border-radius 20px
    box-shadow: 8px 8px 4px rgba(204, 204, 204, 0.4)
  }
}
// .yuyin {
//   position fixed
//   bottom px2rem(0)
//   left 0
//   z-index 9000
//   width 100%
//   height 100px
//   // margin 0 px2rem(30)
//   audio {
//     width 100%
//     height 100% !important
//   }
// }
@keyframes changDeg{
			0%{
				transform: rotate(0deg);
			}
			100%{
				transform: rotate(360deg);
			}
		}
.quan {
   animation:changDeg 2s linear 0.2s infinite;
}

</style>

