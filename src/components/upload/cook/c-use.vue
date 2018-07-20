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
.all {
  margin 0 66px 50px
  h2 {
    font-size 30px
    margin-bottom 20px

  }
}
>>>.ivu-form{
  .ivu-form-item {
    input {
    outline none
    border none
    color #888
    height 74px
    font-size 26px
   }
   img {
     position relative
     top 20px
   }
   .ivu-btn {
     font-size 24px
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
  border-bottom 1px solid #333

}
</style>
