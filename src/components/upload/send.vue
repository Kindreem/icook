<template>
  <div class="all">
    <div class="for">
      <div class="icon">
        <section class="weixin">
          <div><img src="./img/DR-002.png" alt=""><span>微信</span></div>
          <div><Checkbox/></div>
        </section>
        <section class="qq">
          <div><img src="./img/DR-003.png" alt=""><span>QQ</span></div>
          <div><Checkbox/></div>
        </section>
        <section class="weibo">
          <div><img src="./img/RW-029.png" alt=""><span>微博</span></div>
          <div><Checkbox/></div>
       </section>
      </div>
      <p>每勾选一个发布按钮可获200金奖励</p>
      <button @click="sendj">发布<br/>获得全部900金奖励</button>
    </div>
    <transition>
      <p class="warning" v-show="warning">{{tit}}</p>
   </transition>
  </div>
</template>

<script>
import { add } from "@/api";
export default {
  props: ["userBookDto"],
  data() {
    return {
      tit: "",
      warning: ""
    };
  },
  methods: {
    sendj() {
      // console.log(this.userBookDto.userFoodDtos);
      let self = this
      let checkubname = () =>{
      if (this.userBookDto.ubname.length == 0) {
        this.tit = "菜谱名称不能为空";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
        return false;
      }
      else {
        return true;
      }
      }
      checkubname()
      let cubdescription = () =>{
        if (this.userBookDto.ubdescription.length == 0) {
        this.tit = "菜谱说明不能为空";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
        return false;
      }
      else {
        return true;
      }
      }
      cubdescription()
      let cubthumbimg = () =>{
      if (this.userBookDto.ubthumbimg.length == 0) {
        this.tit = "请上传封面图片";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
        return false;
      }
      else {
        return true;
      }
      }
      cubthumbimg()
      let cuserFoodDtos
      let cuserStepDtos
      if (this.userBookDto.userFoodDtos.length == 0) {
        this.tit = "食材或用量不能为空";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
      } else if (this.userBookDto.userFoodDtos.length > 0) {
        var mun = 0
        this.userBookDto.userFoodDtos.forEach(function(val) {
          // console.log(val.foodname.length);
          if (val.foodname.length == 0 || val.weight.length == 0) {
            self.tit = "食材或用量不能为空";
            self.warning = true;
            setTimeout(() => {
              self.warning = false;
            }, 1000);
          }
          else if(val.foodname.length > 0 && val.weight.length > 0) {
                mun++
                console.log(mun)

          }
        });
        // console.log(this.userBookDto.userFoodDtos.length)
        cuserFoodDtos = () =>{
        if (mun==self.userBookDto.userFoodDtos.length) {
          console.log(self.userBookDto.userFoodDtos.length)
          console.log(mun)
               return true
               mun = 0

        }
        else {
          return false
        }
        }
        cuserFoodDtos()
      }

       if (this.userBookDto.userStepDtos.length == 0) {
        this.tit = "步骤图片或说明不能为空";
        this.warning = true;
        setTimeout(() => {
          this.warning = false;
        }, 1000);
      } else if (this.userBookDto.userStepDtos.length > 0) {
        var aa = 0
        console.log(this.userBookDto.userStepDtos);
        this.userBookDto.userStepDtos.forEach(function(val) {
          // console.log(val.img.length);
          if (val.description.length==0||val.img.length==0) {
            self.tit = "步骤图片或说明不能为空";
            self.warning = true;
            setTimeout(() => {
              self.warning = false;
            }, 1000);
          }
          if(val.description.length > 0 && val.img.length > 0) {
                aa++
                // console.log(aa)
          }
        });
        // console.log(this.userBookDto.userFoodDtos.length)
        cuserStepDtos = () =>{
        if (aa==self.userBookDto.userStepDtos.length) {
          // console.log(aa)
              return true
               aa = 0

        }
        else {
          return false
        }
        }
        cuserStepDtos()
      }
      // console.log(cuserFoodDtos())
      // console.log(cuserStepDtos())

     if(checkubname()&&cubdescription()&&cubthumbimg()&&cuserStepDtos()&&cuserFoodDtos()){
      add(JSON.stringify(this.userBookDto)).then(res => {
        console.log(res);
        this.$router.push({path: '/Share'})
      });
     }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: px2rem(80) px2rem(80) px2rem(40);

  .for {
    .icon {
      margin-top: px2rem(30);
      display: flex;
      justify-content: space-around;

      section {
        text-align: center;
        font-size: px2rem(24);
        color: #666;

        span {
          position: relative;
          top: -16px;
          left: 10px;
        }

        img {
          width: px2rem(48);
        }
      }
    }
  }

  p {
    font-size: px2rem(24);
    color: #999;
    margin-top: px2rem(40);
  }

  .for >button {
    margin-top: px2rem(40);
    width: 100%;
    height: px2rem(80);
    font-size: px2rem(24);
    color: #999;
    background: #fff;
    border: none;
    box-shadow: 12px 12px 15px rgba(204, 204, 204, 0.5);
    border-radius: 20px;
  }
}

>>>.ivu-checkbox {
  height: px2rem(32);
  width: px2rem(32);
  border-radius: 50%;
  border: 1px solid #717171;
}

>>>.ivu-checkbox-inner {
  height: px2rem(20);
  width: px2rem(20);
  border-radius: 50%;
  border: none;
  top: px2rem(5);
}

>>>.ivu-checkbox-checked .ivu-checkbox-inner {
  background-color: #717171;
}

>>>.ivu-checkbox-focus {
  box-shadow: none;
}

>>>.ivu-checkbox-checked .ivu-checkbox-inner:after {
  content: '';
  display: table;
  width: px2rem(0);
  height: px2rem(0);
  position: absolute;
  top: px2rem(8);
  left: px2rem(8);
  border: 5px solid #717171;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1);
  transition: all 0.2s ease-in-out;
}

.warning {
  position: fixed;
  width: px2rem(400);
  height: px2rem(60);
  line-height: px2rem(60);
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  left: 50%;
  top: 60%;
  transform: translateX(-50%);
  font-size: px2rem(24);
  color: #fff !important;
  z-index: 111112;
  overflow: hidden;
}

.v-enter {
  opacity: 0;
  top: 62%; /* 进入起点在屏幕100%部分,即屏幕最右 */
}

.v-leave-to {
  opacity: 1;
  // top: px2rem(180);
}

.v-enter-active, .v-leave-active {
  transition: all 0.2s ease-out;
}
</style>

