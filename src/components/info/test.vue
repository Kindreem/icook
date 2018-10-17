<template>
  <div>
     <div>
      <input type="button" id="tts_btn" @click="voiceText()" value="播放">
    </div>
  </div>
</template>

<script>
import { yuyin } from "@/api/api1";
import { gtok } from "@/api/api2";
let Base64 = require("js-base64").Base64;
export default {
  mounted() {
    //  gtok().then(res => {
    //   console.log(res)
    // });
    // let tok = localStorage.getItem("bdyytok");
    // yuyin("盐一克猪肉二两油一勺", "7666dwdawad", tok)
    //     .then(res => {
    //       console.log(res);
    //     })
  },
  methods: {
    voiceText() {
      // var url ="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&per=4&spd=5&text=" + encodeURI(str);
      // var audio = new Audio(url);
      // audio.src = url;
      // audio.play();
      let tok = localStorage.getItem("bdyytok");
      yuyin("part3：烹饪，步骤1，起锅$烧水放油,水开关火，步骤2，加入食材$加入黑木耳烫一分钟，步骤3，加入食材$加入小白菜至断生，步骤4，搅拌$将蒜，辣椒，盐，味精，木耳，小白菜搅拌均匀，", "7666dwdawad9", tok,15,4,5,0).then(res => {
        console.log(res);
        var url = res.request.responseURL
        //  let mp3 = Base64.decode(res.toString())
        //  let mp3 = Base64.encode(res.toString())
        //  console.log(Base64.encode(mp3))
        //  var url = 'data:audio/x-mpeg;base64,' + Base64.encode(mp3)
        //  console.log(url)
         var audio = new Audio(url);
         audio.src = url;
         audio.play();
        // const blob = new Blob([res], { type: "audio/mp3" });
        // const blobUrl = URL.createObjectURL(blob)
        // console.log(blob)
        // console.log(blobUrl)
        // const audio = new Audio(blobUrl);
        // audio.src = blobUrl
        // audio.play();
        if (res.data.err_subcode == 110) {
          console.log(123);
          gtok().then(res => {
            localStorage.setItem("bdyytok", res.refresh_token);
            tok = localStorage.getItem("bdyytok");
            console.log(tok);
            yuyin("步骤一：食材，白菜100克 ，黑木耳100克 ，", "7666dwdawadfe", tok,15,4,5,1).then(res => {
              // console.log(res);
              var url = res.request.responseURL
              var audio = new Audio(url);
              audio.src = url;
              audio.play();
            });
          });
        }
      });
    }
  }
};
</script>

