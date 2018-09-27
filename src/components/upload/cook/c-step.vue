<template>
  <div class="all">
    <div class="ban">
      <h2>步骤分解</h2>
    </div>
    <Form ref="formDynamic" :model="formDynamic" label-position="top">
        <FormItem
                v-for="(item, index) in formDynamic.items"
                :key="index"
                :label="'步骤 ' + item.index"
                :prop="'items.' + index + '.value'"
                :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
            <Row>
                <Col span="24">
                <div class="ivu-upload" @click="addshu(index)">
                   <label >
                     <input v-if="ishow" type="file" id="uploads" ref="referenceUpload" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)"/>
                       <div class="imgb" >
                          <img src="../img/RW-027.png" alt="">
                          <h4>添加图片</h4>
                          <div class="imgt" :style="'background: url('+item.img+') no-repeat center;'"></div>
                       </div>
                   </label>
                   </div>
                </Col>
            </Row>
            <Row class="content">
                <Col span="20" offset="1">
                    <i-input type="textarea" :autosize="true" placeholder="添加步骤说明" v-model="item.value"></i-input>
                </Col>
                <Col span="2" offset="1">
                    <img src="../img/DR-026.png" alt="" @click="handleRemove(index)"/>
                </Col>
            </Row>


        </FormItem>
        <FormItem>
            <Row>
                <Col span="12" offset="6">
                    <Button type="dashed" long @click="handleAdd">增加步骤</Button>
                </Col>
            </Row>
        </FormItem>
    </Form>
    <Modal v-model="infoimg" width="100%" class="infoimg">
            <vueCropper
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
              :fixedNumber="option.fixedNumber"
              :original="option.original"
              :canMove="option.canMove"
              :fixed="option.fixed"
              :canScale="option.canScale"
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
import { add, upload } from "@/api";
let Base64 = require("js-base64").Base64;
import vueCropper from "vue-cropper";
import moment from "moment";
export default {
  components: {
    vueCropper
  },
  data() {
    return {
      date2: "",
      previews: "",
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
        canScale: true,
        autoCropWidth: 480,
        autoCropHeight: 288,
        // 开启宽度和高度比例
					// fixed: true,
					// fixedNumber: [5, 3]
      },
      infoimg: false, //截图
      files: [], // 文件

      index: 1,
      formDynamic: {
        items: [
          {
            value: "",
            index: 1,
            img: ""
          }
        ]
      },
      uploadToken: "",
      upkey: "",
      url: '',
      shu: '',
      userStepDtos: '',
      img:"",
      ishow:'true' //解决同文件bug
    };
  },
  mounted() {
     let width = document.documentElement.clientWidth*0.7
      this.option.autoCropWidth= width
      this.option.autoCropHeight = width/5*3
    //页面加载 拉去token
    upload(1, 1).then(res => {
      this.uploadToken = res.data.token;
      this.upkey = res.data.key;
    });
  },
  methods: {
    rotate() {
      this.$refs.cropper.rotateRight()
    },
    end() {
      this.infoimg=false
      this.ishow=true
    },
    // beforeUpload(file) {
    //   let newdate = Date.parse(new Date());
    //   newdate = md5(newdate.toString());
    //   let suffix = file.name;
    //   let arr = suffix.split(".");
    //   this.suffix = arr[arr.length - 1];

    //   let url = `${this.upkey}${newdate}.${this.suffix}`;

    //   this.uploadToken.key = url;

    //   // console.log(this.uploadToken)
    //   return this.uploadToken;
    // },
    // handleSuccess(res) {
    //   this.url = `http://img.ichushen.cn/${res.key}`;
    //   // console.log(index);
    //   console.log(this.url);

    //   // this.formDynamic.items[index].img = url;
    //   // this.$emit("childByValue", this.ubthumbimg);
    //   // Uimg((index)=>{
    //   //   this.formDynamic.items[index].img = url;
    //   // })
    // },
    addshu(index) {
      this.shu=index

    },

    // 实时预览函数
		realTime (data) {
		},
    uploadImg(e, num) {
      this.infoimg = true
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      this.ishow=false
      console.log(file)
      // if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
      //   alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
      //   return false;
      // }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        // if (typeof e.target.result === "object") {
        //   // 把Array Buffer转化为blob 如果是base64不需要
        //   data = window.URL.createObjectURL(new Blob([e.target.result]));
        // } else {
          data = e.target.result;
        // }
        // if (num === 1) {
          console.log(data)
          this.img = data;
        // }
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      // reader.readAsArrayBuffer(file)

      // var t;
      // var self = this;
      // clearTimeout(t);
      // console.log(index);
      // t = setTimeout(function() {
      //   self.formDynamic.items[index].img = self.url;
      //   console.log(self.formDynamic.items[index].img);
      // }, 800);

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
              self.url = picUrl
              console.log(self.url)
              self.formDynamic.items[self.shu].img = self.url;
            //   var t;
            //   clearTimeout(t);
            //   console.log(self.shu);
            //   t = setTimeout(function() {
            //   self.formDynamic.items[self.shu].img = self.url;
            //    console.log(self.formDynamic.items[self.shu].img)
            // }, 0);
         }
     }
     xhr.open("POST", url, true);
     xhr.setRequestHeader("Content-Type", "application/octet-stream");
     xhr.setRequestHeader("Authorization", "UpToken "+this.uploadToken+"");
     xhr.send(picBase);
    })
  },






    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleAdd() {
      this.index++;
      this.formDynamic.items.push({
        value: "",
        index: this.index,
        status: 1,
        img: ""
      });
      for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
      // console.log(this.formDynamic.items);
    },
    handleRemove(index) {
      this.formDynamic.items.splice(index, 1);
      for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
      // console.log(this.formDynamic.items.length)
    }
  },
  watch: {
    formDynamic: {
      //深度监听，可监听到对象、数组的变化
      handler(val) {
        var userStepDtos=[];
        val.items.forEach(value => {
          var str = `{"description": "${value.value}","img": "${value.img}"}`
          var obj = JSON.parse(str)
        //  console.log(obj)

          userStepDtos.push(obj);
          //  value.value1 = foodname
          //  value.value2 = weight

          //  delete value.value
          //  console.log(value)
        });

        this.userStepDtos = userStepDtos
        // console.log(this.userStepDtos)
        this.$emit("childByValue4", this.userStepDtos);
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(80) px2rem(0);

  .ban {
    height: px2rem(80);
    background: #5DB8E9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
  }

  h2 {
    padding-top: px2rem(20);
    font-size: px2rem(32);
    margin-bottom: px2rem(30);
    color: #fff;
  }
}

>>>.ivu-form {
  .ivu-form-item {
    img {
      position: relative;
      top: px2rem(8);
    }

    .ivu-btn {
      font-size: px2rem(32);
      border-radius: px2rem(20);
      box-shadow: 10px 10px 14px rgba(204, 204, 204, 0.4);
      border: none;
      color: #fff;
      border-color: #444;
      margin-top: px2rem(40);
      padding-left: px2rem(72);
      background: #5DB8E9 url('../img/1-036-1.png') no-repeat 20% 50%;
      background-size: px2rem(42);
    }

    .ivu-btn-dashed:active {
      color: #fff;
      border-color: #5DB8E9;
    }

    .ivu-btn-dashed:hover {
      color: #fff;
      border-color: #5DB8E9;
    }
  }
}

.content {
  // border-bottom 1px solid #333
  // height 74px
  line-height: px2rem(40);
  margin-bottom: px2rem(18);
}

.ivu-upload {
  // position relative
  border: none;
  box-shadow: 10px 10px 5px rgba(204, 204, 204, 0.4);
  border-radius: 20px;
  height: px2rem(360);
  margin-bottom: px2rem(36);
  text-align center
  input {
    // height px2rem(360)
    // width 100%
  }
  img {
    margin-top: px2rem(114);
    width: px2rem(96);
  }

  h4 {
    margin-top: px2rem(20);
    font-size: px2rem(25);
  }
}

>>>.ivu-form-item-label {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: px2rem(32);
  // color #999
}

>>>.ivu-form-item-label::before {
  content: '';
}

>>>.ivu-input {
  // min-height: 40px;
  color: #999;
  outline: none;
  border: none;
  font-size: px2rem(26);
  width: 100%;
  border-bottom: 0.1px solid #999;
}

>>>.ivu-input-wrapper {
  border-bottom: 0.1px solid #999 !important;
}

>>>.ivu-input::-webkit-input-placeholder { /* WebKit browsers */
  color: #999;
}

>>>.ivu-input:hover {
  border: 0;
  outline: 0;
  border-bottom: 1px solid #999;
}

>>>.ivu-input:focus {
  border: 0;
  outline: 0;
  border-bottom: 1px solid #999;
  box-shadow: none;
}

.imgb {
  position: relative;
}

.imgt {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: px2rem(360);
  background-size: cover !important;
  border-radius 20px
}
>>>.ivu-form-item-error-tip  {
  display none !important
}


.infoimg{

    background: #199ed8;
     >>>.ivu-modal{
      // touch-action: none;
      top: 0;
      height: 100%;
      margin 0
      // box-box-sizing border-box
      .ivu-modal-content{
         height:100% ;
          // background: #000;
      .vue-cropper{
          background-image:none !important;
          // background: #000;
          height: px2rem(480);
       img{
          // margin-top: 40%;
          // position: relative;
          width: 100%;
          // height:100%;
        }
        .cropper-view-box{

          img {
            // width px2rem(300) !important
            // heiht auto !important
          }
        }
        .cropper-box-canvas {
          img {
            // width px2rem(300) !important
          }
        }
        .cropper-view-box{

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

