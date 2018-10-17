import axios from 'axios'
// import md5 from "js-md5";
// let Base64 = require("js-base64").Base64;

// 请求拦截器,给所有的请求加上token
// axios.interceptors.request.use(function(config) {

//  // 设置到请求头中 Access-Token这个名字是后台规定的

//     config.headers['Content-Type']='text/plain'
//     config.headers['Access-Control-Allow-Origin']='*'
//     config.headers['Access-Control-Allow-Headers']="x-requested-with,content-type"
//     return config
// })
var axiosone = axios.create({
  baseURL: "/proxy"
  });
// //设置请求的跟路径
// const baseURL =
// axios.defaults.baseURL = baseURL
// const APPID = "5bab3922"
// const apiKey = "ab3a74259a5221837d96729376fe1c68"
// const AUE = "raw"
// // 请求拦截器,给所有的请求加上token
// axios.interceptors.request.use(function(config) {
//  let curTime = new Date().toLocaleTimeString()
//  let param = "{\"aue\":\""+AUE+"\",\"auf\":\"audio/L16;rate=16000\",\"voice_name\":\"xiaoyan\",\"engine_type\":\"intp65\"}"
//  let paramBase64 = Base64.encode(param)
//  let checkSum = md5(apiKey+curTime+param)
//  // 设置到请求头中 Access-Token这个名字是后台规定的
//     config.headers['content-Type']='application/x-www-form-urlencoded; charset=utf-8'
//     config.headers['X-CurTime']= curTime
//     config.headers['X-Param']= paramBase64
//     config.headers['X-Appid']= APPID
//     config.headers['X-CheckSum']= checkSum
//     // config.headers['X-Real-Ip']= "127.0.0.1"
//     return config
// })



export const yuyin = (tex,cuid,tok,spd,pit,vol,per)=>{
  return axiosone.post(`?tex=${tex}&lan=zh&cuid=${cuid}&ctp=1&aue=3&tok=${tok}&spd=${spd}&spd=${pit}&vol=${vol}&per=${per}`).then(res=>res)
}
