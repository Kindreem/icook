// import axios from 'axios'

// //设置请求的跟路径
// const baseURL = "http://192.168.1.4:8080"
// axios.defaults.baseURL = baseURL

// // 请求拦截器,给所有的请求加上token
// axios.interceptors.request.use(function(config) {
//   // 取出localStorage中存储的token值
//  // 设置到请求头中 Access-Token这个名字是后台规定的
//     config.headers['content-type']='application/json;charse=UTF-8'

//     return config
// })

// export const updat = (list)=>{
//   return axios.post('/icook-web-sysapi/process/update2',list).then(res=>res.data)
// }
