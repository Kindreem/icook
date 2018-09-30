<template>
  <div class="all">
    <section>
      <div class="ivu-upload">
        <label >
        <input type="file" v-if="ishow" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)"/>
        <div class="imgb">
            <img src="./img/RW-027.png" alt="">
            <h4>添加图片</h4>
            <div class="imgt" :style="'background: url('+ubthumbimg+') no-repeat center;'"></div>
        </div>
        </label>
      </div>
    </section>
    <section>
      <div class="title">
        <input maxlength="11" @input="childByValue1" placeholder="添加上传名称(最多11个字符)" style="width: 100%" v-model="ubname"/>
        <!-- <p>必填</p> -->
      </div>
      <div class="pic">
        <i-input @input="childByValue2" type="textarea" :autosize="true" placeholder="添加上传说明" v-model="ubdescription"></i-input>
      </div>
    </section>

    <Modal :closable="false" v-model="infoimg" width="100%" class="infoimg">
            <vueCropper
              :style="{height:height+'px'}"
              ref="cropper"
              :img="img"
              :outputSize = "option.size"
              outputType="png"
              :full="option.full"
              :autoCrop = "option.autoCrop"
              :autoCropWidth= "option.autoCropWidth"
              :autoCropHeight= "option.autoCropHeight"
              :fixedBox="option.fixedBox"
              :centerBox="option.centerBox"
              :canMoveBox="option.canMoveBox"
              :original="option.original"
              :canMove="option.canMove"
              :scalable="option.scalable"
              @realTime="realTime"
            ></vueCropper>
          <div slot="footer" class="footer">
            <Button type="primary" @click="end">取消</Button>
            <Button type="primary" @click="rotate">旋转</Button>
            <Button type="primary" @click="achieve">完成</Button>
          </div>
    </Modal>
  </div>
</template>

<script>
import * as qiniu from "qiniu-js";
import md5 from "js-md5";
import { upload } from "@/api";
let Base64 = require("js-base64").Base64;
import vueCropper from "vue-cropper";
import moment from "moment";
export default {
  components: {
    vueCropper
  },
  data() {
    return {
      height: '',
      previews: {},
      option: {
        size: 1,
        full: false,
        outputType: "png",
        autoCrop: true,
        fixedBox: true,
        original: false,
        canMoveBox: false,
        centerBox: false,
        canMove: true,
        autoCropWidth: 480,
        autoCropHeight: 270,
        scalable: true,
        // autoCropArea:1,
        // 开启宽度和高度比例
					// fixed: true,
					// fixedNumber: [5, 3]
      },
      infoimg: false, //截图
      files: [], // 文件


      value: "",
      uploadToken: "",
      upkey: "",
      ubthumbimg: '',
      ubname: '',
      ubdescription: '',
      img: '',
      ishow: true
    };
  },
  methods: {
    rotate() {
      this.$refs.cropper.rotateRight()
    },
    end() {
       this.infoimg=false
       this.ishow=true
    },
    // 实时预览函数
		realTime (data) {
      this.previews = data
		},

    	uploadImg (e, num) {

         this.infoimg=true
			//上传图片
			// this.option.img
			var file = e.target.files[0]
			// if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
			// 	 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
			// 	 return false
			//  }
			var reader = new FileReader()
			reader.onload = (e) => {
				let data
				// if (typeof e.target.result === 'object') {
				// 	// 把Array Buffer转化为blob 如果是base64不需要
				// 	data = window.URL.createObjectURL(new Blob([e.target.result]))
				// } else {
					data = e.target.result
				// }
				// if (num === 1) {
          this.img = data

				// }
			}
			// 转化为base64
			reader.readAsDataURL(file)
			// 转化为blob
        // reader.readAsArrayBuffer(file)
       this.ishow=false
    },
   achieve() {
     this.ishow=true
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
              self.ubthumbimg = picUrl
              self.$emit('childByValue', self.ubthumbimg)
         }
     }
     xhr.open("POST", url, true);
     xhr.setRequestHeader("Content-Type", "application/octet-stream");
     xhr.setRequestHeader("Authorization", "UpToken "+this.uploadToken+"");
     xhr.send(picBase);
    })
  },


    childByValue1() {
      this.$emit('childByValue1', this.ubname)
    },
    childByValue2() {
      this.$emit('childByValue2', this.ubdescription)
    },

  },
  created() {
      this.height = document.documentElement.clientHeight-180

    let width = document.documentElement.clientWidth*0.7
      this.option.autoCropWidth= width
      this.option.autoCropHeight = width/16*9


    //页面加载 拉去token
    upload(1, 1).then(res => {
      this.uploadToken = res.data.token;
      this.upkey = res.data.key;
    });
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {

  margin: 0 px2rem(80) px2rem(0);
}

.ivu-upload {
  border: none;
  box-shadow: 10px 10px 16px rgba(204, 204, 204, 0.4);
  border-radius: 20px;
  height: px2rem(360);
  text-align center
  img {
    margin-top: px2rem(114);
    width: px2rem(96);
  }

  h4 {

    margin-top: px2rem(20);
    font-size: px2rem(25);
  }
}

input {
  color: #999;
  outline: none;
  font-size: px2rem(26);
  padding-bottom: px2rem(20);
  border: none;
  border-bottom: 1px solid #999;
}

input::-webkit-input-placeholder { /* WebKit browsers */
  color: #999;
}

input:hover {
  border: none;
  outline: none;
  border-bottom: 1px solid #999;
}

.title {
  margin-top: px2rem(40);
  position: relative;

  p {
    color: #999;
    position: absolute;
    top: px2rem(0);
    right: 0px;
    font-size: px2rem(26);
  }
}

.pic {
  margin-top: px2rem(22);

  >>>.ivu-input-wrapper {
    border-bottom: 1px solid #999 !important;
  }

  >>>.ivu-input {
    // min-height: 40px;
    color: #999;
    outline: none;
    border: none;
    font-size: px2rem(26);
    width: 100%;
    // border-bottom: 1px solid #999 !important;
    // line-height px2rem(30)
    padding-bottom: 16px;
    // height 60px
    // padding-bottom 0px !important
  }

  >>>.ivu-input::-webkit-input-placeholder { /* WebKit browsers */
    color: #999;
    // border-bottom: 1px solid #999;
  }
}

>>>.ivu-input:hover {
  border: 0;
  outline: 0;
  border: none !important;
}

>>>.ivu-input:focus {
  border: 0;
  outline: 0;
  // border-bottom: 1px solid #999 !important;
  box-shadow: none;
}
.imgb {
  position relative
}
.imgt {
  position absolute
  top 0px
  left 0
  width 100%
  height px2rem(360)
  background-size cover !important
  border-radius 20px
}

.infoimg{
    background: #199ed8;

     >>>.ivu-modal{
      overflow:hidden !important
      top: 0;
      height: 100%;
      // box-sizing border-box
      margin 0
      .ivu-modal-content{
         height:100% ;

          // background: #000;
      .cropper-crop-box{
        border-radius 0 !important
      }

      .vue-cropper{
          background-image:none !important;
          // background: #000;
          // height: 100%;
          // height: px2rem(1100);
       img{
          // margin-top: 40%;
          // position: relative;
          // width: 100%;
          // height:100%;
        }
        .cropper-box-canvas {
          // transform: scale(1, 1) !important
        }
        .cropper-view-box{
          outline: px2rem(3) solid #39f !important;
          border-radius 0 !important
          // position: absolute;
          border: none !important;
          // overflow: hidden;
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
        width: px2rem(120);
        margin-top:px2rem(4);
        font-size: px2rem(24);
      }
      }
    }
 }
 }
</style>

