<template>
  <div class="all">
    <h2>用料</h2>
    <Form ref="formDynamic" :model="formDynamic">
        <FormItem
                class="content"
                v-for="(item, index) in formDynamic.items"
                v-if="item.status"
                :key="index"
                :prop="'items.' + index + '.value'"
                :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
            <Row>
                <Col span="9" offset="1">
                    <input type="text" v-model="item.value1" placeholder="调料：如盐"/>
                </Col>
                <Col span="9">
                    <input type="text" v-model="item.value2" placeholder="用量：如1勺"/>
                </Col>
                <Col span="2" offset="3">
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
                            value1: '',
                            value2: '',
                            index: 1,
                            status: 1
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
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl'
.all {
  margin 0 px2rem(66) px2rem(50)
  h2 {
    font-size px2rem(30)
    margin-bottom px2rem(20)

  }
}
>>>.ivu-form{
  .ivu-form-item {
    input {
    outline none
    border none
    color #888
    height px2rem(74)
    font-size px2rem(26)

   }
   img {
     position relative
     top px2rem(20)
   }
   .ivu-btn {
     font-size px2rem(24)
     border-radius px2rem(20)
     color #888
     border-color: #444
     margin-top px2rem(70)
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
  border-bottom 1px solid #333

}
</style>
