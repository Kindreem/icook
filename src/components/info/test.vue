<template>
  <div><button>12</button></div>
</template>

<script>
import { updat } from "@/api/api1";
export default {
  created() {
    let list = {
      ubdescription: "1",
      ubname: "2",
      ubthumbimg: "3",
      userFoodDtos: [
        {
          foodname: "4",
          weight: "5"
        }
      ],
      userStepDtos: [
        {
          description: "6",
          img: "7"
        }
      ]
    };
    // console.log(JSON.stringify(list));
    updat(JSON.stringify(list)).then(res => {
      console.log(res);
    });
  }
};
</script>
