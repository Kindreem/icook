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
                    <Upload
                      multiple
                      type="drag"
                      action="#">
                       <div>
                          <img src="../img/RW-027.png" alt="">
                       </div>
                    </Upload>
                </Col>
            </Row>
            <Row class="content">
                <Col span="20" offset="1">
                    <i-input type="textarea" :autosize="true" placeholder="添加步骤说明"></i-input></textarea>
                </Col>
                <Col span="2" offset="1">
                    <img src="../img/DR-026.png" alt="" @click="handleRemove(index)"/>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="12" offset="6">
                    <Button type="dashed" long @click="handleAdd">增加步驟</Button>
                </Col>
            </Row>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      formDynamic: {
        items: [
          {
            value: "",
            index: 1
          }
        ]
      }
    };
  },

  methods: {
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
        status: 1
      });
      for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
    },
    handleRemove(index) {
      this.formDynamic.items.splice(index, 1);
      for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
      // console.log(this.formDynamic.items.length)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(80) px2rem(0);

  .ban {
    height: px2rem(80)
    background: #5DB8E9;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
  }

  h2 {
    padding-top: px2rem(20)
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
     font-size px2rem(32)
     border-radius px2rem(20)
     box-shadow: 10px 10px 14px rgba(204, 204, 204, 0.4);
     border none
     color #fff
     border-color: #444
     margin-top px2rem(40)
     padding-left px2rem(72)
     background #5DB8E9 url('../img/1-036-1.png') no-repeat 20% 50%
     background-size px2rem(42)
    }

    .ivu-btn-dashed:active {
      color: #5DB8E9;
      border-color: #5DB8E9;
    }

    .ivu-btn-dashed:hover {
      color: #5DB8E9;
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

>>>.ivu-upload {
  border: none;
  box-shadow: 10px 10px 5px rgba(204, 204, 204, 0.4);
  border-radius: 20px;
  height: px2rem(340);
  margin-bottom: px2rem(36);

  img {
    margin-top: px2rem(126);
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
  border-bottom: 0.1px solid #999 !important
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
</style>
