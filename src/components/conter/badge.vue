 <template>
  <div class="badge">
        <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
            <p class="title">徽章</p>
      </header>
        <div class="item">
              <div class="title">
                <img src="./GR-007.png" alt="">
                <p>我已获得派系徽章</p>
              </div>
                <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in items" :key="index">
                    <router-link to="/conter/badge">
                        <img :src="item.src" alt="">
                    </router-link>
                </swiper-slide>
            </swiper>
       </div>

        <div class="item underway">
             <div class="title">
                <img src="./GR-007.png" alt="">
                <p>进行中的派系徽章</p>
            </div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in item2" :key="index">
                    <router-link to="/dan/dan">
                        <img :src="item.src" alt="">
                        <porgress :barwidth="item.barwidth" :color="item.color"></porgress>
                        <!-- <Progress :percent="80" status="wrong" hide-info :stroke-width="4"></Progress> -->
                    </router-link>
                </swiper-slide>
            </swiper>
       </div>
      
         <div class="item genre">
           <div class="title">
               <img src="./GR-007.png" alt="">
               <p>所有派系徽章</p>
               </div>
           <ul class="meet">
                <li v-for="(item,id) in data" :key="id">
                   <img :src="item.factionsimg" @click="open(item.factionsid)">
                   <p>{{item.factionsname}}派</p>
               </li>
           </ul>
       </div>

        <Modal v-model="modal2" width="90%">
                <div class="item genre">
                <div class="title">
                    <img src="./GR-007.png" alt="">
                    <p>{{tit[id-1]}}</p>
                    </div>
                <ul class="meet">
                        <li v-for="(item,index) in badges" :key="index">
                        <router-link to="/dan/dan" ><img :src="item.rankimg" alt=""></router-link>
                        <p>{{item.rankname}}</p>
                        <img src="./lock.png" alt="">
                    </li>   
                </ul>
            </div>
        <div slot="footer">
        </div>
    </Modal>
  </div>
</template>

<script>
import porgress from '../dan/porgress'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {faction,getrankall} from '@/api'
export default {
     components: {
      swiper,
      swiperSlide,
      porgress
  },
  data () {
    return {
        id:0,
        modal2:false,
        swiperOption: {
            slidesPerView: 4,
            // spaceBetween: 24,
            freeMode: true,
            slidesOffsetBefore: 24,
        },
        data:[],
        items:[
            {href:'/conter/badge',src:require('./1.png')},
            {href:'/conter/badge',src:require('./2.png')},
            {href:'/conter/badge',src:require('./3.png')},
            {href:'/conter/badge',src:require('./4.png')},
            {href:'/conter/badge',src:require('./4.png')},
            {href:'/conter/badge',src:require('./4.png')},
            {href:'/conter/badge',src:require('./4.png')},
            {href:'/conter/badge',src:require('./4.png')},
        ],
         item2:[
            {href:'/conter/badge',src:require('./5.png'),barwidth:50,color:'#1EAA39'},
            {href:'/conter/badge',src:require('./6.png'),barwidth:60,color:'#009CA4'},
            {href:'/conter/badge',src:require('./7.png'),barwidth:70,color:'#0b308e'},
            {href:'/conter/badge',src:require('./8.png'),barwidth:80,color:'#008ed8'},
            {href:'/conter/badge',src:require('./9.png'),barwidth:50,color:'#946134'},
            {href:'/conter/badge',src:require('./9.png'),barwidth:50,color:'#946134'},
            {href:'/conter/badge',src:require('./9.png'),barwidth:50,color:'#946134'},
            {href:'/conter/badge',src:require('./9.png'),barwidth:50,color:'#946134'},
        ],
          tit:['川派等级徽章','鲁派等级徽章','粤派等级徽章','闽派等级徽章','苏派等级徽章',
          '浙派等级徽章','徽派等级徽章','湘派等级徽章','自定菜等级徽章'],
          badges:[], 

    }
  },
  created(){
      let userid = localStorage.getItem('userid')
      faction(userid).then(res=>{
         this.data = res.data
        //  console.log(res)
      })
  },
  methods:{
    backto(){
        this.$router.go(-1);
    },
    open(index){
        this.modal2=true;
        this.id = index;
        let userid = localStorage.getItem('userid')
        getrankall(userid,this.id).then(res=>{
            this.badges = res.data
        })
    }
   
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hotcss/px2rem.scss';
.badge{
     .header{
        height: px2rem(44);
        background: none;
        text-align: left;
        position: relative;
        .title{
            font-size: px2rem(20);
            position: absolute;
            font-size:  px2rem(14);
            color: #5DB8E9;
            top: px2rem(20);
            left: 50%;
            transform: translateX(-50%);
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
    padding:  px2rem(1)  px2rem(10);
    text-align: left;
    /deep/ .progressContainer{
        margin:px2rem(5) auto;
        width:px2rem(55) ;
    }
    .item.genre{
        height: px2rem(360);
        li{
            margin-bottom:px2rem(15) ;
            width: 33.33%;
            img:last-child{
            width: px2rem(15);
            display: block;
            margin: 0 auto;
          }
        }
    }
    .item{
        width: 100%;
        height:  px2rem(140);
        margin-top: px2rem(15);
        border-radius: px2rem(10);
        box-shadow:  12px 15px rgba(0,0,0,.1);
        overflow: hidden;
        .title{
            width: px2rem(180);
            height: px2rem(30);
            position: relative;
            img{
                width: px2rem(180);
                height: px2rem(40);
            }
            p{
                font-size: px2rem(12);
                line-height: px2rem(30);
                margin-left: px2rem(20);
                padding-left:  px2rem(25);
                background: url(./titles.png)no-repeat center left;
                background-size: px2rem(20) px2rem(15); 
                position: absolute;
                top: 0;
            }
        }
        ul{
            list-style: none;
            font-size: px2rem(12);
            margin-top: px2rem(15);
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                text-align: center;
                img{
                    width: px2rem(64);
                }
            }
        }
        /deep/ .swiper-wrapper{
                display:flex;
                width: 200%;
                margin:px2rem(17) px2rem(-10);
            .swiper-slide{
                width: 25%;
                text-align: center;
                // background: pink;
                img{
                    width: px2rem(64);
                }
            }
        }
    }
}
.v-transfer-dom{
 /deep/ .ivu-modal-content{
    margin-top:px2rem(70);
    background: rgba(0, 0, 0, 0);
   .item{
        width: 100%;
        height:  px2rem(275);
        margin-top: px2rem(15);
        border-radius: px2rem(10);
        background: #fff;
        box-shadow:  12px 15px rgba(0,0,0,.1);
         .title{
            width: px2rem(150);
            height: px2rem(30);
            position: relative;
            img{
                width: px2rem(150);
                height: px2rem(40);
            }
            p{
                font-size: px2rem(12);
                line-height: px2rem(30);
                margin-left: px2rem(20);
                padding-left:  px2rem(25);
                background: url(./titles.png)no-repeat center left;
                background-size: px2rem(20) px2rem(15); 
                position: absolute;
                top: 0;
            }
        }
        ul{
            list-style: none;
            font-size: px2rem(12);
            margin-top: px2rem(15);
            display: flex;
            flex-wrap: wrap;
            li{
                width: 25%;
                text-align: center;
                margin-bottom:px2rem(10);
               a{
                   display: block;
                  img{
                    width: px2rem(64)!important;
                 }
               }
                 img:last-child{
                    width: px2rem(15);
                 }
            }
        }
    }
    .ivu-modal-close{
        margin-top:px2rem(16);
        margin-right: px2rem(10);
        i{
         font-size: px2rem(30);
         color: #5DB8E9;
         font-weight: bold;
        }
    
    }
    .ivu-modal-footer{
        border: none;
        background: none
    }
  }
}
</style>

