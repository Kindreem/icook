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
            <ul class="badges">
                <li>
                     <router-link to="/genre/genre" ><img src="./2.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/genre/genre" ><img src="./2.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/genre/genre" ><img src="./2.png" alt=""></router-link>
                </li>
                <li>
                    <router-link to="/genre/genre" ><img src="./2.png" alt=""></router-link>
                </li>

            </ul>
       </div>
        <div class="item underway">
             <div class="title">
                <img src="./GR-007.png" alt="">
                <p>进行中的派系徽章</p>
            </div>
            <ul class="badges">
                <li>
                    <router-link to="/dan/dan" ><img src="./2.png" alt=""></router-link>
                    <Progress :percent="80" status="active" hide-info :stroke-width="6"></Progress>
                    <p>16/18</p>

                </li>
                <li>
                    <router-link to="/dan/dan" ><img src="./2.png" alt=""></router-link>
                    <Progress :percent="80" status="active" hide-info :stroke-width="6"></Progress>
                    <p>16/18</p>
                </li>
                <li>
                   <router-link to="/dan/dan" ><img src="./2.png" alt=""></router-link>
                    <Progress :percent="80" status="active" hide-info :stroke-width="6"></Progress>
                    <p>16/18</p>
                </li>
                <li>
                    <router-link to="/dan/dan" ><img src="./2.png" alt=""></router-link>
                    <Progress :percent="80" status="active" hide-info :stroke-width="6"></Progress>
                    <p>16/18</p>
                </li>

            </ul>
       </div>
      
         <div class="item genre">
           <div class="title">
               <img src="./GR-007.png" alt="">
               <p>粤派</p>
               </div>
           <ul class="meet">
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>

           </ul>
       </div>
        <div class="item genre">
           <div class="title">
               <img src="./GR-007.png" alt="">
               <p>川派</p>
               </div>
           <ul class="meet">
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>
                <li>
                   <img src="./2.png" alt="">
                   <img src="./lock.png" alt="">
               </li>

           </ul>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
      backto(){
      this.$router.go(-1);
    }
  },
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
        color: #199ED8;
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
    .item.underway{
        height: px2rem(160);
         .ivu-progress{
            display: block;
            margin: px2rem(-2) auto;
            width: px2rem(35);
            /deep/ .ivu-progress-inner{
                background: #999;
            }
           }
        li p{
            margin-top: px2rem(8);
            font-size: px2rem(8);
            color: #999;
        }
    }
    .item.not{
        height:  px2rem(250);
        li{
            margin-bottom:px2rem(20);
        }
    }
    .item.genre{
        height: px2rem(250);
        li{
            margin-bottom:px2rem(15) ;
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


    }
}
</style>

