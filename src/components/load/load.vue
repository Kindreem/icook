<template>
  <div class="load">
    <div class="modal1">
      <p class="tit">烹饪派系</p>
      <P>尊敬的烹饪家,感谢您对个人信息的完善,ICOOK已开启您之前所选哪啊收菜所属烹饪派系官方菜谱秘籍,并赠与您以下徽章</P>
      <div class="badge">
        <img src="./2.png" alt="">
        <img src="./2.png" alt="">
        <img src="./2.png" alt="">
        <img src="./2.png" alt="">
      </div>
    </div>

    <div class="modal2">
      <p class="tit">上传自己的菜肴作品</p>
      <p>每当您首次上传菜肴派系中自己的菜肴作品,您都会获得这个菜谱派系中菜肴的专属认证徽章,专属经验,厨金币等。</p>
      <p>厨金币可为您开启更多派系以及展开派系插槽栏位,经验能让您获得账号等级,更高的账号等级能使您享受更多特权以及优惠条件</p>
      <p>如您幸运的上传了一个ICOOK从未收录的菜肴作品,您将获得更丰盛的专属奖励!</p>
      <p>赶紧上传您的惊天大作吧!</p>
      <div class="btn">
        <router-link to="/home"><button class="first">传传传,不传不是人</button></router-link>
        <router-link to="/home"><button>等等 ! 一会儿再说</button></router-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped >
@import '@/assets/hotcss/px2rem.scss';
  .load{
    .modal1,
    .modal2{
        width: 90%;
        font-size:px2rem(12);
        margin:px2rem(10) auto;
        text-align: left;
        border-radius: px2rem(10);
        background: #666;
        color: #fff;
        padding: px2rem(15) px2rem(20);
        text-indent: 2em;
      .tit{
        text-align: center;
        margin-bottom: px2rem(15);
      }
    }
    .modal1{
      height:  px2rem(190);
      margin-top: px2rem(30);
      .badge{
        display: flex;
        justify-content: center;
        img{
          width: px2rem(80);
          height: px2rem(80);
        }
      }
    }
    .modal2{
      height:  px2rem(320);
      .btn{
        margin-top:px2rem(30);
        margin-right: px2rem(25);
        display: flex;
        justify-content: center;
        button{
          width:  px2rem(130);
          height:  px2rem(30);
          border-radius:  px2rem(10);
          border: 2px solid #fff;
          background: #666;
          color: #fff;
        }
        button.first{
          background: #fff;
          color: #333;
        }
      }
    }
  }

</style>
