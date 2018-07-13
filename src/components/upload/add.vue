<template>
  <div class="all">
    <section>
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div>
            <img src="./img/RW-027.png" alt="">
        </div>
      </Upload>
    </section>
    <section>
      <div class="title">
        <input placeholder="香辣牛蛙" style="width: 100%"/>
        <p>必填</p>
      </div>
      <div class="pic">
        <input placeholder="添加此时心情" style="width: 100%"/>
        <img src="./img/笑脸.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../assets/px2rem.styl'
.all {
  margin 0 px2rem(66) px2rem(70)
}
>>>.ivu-upload {
  border none
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  border-radius 20px
  height px2rem(340)
  img {
    margin-top px2rem(126)
  }
}
input {
  outline none
  font-size px2rem(24)
  height px2rem(72)
  border none
  border-bottom 1px solid #333
}
input:hover {
  border none
  outline none
  border-bottom 1px solid #333
}
.title {
  margin-top px2rem(60)
  height px2rem(72)
  position relative
  P {
    position absolute
    top px2rem(14)
    right 0px
    font-size px2rem(24)
    color #666
  }
}
.pic {
  margin-top px2rem(40)
  height px2rem(72)
  position relative
  img {
    position absolute
    top px2rem(20)
    right 0px
    width px2rem(32)
  }
}
</style>

