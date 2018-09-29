<template>
  <div class="achieve">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">任务</p>
      </header>

      <Collapse accordion simple v-model="val" >
      <div v-for="(item,index) in list" :key="index" class="allitem">
        <Panel>
            <div class="left"><img :src="item.achievementimg" alt=""></div>
            <h4>{{item.tsakname}}</h4><span>{{item.explain}}</span>
            <p slot="content"><span>完成条件:</span>{{item.condition}}</p>
        </Panel>

            <button :class="item.taskstatus==2&&item.rewardstatus==1?'btn2':'btn1'" @click="get(item.utid)">
                {{item.rewardstatus==1?'领取':item.rewardstatus==2?'已领取':'未完成'}}
            </button>
      </div>
        <Panel class="none" name="1"></Panel>
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

     
       
       
  </div>
</template>

<script>
import {tastlist,receive} from '@/api'
export default {
  data () {
    return {
        list:'' ,            //任务列表
        id:'' ,     //用户id
        val:'1'
    }
  },
  mounted(){
      this.getlist()
  },
  methods:{
     backto(){
      this.$router.go(-1);
    },

    getlist(){
        this.id = localStorage.getItem("userid");
        tastlist(this.id).then(res=>{
            if(res.code==200){
                this.list=res.data
            }
            console.log(res.data)
        })
    },
//领取奖励
    get(id){
        this.val ="1"
        console.log('wwwwww')
        // receive(this.id,id).then(res=>{
        //     console.log(res)
        // })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
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
                margin: px2rem(8) px2rem(15) px2rem(0) px2rem(10);
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
                transform: translateY(px2rem(22));
                margin-bottom: px2rem(30);
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
            .btn1{
                width: px2rem(55);
                height: px2rem(25);
                font-size: px2rem(12);
                background: #5CB8E7;
                color: #fff;
                border-radius:20px;
                float: right;
                margin-right:px2rem(10) ;
                
                border: none;
                z-index: 9999;
            }
            .btn2{
                width: px2rem(55);
                height: px2rem(25);
                font-size: px2rem(12);
                background: #5CB8E7;
                color: #fff;
                border-radius:20px;
                float: right;
                margin-right:px2rem(10) ;
                margin-top: px2rem(-22);
                border: none;
                z-index: 9999;
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
