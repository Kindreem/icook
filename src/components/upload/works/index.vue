<template>
  <div>
    <add @childByValue="childByValue" @childByValue1="childByValue1" @childByValue2="childByValue2"/>
    <send :ubdescription='ubdescription' :ubname='ubname' :ubthumbimg='ubthumbimg' :userid='userid'/>
  </div>
</template>

<script>
import add from "../add";
import send from "../send";
export default {
  components: {
    add,
    send
  },
  data() {
    return {
        ubdescription: "",
        ubname: "",
        ubthumbimg: "",
        userid: ""
    };
  },
  created() {
    let userid = localStorage.getItem("userid");
    this.userid = userid;
  },
  methods: {
    childByValue: function(ubthumbimg) {
      // childValue就是子组件传过来的值
      this.ubthumbimg = ubthumbimg;
      // console.log(this.ubthumbimg);
    },
    childByValue1: function(ubname) {
      // childValue就是子组件传过来的值
      this.ubname = ubname;
      // console.log(this.ubname);
    },
    childByValue2: function(ubdescription) {
      // childValue就是子组件传过来的值
      this.ubdescription = ubdescription;
      // console.log(this.ubdescription);
      // console.log(this.userFoodDtos);
    }
  }
};
</script>
