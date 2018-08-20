import axios from 'axios'


//设置请求的跟路径 
const baseURL = "http://192.168.1.37:8080"
axios.defaults.baseURL = baseURL


// 请求拦截器,给所有的请求加上token
 axios.interceptors.request.use(function(config) {
      // 取出localStorage中存储的token值
     let token = localStorage.getItem('mytoken')
     // 设置到请求头中 Access-Token这个名字是后台规定的
        config.headers['Access-Token'] = token
        return config
 })

//获取验证码. 
export const sendsms = params=>{
    return axios.post(`/common/sendsms?userphone=${params}`).then(res=>res.data)
}
//登录 
export const register = (userphone,smscode)=>{
    return axios.post(`/sign/login?userphone=${userphone}&smscode=${smscode}`).then(res=>res.data)
}
