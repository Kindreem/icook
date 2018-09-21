<template>
  <div class="info">
      <header class="header">
            <img src="@/assets/images/DR-005.png" @click="backto">
      </header>
  <div class="demo-avatar">
      <p>完善个人信息</p>
      <label class="avatar-bg" >
        <!--默认显示的一张图片-->
         <img :src="url" v-if="!previewAvatar" >
        <!--七牛回调的图片path-->
        <!-- <img :src="previewAvatar" class="real-photo" v-if="previewAvatar" >   -->
        <input ref="upload" id="upload" type="file" class="realfilebt"  style="position:absolute; clip:rect(0 0 0 0);display: none;" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)"/>
      </label>
      <Modal v-model="infoimg" width="100%" class="infoimg">
            <vueCropper
              ref="cropper"
              :img="img.url"
              :outputSize = "option.size"
              outputType="png"
              :full="option.full"
              :autoCrop = "option.autoCrop"
              :autoCropWidth= "option.autoCropWidth"
              :autoCropHeight= "option.autoCropHeight"
              :fixedBox="option.fixedBox"
              :centerBox="option.centerBox"
              :canMoveBox="option.canMoveBox"
              :fixedNumber="option.fixedNumber"
              :original="option.original"
              :canMove="option.canMove"
              @realTime="realTime"
            ></vueCropper>
          <div slot="footer" class="footer">
            <Button @click="infoimg=false">取消</Button>
            <Button type="primary" @click="achieve">完成</Button>
          </div>
    </Modal>
  </div>
    <transition>
            <p class="warning" v-show="warning">{{tit}}</p>
            </transition>
   <form >
        <div class="item">
            <input v-model="nickname" placeholder="请输入最多6个字符" class="nickname"/>
            <img src="../../assets/images/DR-026.png" @click="clear">
        </div>
        <div class="item">
            <input type="text" placeholder="输入您的年龄" class="age" readonly="readonly" v-model="age" @focus="openPicker">
             <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
                :endDate="endDate"
                >
                </mt-datetime-picker>
                <!-- <datepick :date2 = "date2"></datepick> -->
            <p id="sel">仅自己可见></p>
        </div>
         <div class="item" >
            <p class="sex">选择您的性别</p>
             <div class="sex2">
                  <input type="radio" id="one" value="1" v-model="picked">
                <label for="one">男</label>
                <input type="radio" id="two" value="2" v-model="picked">
                <label for="two">女</label>
             </div>
        </div>
       <p class="txt">选择您的性别完成奖励,完成后可获得<span>烹饪之心</span>的徽章</p>
           <input type="button" class="next" value="下一步" @click="add">

  </form>
          <div class="end">
        <div class="left"><img src="./1-003（烹饪之心）.png" alt=""></div>
        <div class="con">
            <p><span>'烹饪之心'</span>徽章</p>
            <p>褒奖给每位ICOOK烹饪之旅的烹饪家</p>
        </div>
        <div class="right"><span>EXP+3</span>
        <img src="./DR-007.png" alt="">
        <span>+3</span></div>
    </div>

  </div>
</template>

<script>
import * as qiniu from "qiniu-js";
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
import {upload,addinfo} from "@/api";
import vueCropper from 'vue-cropper'
import moment from "moment";
import datepick from "./datepick"
export default {
    components: {
    vueCropper,
    datepick
  },
  data() {
    return {
      date2:'',
      previews:'',
      option: {
				size: 1,
				full: false,
        outputType: 'png',
        autoCrop:true,
        fixedBox:true,
				original: false,
        canMoveBox: false,
        centerBox:true,
        canMove:true,
        fixedNumber: [4, 4],
        autoCropWidth:200,
        autoCropHeight:200
			},
      infoimg:false,       //截图
      files: [], // 文件
      uploadToken: "", // 上传文件 token
      previewAvatar: "", // 页面展示的avatar
      img: {
        url: require("./TX.png")
      },
      url: require("./TX.png"),
      nickname: "",
      endDate: new Date(),
      startDate: new Date('1970-1-1'),
      age: "",
      picked: "1",
      upkey:'',       //拼接路径
      warning:0,      //提示显示隐藏
      tit:'',          // 提示信息=
    };
  },
   mounted() {
      // this.height = document.documentElement.clientHeight+'px'
      let width = document.documentElement.clientWidth*0.5
      this.option.autoCropWidth= width
      this.option.autoCropHeight = width

    let self = this;
    //页面加载 拉去token
    upload(1, 1).then(res => {
      this.uploadToken = res.data.token;
      this.upkey = res.data.key;

    });
  },
  methods: {
		// 实时预览函数
		realTime (data) {
		},

    	uploadImg (e, num) {
         this.infoimg=true
			//上传图片
			// this.option.img
			var file = e.target.files[0]
			if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
				 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
				 return false
			 }
			var reader = new FileReader()
			reader.onload = (e) => {
				let data
				if (typeof e.target.result === 'object') {
					// 把Array Buffer转化为blob 如果是base64不需要
					data = window.URL.createObjectURL(new Blob([e.target.result]))
				} else {
					data = e.target.result
				}
				if (num === 1) {
					this.img.url = data
				}
			}
			// 转化为base64
			reader.readAsDataURL(file)
			// 转化为blob
        // reader.readAsArrayBuffer(file)
    },
   achieve() {
      var self = this
       this.infoimg = false
      // this. finish('glob')
        this.$refs.cropper.getCropData((data) => {
        // this.url = data
        console.log(data)
      /*picUrl用来存储返回来的url*/
      var picUrl;
    /*把头部的data:image/png;base64,去掉。（注意：base64后面的逗号也去掉）*/
      let picBase=data.substring(22);
        /*通过base64编码字符流计算文件流大小函数*/
        // let str = picBase
        function fileSize(str) {
            var fileSize;
            if(str.indexOf('=')>0)  {
                var indexOf=str.indexOf('=');
                str=str.substring(0,indexOf);//把末尾的’=‘号去掉
            }
            fileSize=parseInt(str.length-(str.length/8)*2);
            return fileSize;
            // console.log(fileSize)
        }
    //  console.log(fileSize(str))
     /*把字符串转换成json*/
     function strToJson(str) {
         var json = eval('(' + str + ')');
         return json;
     }
    //  console.log(strToJson(picBase))
    let newdate = md5(Date.parse(new Date()).toString());
      // console.log(newdate);
      let newk = `${this.upkey}${newdate}.png`
      let nkey=Base64.encode(newk)
      // let EncodedKey = UrlSafeBase64.encodeToString(key)
     // //http://upload-z2.qiniu.com/putb64/ 只适用于七牛云华南空间 因为我的是七牛云华南空间，如果不是华南空间需要根据七牛云文档进行更改
     var url = `http://upload-z2.qiniu.com/putb64/${fileSize(picBase)}/key/${nkey}`;
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange=function(){

         if (xhr.readyState==4){
          //  console.log(xhr)
              var keyText=xhr.responseText;
            // /*返回的key是字符串，需要装换成json*/
              keyText=strToJson(keyText);
            /* http://image.haoqiure.com/ 是我的七牛云空间网址，keyText.key 是返回的图片文件名*/
              picUrl="http://img.ichushen.cn/"+keyText.key;
              self.url = picUrl
         }
     }
     xhr.open("POST", url, true);
     xhr.setRequestHeader("Content-Type", "application/octet-stream");
     xhr.setRequestHeader("Authorization", "UpToken "+this.uploadToken+"");
     xhr.send(picBase);
    })
  },

    clear() {
      this.nickname = "";
    },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(data) {
      let date = moment(data).format("YYYY-­­­­­MM-DD");
      this.age = date;
    },
    backto() {
      this.$router.go(-1);
    },
    add(){
      if(this.nickname.length>0&&this.nickname.length<7){
        if(this.age){
          let userid = localStorage.getItem('userid')
          addinfo(userid,this.url,this.nickname,this.age,this.picked).then(res=>{
            console.log(res)
               this.$router.push({path: '/info/meet'})
            })
       }else{
          this.warning = 1;
          this.tit = '请选择年龄'
          setTimeout(()=>{
                      this.warning=0;
                    },1000)
       }
      }else{
        this.warning = 1;
        this.tit = '请输入1-6个字符昵称'
        setTimeout(()=>{
                    this.warning=0;
                  },1000)
       }
    }

  },

};
</script>

<style lang="scss">
@import "@/assets/hotcss/px2rem.scss";
   .infoimg{
    background: #199ed8;
     .ivu-modal{
      top: 0;
      height: 100%;
      .ivu-modal-content{
         height:100% ;
          background: #000;
      .vue-cropper{
          background-image:none!important;
          background: #000;
          height: 100%;
          height: px2rem(480);
       img{
          // margin-top: 40%;
          position: relative;
          width: 100%;
          // height:100%;
        }
        .cropper-view-box{
          border-radius: 50%;
          position: absolute;
          border: none;
          overflow: hidden;
        }
        .cropper-view-box{
          outline: none;
        }
        .cropper-face{
          background: none;
        }
        .crop-info{
          display: none;
        }
        }
    }
    .ivu-modal-footer{
        padding: 0;
     .footer{
        width: 100%;
        display: flex;
        justify-content:space-around;
      .ivu-btn{
        width: px2rem(60);
        margin-top:px2rem(2);
        font-size: px2rem(12);
      }
      }
    }
 }
 }
.info {
   .warning{
        position: absolute;
        width:  px2rem(120);
        height:px2rem(25);
        line-height: px2rem(25);
        background:rgba(0,0,0,.7);
        border-radius: 8px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        font-size: px2rem(12);
        color: #fff;
        z-index: 999;
    }
      .v-enter {
        opacity: 0;
        top: 52%;
        }
        .v-leave-to {
        opacity: 1;
        // top: px2rem(180);
        }
        .v-enter-active,
        .v-leave-active {
        transition: all 0.2s ease-out;
        }
  text-align: center;
  input {
    outline: none;
    border: none;
  }
  .header {
    height: px2rem(44);
    background: none;
    text-align: left;
    margin-left: px2rem(20);
    div {
      padding: 20px;
    }
    img {
      margin-top: px2rem(20);
      width: px2rem(24);
    }
  }
  .demo-avatar {
    p {
      font-size: px2rem(20);
      color: #199ed8;
      margin: 20px 0;
    }
    .avatar-bg{
          width: px2rem(96);
          height: px2rem(96);
          border-radius: 50%;
          display: block;
          margin: 0 auto;
          overflow: hidden;
        img {
          width: px2rem(96);
          height: px2rem(96);
          }
    }
  }

  .item {
    margin: px2rem(20) auto;
    width: px2rem(250);
    display: flex;
    position: relative;

    .nickname {
      width: px2rem(250);
      height: px2rem(25);
      font-size: px2rem(12);
      border: none;
      position: relative;
    }
    .nickname::-webkit-input-placeholder {
      color: #999;
    }
    img {
      width: px2rem(15);
      height: px2rem(15);
      position: absolute;
      right: px2rem(2);
      top: px2rem(5);
    }
    #sel {
      height: px2rem(20);
      font-size: px2rem(12);
      line-height: px2rem(20);
      right: 0;
      position: absolute;
      color: #999;
    }
    .age,
    .sex {
      font-size: px2rem(12);
      line-height: px2rem(20);
      background: #fff;
      color: #999;
    }
    .sex2 {
      flex: 1;
      text-align: right;
      input {
        width: px2rem(14);
        height: px2rem(14);
        margin-left: px2rem(12);
        vertical-align: middle;
      }
      label {
        font-size: px2rem(12);
        vertical-align: middle;
        color: #999;
      }
    }
  }
  .txt {
    font-size: px2rem(11);
    margin-top: px2rem(80);
    color: #999;
    span {
      color: #199ed8;
    }
  }
  .mint-popup {
    top: 50%;
    width: 85%;
    left: 8%;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    height: px2rem(200);
    transform: none;
    .picker-slot-wrapper {
      margin-top: px2rem(-15);
    }
    .picker-items {
      height: px2rem(110);
      margin: px2rem(30) 0;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      .picker-item {
        font-size: px2rem(17);
        // transform: perspective(600px) rotateY(20deg);
        transform: rotate3d(1, 0, 0, 30deg) translate3d(0px, 0px, px2rem(2));
      }
      .picker-item.picker-selected {
        height:px2rem(30)!important;
        line-height: px2rem(30)!important;
        font-size: px2rem(19);
        transform: rotate3d(1, 0, 0, 0) translate3d(0px, 0px, px2rem(0));
      }
    }
    .picker-center-highlight{
      height: px2rem(20)!important;
    }
    .picker-toolbar {
      position: absolute;
      height: px2rem(25);
      bottom: px2rem(12);
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        font-size: px2rem(14);
        display: inline-block;
        margin: 0 px2rem(20);
        width: px2rem(85);
        border: 1px solid #999;
        border-radius: px2rem(3);
        line-height: px2rem(25);
        color: #999;
      }
      span:last-child {
        color: #199ed8;
        border: 1px solid #199ed8;
      }
    }
  }
  .next {
    width: px2rem(270);
    height: px2rem(40);
    margin-top: px2rem(10);
    border-radius: px2rem(10);
    background: white;
    outline: none;
    box-shadow: 8px 8px 2px #d7d7d7;
    color: #999;
    font-size: px2rem(20);
  }
  .end {
    position: relative;
    display: flex;
    width: px2rem(260);
    margin: px2rem(10) auto;
    .left img {
      margin-top: px2rem(14);
      margin-left: px2rem(-10);
      width: px2rem(32);
    }
    .con {
      margin: px2rem(10) px2rem(5);
      text-align: left;
      p {
        font-size: px2rem(10.5);
        line-height: px2rem(20);
        color: #999;
      }
    }
    span {
      color: #199ed8;
      font-size: px2rem(10.5);
    }
    .right {
      position: absolute;
      right: 0;
      top: px2rem(10);
      img {
        width: px2rem(12);
        vertical-align: bottom;
      }
    }
  }
}
</style>
