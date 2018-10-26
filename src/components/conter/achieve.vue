<template>
  <div class="achieve">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">任务</p>
      </header>

      <Collapse accordion v-model="val">
      <div v-for="(item,index) in list" :key="index" class="allitem" @click="open(index)">
        <Panel>
            <div class="left"><img :src="item.achievementimg" alt=""></div>
            <h4>{{item.tsakname}}</h4><span>{{item.explain}}</span>
            <p slot="content"><span>完成条件:</span>{{item.condition}}</p>
        </Panel>

            <button :class="item.rewardstatus==1?'btn2':item.rewardstatus==2?'btn3':'btn1'" @click="get(item.utid)">
                {{item.rewardstatus==1?'领取':item.rewardstatus==2?'已领取':'未完成'}}
            </button>
      </div>
        <!-- <Panel class="none" name="0"></Panel> -->
    </Collapse>

      <!-- <div class="item">
          <div class="left"><img src="./2.png" alt=""></div>
          <div class="tit">
              <p>美食梦想家</p><span>奖励给首次领取本周所有奖励</span>

          </div>
          <div class="right">
              <img src="./GR-016.png" alt="">
              <p>已获得</p>
          </div>
      </div> -->
    <div class="fcoll" v-if="guide2">
      <Collapse v-model="val1">
      <div class="allitem">
        <Panel name="1">
            <div class="left"><img src="./美食梦想家.png" alt=""></div>
            <h4>美食梦想家</h4><span>奖励给绑定或注册手机号的用户</span>
            <p slot="content"><span>完成条件:</span>用户完成注册，如用户使用三方账号登录需绑定手机号</p>
        </Panel>

            <button class="btn1">
                未完成
            </button>
      </div>
    </Collapse>
    </div>
    <div class="guide" v-if="guide2">
     <h4 class="h1">点击此处查看任务完成条件。达成任务条件即可获得任务奖励。</h4>
     <img class="img1" src="./3-任务.png" alt="">
   </div>
  <div class="guide1" @touchmove.prevent v-if="guide2">
     <button @click="end">朕知道了</button>
   </div>

  </div>
</template>

<script>
import {tastlist,receive} from '@/api'
export default {
  data () {
    return {
        list:'' ,            //任务列表
        id:'' ,     //用户id
        val:'',
        val1:'1',
        guide2: false
    }
  },
  mounted(){
      this.getlist()
      if(localStorage.getItem('guide2')==1) {
        this.guide2=true
    }
  },
  methods:{
    end() {
      localStorage.setItem('guide2',0)
      if(localStorage.getItem('guide2')==0) {
        this.guide2=false
    }
    },
     backto(){
      this.$router.go(-1);
    },
  open(index){
      // console.log(index)
        if(index==0){
            this.val= '0'
        }else{
            this.val=index
        }
  },
    getlist(){
        this.id = localStorage.getItem("userid");
        tastlist(this.id).then(res=>{
            if(res.code==200){
                this.list=res.data
            }
            // console.log(res.data)
        })
    },
//领取奖励
    get(id){
        console.log('wwwwww')
        receive(this.id,id).then(res=>{
            // console.log(res)
            this.getlist()
        })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.guide1 {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: transparent;
  z-index: 10001;
  button {
    position: absolute;
    bottom: px2rem(90);
    left: 50%;
    margin-left: px2rem(-45);
    width: px2rem(90);
    height: px2rem(27);
    color: #fff;
    font-size: px2rem(13);
    border: 1px solid #fff;
    border-radius: 10px;
    background: transparent;
    outline: none;
  }
}
.guide {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  .h1 {
    position: absolute;
    top: px2rem(300);
    left: 50%;
    margin-left: px2rem(-160);
    color: #fff;
    font-size: px2rem(13);
    letter-spacing: px2rem(2);
    line-height: px2rem(18);
    width: px2rem(320);
    white-space: normal;
  }
  .img1 {
    position: absolute;
    top: px2rem(226);
    left: 50%;
    margin-left: px2rem(-8.5);
    width: px2rem(17);
  }
}
.fcoll {
  position: fixed;
  top: px2rem(46);
  left: 0px;
  z-index: 10000;
}
.achieve{
    .header{
    height: px2rem(44);
    background: none;
    text-align: left;
    margin-left:px2rem(20) ;
    position: relative;
    .title{
        font-size: px2rem(20);
        position: absolute;
        font-size:  px2rem(14);
        color: #199ED8;
        top: px2rem(20);
        left: 50%;
        transform: translateX(-50%)
    }
    div{
      padding: 20px;
    }
    img{
      margin-top: px2rem(20);
      width: px2rem(24);
      height: px2rem(24);
    }
  }
    height: 100%;
    padding-top: px2rem(1);
/deep/ .ivu-collapse{
        background: none;
        width: 90%;
        margin: 0 auto;
        margin-top:px2rem(20) ;
        border: none;
        .none{
            display: none
        }
        .ivu-collapse-item{
            margin-top:px2rem(10);
            border-radius:20px;
            background: #E6E6E6;;
        .ivu-collapse-header{
            height: px2rem(72);
            .left{
                float: left;
                width: px2rem(56);
                height: px2rem(56);
                margin: px2rem(8) px2rem(15) px2rem(0) px2rem(15);
                background: #BFC1C0;
                border-radius: 10px;
                border: 1px solid #199ED8;
                img{
                    width: px2rem(48);
                    margin:px2rem(4);
                }
            }
            i{
                font-size:  px2rem(0);
                margin-top: px2rem(20) ;
                float: right;
                margin-right: px2rem(10);
                margin-left:px2rem(5);
            }
            h4{
                font-size: px2rem(14);
                color: #199ED8;
                transform: translateY(px2rem(15));
                margin-bottom: px2rem(15);
            }
            span{
                font-size:px2rem(12);
            }
          }
          .ivu-collapse-content{
              border-radius: 0 0 20px 20px;
              background: #E6E6E6;
              font-size:px2rem(12);
              .ivu-collapse-content-box{
                  margin-left:px2rem(80);
                  border-top: 1px solid #999;
                  span{
                      display: block
                  }
              }
          }
        }
        .allitem{
            position: relative;
            //未完成
            .btn1{
                width: px2rem(55);
                height: px2rem(25);
                font-size: px2rem(12);
                background: #808080;
                color: #fff;
                border-radius:20px;
                border: none;
                z-index: 9999;
                position: absolute;
                right:px2rem(10);
                top: px2rem(25);

            }
            //已完成
            .btn2{
                width: px2rem(55);
                height: px2rem(25);
                font-size: px2rem(12);
                background: #5CB8E7;
                color: #fff;
                border: none;
                border-radius:20px;
                position: absolute;
                right:px2rem(10);
                top: px2rem(25);
            }
            //已领取
            .btn3{
                width: px2rem(55);
                height: px2rem(25);
                font-size: px2rem(12);
                color: #5CB8E7;
                background: #fff;
                border: none;
                border-radius:20px;
                position: absolute;
                right:px2rem(10);
                top: px2rem(25);
            }

}      }




    .item{
        width: px2rem(350);
        height: px2rem(90);
        margin: px2rem(15) auto;
        display: flex;
        padding-top: px2rem(16);
        box-shadow:  12px 15px rgba(0,0,0,.1);
        border-radius: px2rem(10);
        .left{
            img{
                width: px2rem(55);
                margin-right: px2rem(10);
            }
        }
        .tit{
            width: 65%;
            text-align: left;
            line-height: px2rem(18);
            p{
            font-size: px2rem(14);
            }
            span{
                font-size: px2rem(10);
            }
            .ivu-progress{
                // width: 92%;
                font-size: px2rem(12);
                display: flex;
                /deep/ .ivu-progress-inner{
                    background: #999;
                }
            }
        }
        .right{
            margin: px2rem(5) px2rem(10);
            img{
                width: px2rem(30);
            }
            p{
                font-size: px2rem(10);
            }
        }
    }
}
</style>
