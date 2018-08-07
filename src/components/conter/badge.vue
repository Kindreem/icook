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
                        <porgress :barwidth="item.barwidth" :color="item.color" :show="show"></porgress>
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
                <li v-for="(item,id) in imgs" :key="id">
                   <img :src="item.url" @click="open(id)">
                   <p>{{item.tit}}</p>
               </li>
           </ul>
       </div>

        <Modal v-model="modal2" width="90%">
                <div class="item genre">
                <div class="title">
                    <img src="./GR-007.png" alt="">
                    <p>{{tit[id]}}</p>
                    </div>
                <ul class="meet">
                        <li v-for="(item,index) in all[id].badge" :key="index">
                        <router-link to="/dan/dan" ><img :src="item.url" alt=""></router-link>
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
            slidesPerView: 3,
            // spaceBetween: 24,
            freeMode: true,
            slidesOffsetBefore: 24,
        },
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
        imgs:[
        //    { url:require('./1.png')},
            {id:1,tit:'川派',url:require('./1.png')},
            {id:2,tit:'鲁派',url:require('./2.png')},
            {id:3,tit:'粤派',url:require('./3.png')},
            {id:4,tit:'闽派',url:require('./4.png')},
            {id:5,tit:'苏派',url:require('./5.png')},
            {id:6,tit:'浙派',url:require('./6.png')},
            {id:7,tit:'徽派',url:require('./7.png')},
            {id:8,tit:'湘派',url:require('./8.png')},
            {id:9,tit:'自定菜',url:require('./9.png')},
        ],
          tit:['川派等级徽章','鲁派等级徽章','粤派等级徽章','闽派等级徽章','苏派等级徽章',
          '浙派等级徽章','徽派等级徽章','湘派等级徽章','自定菜等级徽章'],
          all:[
            {
             badge:[
                    {id:1,url:require('./props/imgs1/1.png')},
                    {id:2,url:require('./props/imgs1/2.png')},
                    {id:3,url:require('./props/imgs1/3.png')},
                    {id:4,url:require('./props/imgs1/4.png')},
                    {id:5,url:require('./props/imgs1/5.png')},
                    {id:6,url:require('./props/imgs1/6.png')},
                    {id:7,url:require('./props/imgs1/7.png')},
                    {id:8,url:require('./props/imgs1/8.png')},
                ],
              },
            {
             badge:[
                    {id:1,url:require('./props/imgs2/1.png')},
                    {id:2,url:require('./props/imgs2/2.png')},
                    {id:3,url:require('./props/imgs2/3.png')},
                    {id:4,url:require('./props/imgs2/4.png')},
                    {id:5,url:require('./props/imgs2/5.png')},
                    {id:6,url:require('./props/imgs2/6.png')},
                    {id:7,url:require('./props/imgs2/7.png')},
                    {id:8,url:require('./props/imgs2/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs3/1.png')},
                    {id:2,url:require('./props/imgs3/2.png')},
                    {id:3,url:require('./props/imgs3/3.png')},
                    {id:4,url:require('./props/imgs3/4.png')},
                    {id:5,url:require('./props/imgs3/5.png')},
                    {id:6,url:require('./props/imgs3/6.png')},
                    {id:7,url:require('./props/imgs3/7.png')},
                    {id:8,url:require('./props/imgs3/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs4/1.png')},
                    {id:2,url:require('./props/imgs4/2.png')},
                    {id:3,url:require('./props/imgs4/3.png')},
                    {id:4,url:require('./props/imgs4/4.png')},
                    {id:5,url:require('./props/imgs4/5.png')},
                    {id:6,url:require('./props/imgs4/6.png')},
                    {id:7,url:require('./props/imgs4/7.png')},
                    {id:8,url:require('./props/imgs4/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs5/1.png')},
                    {id:2,url:require('./props/imgs5/2.png')},
                    {id:3,url:require('./props/imgs5/3.png')},
                    {id:4,url:require('./props/imgs5/4.png')},
                    {id:5,url:require('./props/imgs5/5.png')},
                    {id:6,url:require('./props/imgs5/6.png')},
                    {id:7,url:require('./props/imgs5/7.png')},
                    {id:8,url:require('./props/imgs5/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs6/1.png')},
                    {id:2,url:require('./props/imgs6/2.png')},
                    {id:3,url:require('./props/imgs6/3.png')},
                    {id:4,url:require('./props/imgs6/4.png')},
                    {id:5,url:require('./props/imgs6/5.png')},
                    {id:6,url:require('./props/imgs6/6.png')},
                    {id:7,url:require('./props/imgs6/7.png')},
                    {id:8,url:require('./props/imgs6/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs7/1.png')},
                    {id:2,url:require('./props/imgs7/2.png')},
                    {id:3,url:require('./props/imgs7/3.png')},
                    {id:4,url:require('./props/imgs7/4.png')},
                    {id:5,url:require('./props/imgs7/5.png')},
                    {id:6,url:require('./props/imgs7/6.png')},
                    {id:7,url:require('./props/imgs7/7.png')},
                    {id:8,url:require('./props/imgs7/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs8/1.png')},
                    {id:2,url:require('./props/imgs8/2.png')},
                    {id:3,url:require('./props/imgs8/3.png')},
                    {id:4,url:require('./props/imgs8/4.png')},
                    {id:5,url:require('./props/imgs8/5.png')},
                    {id:6,url:require('./props/imgs8/6.png')},
                    {id:7,url:require('./props/imgs8/7.png')},
                    {id:8,url:require('./props/imgs8/8.png')},
                ]
            },
            {
             badge:[
                    {id:1,url:require('./props/imgs9/1.png')},
                    {id:2,url:require('./props/imgs9/2.png')},
                    {id:3,url:require('./props/imgs9/3.png')},
                    {id:4,url:require('./props/imgs9/4.png')},
                    {id:5,url:require('./props/imgs9/5.png')},
                    {id:6,url:require('./props/imgs9/6.png')},
                    {id:7,url:require('./props/imgs9/7.png')},
                    {id:8,url:require('./props/imgs9/8.png')},
                ]
            },
        ], 

    }
  },
  created(){
  },
  methods:{
    backto(){
        this.$router.go(-1);
    },
    open(index){
        this.modal2=true;
        this.id = index;
        // console.log(this.tit[index])
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
        height:  px2rem(250);
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

