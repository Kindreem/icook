<template>
  <div id="demo">
    <vueCropper
    ref="cropper"
    :img = "option.img"
    :outputSize = "option.size"
    outputType="png"
    :full="option.full"
    :autoCrop = "option.autoCrop"
    :autoCropWidth= "option.autoCropWidth"
    :autoCropHeight= "option.autoCropHeight"
    :fixedBox="option.fixedBox"
    :canMoveBox="option.canMoveBox"
    :original="option.original"
    @realTime="realTime"
    ></vueCropper>
<label class="btn" for="uploads">upload</label>
<input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">

   <form >
        <div class="item">
            <input v-model="nickname" placeholder="请输入2至24个字符" class="nickname"/>
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
                >
                </mt-datetime-picker>
            <p id="sel">仅自己可见></p>
        </div>
         <div class="item" >
            <p class="sex">选择您的性别</p>
             <div class="sex2">
                  <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">男</label>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">女</label>
             </div>
        </div>
       <p class="txt">选择您的性别完成奖励,完成后可获得<span>烹饪之心</span>的徽章</p>
       <router-link to="/info/meet">
           <input type="button" class="next" value="下一步">
       </router-link>

<script>
import vueCropper from 'vue-cropper'
export default {
  components: {
    vueCropper
  },
  data() {
    return{
      crap: false,
			previews: {},
			lists: [
				{
					img: 'https://fengyuanchen.github.io/cropper/images/picture.jpg'
				},
				{
					img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg'
				}
			],
      option: {
				img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
				size: 1,
				full: false,
        outputType: 'png',
        fixedNumber:[1,1],
        autoCrop:true,
        fixedBox:true,
				original: false,
        canMoveBox: false,
        autoCropWidth:400,
        autoCropHeight:400
			},
    }
  },
  methods:{
    changeImg () {
			this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
		},
		startCrop () {
			// start
			this.crap = true
			this.$refs.cropper.startCrop()
		},
		stopCrop () {
			//  stop
			this.crap = false
			this.$refs.cropper.stopCrop()
		},
		clearCrop () {
			// clear
			this.$refs.cropper.clearCrop()
		},
		// 实时预览函数
		realTime (data) {
			this.previews = data
		},
		finish (type) {
			// 输出
			var test = window.open('about:blank')
			test.document.body.innerHTML = '图片生成中..'
			if (type === 'blob') {
				this.$refs.cropper.getCropBlob((data) => {
					var test = window.open('')
					test.location.href = window.URL.createObjectURL(data)
				})
			} else {
				this.$refs.cropper.getCropData((data) => {
					test.location.href = data
				})
			}
		},

		down (type) {
			// event.preventDefault()
			var aLink = document.createElement('a')
			aLink.download = 'demo'
			// 输出
			if (type === 'blob') {
				this.$refs.cropper.getCropBlob((data) => {
					this.downImg = data
					aLink.href = data
					aLink.click()
				})
			} else {
				this.$refs.cropper.getCropData((data) => {
					this.downImg = data
					aLink.href = data
					aLink.click()
				})
			}
		},

		uploadImg (e, num) {
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
					this.option.img = data
				} else if (num === 2) {
					this.example2.img = data
				}
			}
			// 转化为base64
			// reader.readAsDataURL(file)
			// 转化为blob
			reader.readAsArrayBuffer(file)
					this.$refs.cropper.getCropBlob((data) => {
			// do something
			console.log(data)
		})
		}
  },
}
</script>

<style lang="scss">
#demo{
  .vue-cropper{
    height:600px;
    // background: pink;
    img{
      margin-top: px2rem(20);
      width: px2rem(24);
    }
  }
    .demo-avatar{
    p{
        font-size: px2rem(20);
        color: #199ED8;
        margin: 20px 0;
    }
    span{
        width: px2rem(96);
        height: px2rem(96);
        border-radius: 50%;

    }
}

  .item{
       margin: px2rem(20) auto;
       width:  px2rem(250);
       display: flex;
       position: relative;

    .nickname{
        width:  px2rem(250);
        height:  px2rem(25);
        font-size: px2rem(12);
        border: none;
        position: relative;

   }
    .nickname::-webkit-input-placeholder{
        color:#999;
    }
   img{
       width:  px2rem(15);
       height:  px2rem(15);
       position: absolute;
       right: px2rem(2);
       top: px2rem(5);
   }
    #sel,{
         height:  px2rem(20);
         font-size: px2rem(12);
         line-height:  px2rem(20);
         right: 0;
         position: absolute;
         color: #999;
    }
    .age,.sex{
         font-size: px2rem(12);
         line-height: px2rem(20);
         background: #fff;
         color: #666;
    }
    .sex2{
        flex: 1;
        text-align: right;
        input{
            width: px2rem(14);
            height:px2rem(14);
            margin-left: px2rem(12);
            vertical-align: middle;
        }
        label{
            font-size: px2rem(12);
            vertical-align: middle;
            color: #999;
         }
    }

  }
    .txt{
        font-size:px2rem(11);
        margin-top:px2rem(80);
        color: #999;
        span{
            color: #199ED8;
        }
    }
    .mint-popup{
        top: 50%;
        width: 70%;
        left: 15%;
        border-radius: 10px;
        background: rgba(255,255,255,.9);
        height: px2rem(180);
        transform: none;
        .picker-slot-wrapper{
            margin-top:px2rem(-15) ;
        }
        .picker-items{
            height: px2rem(100);
            margin:px2rem(25) 0;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            .picker-item{
                font-size: px2rem(15);
                // transform: perspective(600px) rotateY(20deg);
                transform: rotate3d(1, 0, 0, 50deg) translate3d(0px, 0px, px2rem(2));
            }
            .picker-item.picker-selected{
                font-size: px2rem(16);
                transform: rotate3d(1, 0, 0, 0) translate3d(0px, 0px, px2rem(0));
            }
        }
        .picker-toolbar{
            position: absolute;
            height: px2rem(25);
            bottom: px2rem(12);
            width: 100%;
            display: flex;
            justify-content: center;
            span{
                font-size: px2rem(14);
                display: inline-block;
                margin:0 px2rem(20);
                width: px2rem(85);
                border:1px solid #999;
                border-radius: px2rem(3);
                line-height: px2rem(25);
                color: #999;
            }
            span:last-child{
                color: #199ED8;
                border: 1px solid #199ED8;
            }
        }
    }
     .next{
      width: px2rem(270);
      height: px2rem(40);
      margin-top: px2rem(10);
      border-radius:  px2rem(10);
      background: white;
      outline: none;
    }
    .cropper-face{
      background: none;
    }
  }
}

</style>
