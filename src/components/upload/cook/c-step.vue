<template>
  <div class="all">
    <h2>做法</h2>
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
                    <textarea @input="autoTextAreaHeight" v-model="item.value" placeholder="添加步骤说明"></textarea>
                </Col>
                <Col span="2" offset="1">
                    <img src="../img/DR-026.png" alt="" @click="handleRemove(index)"/>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="12" offset="6">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">再增加一行</Button>
                </Col>
            </Row>
        </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                index: 1,
                formDynamic: {
                    items: [
                        {
                            value: '',
                            index: 1,
                        }
                    ]
                }
            }
        },

        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
                for (var i=0;i<this.formDynamic.items.length;i++) {
                 this.formDynamic.items[i].index=i+1
                }
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
                 for (var i=0;i<this.formDynamic.items.length;i++) {
                 this.formDynamic.items[i].index=i+1
                }
                // console.log(this.formDynamic.items.length)
            },
            //textarea自适应高度
           autoTextAreaHeight:function(e){
               let o = e.target;
               o.style.height = o.scrollTop + o.scrollHeight + "px";
          }

        }
    }
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl'
.all {
  margin 0 px2rem(66) px2rem(70)
  h2 {
    font-size px2rem(30)
    margin-bottom px2rem(30)

  }
}
>>>.ivu-form{
  .ivu-form-item {
    textarea {
    outline none
    border none
    color #888
    font-size px2rem(26)
    width 100%
   }
   img {
     position relative
     top px2rem(8)
   }
   .ivu-btn {
     font-size px2rem(24)
     border-radius 20px
     color #888
     border-color: #444
   }
   .ivu-btn-dashed:active {
     color #5DB8E9
     border-color: #5DB8E9
   }
   .ivu-btn-dashed:hover {
     color #5DB8E9
     border-color: #5DB8E9
   }
  }
}
.content {
  // border-bottom 1px solid #333
  // height 74px
  line-height px2rem(40)
  margin-bottom px2rem(18)
}
>>>.ivu-upload {
  border none
  box-shadow 10px 10px 5px rgba(204, 204, 204, 0.4)
  border-radius 20px
  height px2rem(340)
  margin-bottom px2rem(36)
  img {
    margin-top px2rem(126)
  }
}
>>>.ivu-form-item-label {
  font-size px2rem(24)
}
>>>.ivu-form-item-label::before {
    content: ''
  }
</style>
