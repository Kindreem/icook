<template>
  <div class="all">
    <section>
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div>
            <img src="./img/RW-027.png" alt="">
            <h4>添加图片或短视频</h4>
        </div>
      </Upload>
    </section>
    <section>
      <div class="title">
        <input placeholder="添加菜谱名称" style="width: 100%"/>
        <p>必填</p>
      </div>
      <div class="pic">
        <i-input type="textarea" :autosize="true" placeholder="添加菜谱说明"></i-input>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(80) px2rem(0);
}

>>>.ivu-upload {
  border: none;
  box-shadow: 10px 10px 16px rgba(204, 204, 204, 0.4);
  border-radius: 20px;
  height: px2rem(360);

  img {
    margin-top: px2rem(114);
    width px2rem(96)
  }
  h4{
    margin-top px2rem(20)
    font-size px2rem(25)
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
    border-bottom: 1px solid #999 !important
  }

  >>>.ivu-input {
    // min-height: 40px;
    color: #999;
    outline: none;
    border: none;
    font-size: px2rem(26);
    width: 100%;
    border-bottom: 1px solid #999 !important
    // line-height px2rem(30)
    padding-bottom 16px
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
  border-bottom: 1px solid #999 !important
}

>>>.ivu-input:focus {
  border: 0;
  outline: 0;
  border-bottom: 1px solid #999 !important
  box-shadow: none
}
</style>

