<template>
  <div>
    <add @childByValue="childByValue" @childByValue1="childByValue1" @childByValue2="childByValue2" />
    <cuse @childByValue3="childByValue3"/>
    <cstep @childByValue4="childByValue4"/>
    <send :userBookDto="userBookDto"/>
  </div>
</template>

<script>
import add from "../add";
import send from "../send";
import cuse from "./c-use.vue";
import cstep from "./c-step.vue";
export default {
  components: {
    add,
    send,
    cuse,
    cstep
  },
  data() {
    return {
      userBookDto: {
        ubdescription: "",
        ubname: "",
        ubthumbimg: "",
        userFoodDtos: "",
        userStepDtos: "",
        userid: ""
      }
    };
  },
  created () {
    let userid = localStorage.getItem("userid");
    this.userBookDto.userid = userid
  },
  methods: {
    childByValue: function(ubthumbimg) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubthumbimg = ubthumbimg;
      // console.log(this.ubthumbimg);
    },
    childByValue1: function(ubname) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubname = ubname;
      // console.log(this.ubname);
    },
     childByValue2: function(ubdescription) {
      // childValue就是子组件传过来的值
      this.userBookDto.ubdescription = ubdescription;
      // console.log(this.ubdescription);
      // console.log(this.userFoodDtos);

    },
    childByValue3: function(userFoodDtos) {
      // childValue就是子组件传过来的值
      this.userBookDto.userFoodDtos = userFoodDtos;
      // console.log(this.userFoodDtos);
    },
    childByValue4: function(userStepDtos) {
      // childValue就是子组件传过来的值
      this.userBookDto.userStepDtos = userStepDtos;
      // console.log(this.userStepDtos);
    }
  }
};
</script>

