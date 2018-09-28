<template>
  <div class="all">
    <Form ref="formDynamic1" :model="formDynamic">
        <FormItem
                class="content"
                v-for="(item, index) in formDynamic.items"
                v-if="item.status"
                :key="index"
                :prop="'items.' + index + '.value'"
                :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
            <Row>
                <Col span="11">
                    <input type="text" v-model="item.value1" placeholder="添加食材"/>
                </Col>
                <Col span="11">
                    <input type="text" v-model="item.value2" placeholder="添加用量"/>
                </Col>
                <Col span="1">
                    <img src="../img/DR-026.png" alt="" @click="handleRemove(index)"/>
                </Col>
            </Row>
        </FormItem>
        <FormItem class="bot">
            <Row>
                <Col span="12" offset="6">
                    <Button type="dashed" long @click="handleAdd">添加食材</Button>
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
            value1: "",
            value2: "",
            index: 1,
            status: 1
          }
        ]
      },
      userFoodDtos: ""
    };
  },
  watch: {
    formDynamic: {

      //深度监听，可监听到对象、数组的变化
      handler(val) {
        let userFoodDtos = [];
        val.items.forEach(value => {
          var str = `{"foodname": "${value.value1}","weight": "${value.value2}"}`
          var obj = JSON.parse(str)
          userFoodDtos.push(obj);
          //  value.value1 = foodname
          //  value.value2 = weight

          //  delete value.value
          //  console.log(value)
        });
        this.userFoodDtos = userFoodDtos
           console.log(this.userFoodDtos)
        this.$emit("childByValue3", this.userFoodDtos);

      },
      deep: true
    }
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
        value1: "",
        value2: "",
        index: this.index,
        status: 1,
      });
      for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
      // console.log(this.formDynamic.items)
    },
    handleRemove(index) {
      this.formDynamic.items[index].status = 0;
      this.formDynamic.items.splice(index,1)
       for (var i = 0; i < this.formDynamic.items.length; i++) {
        this.formDynamic.items[i].index = i + 1;
      }
      // console.log(this.formDynamic.items)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/px2rem.styl';

.all {
  margin: 0 px2rem(80) px2rem(50);
}

>>>.ivu-form {
  .ivu-form-item {
    input {
      outline: none;
      border: none;
      color: #999;
      height: px2rem(74);
      font-size: px2rem(26);
    }

    input::-webkit-input-placeholder { /* WebKit browsers */
      color: #999;
    }

    img {
      position: relative;
      top: px2rem(20);
    }

    .ivu-btn {
      font-size: px2rem(32);
      border-radius: px2rem(20);
      box-shadow: 10px 10px 14px rgba(204, 204, 204, 0.4);
      border: none;
      color: #5DB8E9;
      border-color: #444;
      margin-top: px2rem(40);
      padding-left: px2rem(72);
      background: url('../img/1-036.png') no-repeat 20% 50%;
      background-size: px2rem(42);
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
  border-bottom: 1px solid #333;
}
</style>
