
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
        config.headers['Content-type']='application/json'
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

//自动登录
export const authlogin = (userphone,token)=>{
    return axios.post(`/sign/authlogin?userphone=${userphone}&token=${token}`).then(res=>res.data)
}

//上传凭证
export const upload = (status,type)=>{
    return axios.post(`/common/uploadToken?status=${status}&type=${type}`).then(res=>res.data)
}

//初次添加个人信息
export const addinfo = (userid,userphoto,usernickname,userbirthday,usersex)=>{
    return axios.post(`/userinfo/firstimpression?userid=${userid}&userphoto=${userphoto}&usernickname=${usernickname}&userbirthday=${userbirthday}&usersex=${usersex}`).then(res=>res.data)
}

// 实名认证
export const addid = (userid,name,idcard)=>{
  return axios.post(`/userinfo/idcardcheck?userid=${userid}&name=${name}&idcard=${idcard}`).then(res=>res.data)
}

export const faction = (userid)=>{
    return axios.post(`/faction/getall?userid=${userid}`).then(res=>res.data)
}

//获取所有流派段位信息
export const getrankall = (userid,factionsid)=>{
    return axios.post(`faction/getrankall?userid=${userid}&factionsid=${factionsid}`).then(res=>res.data)
}

//兴趣菜谱搜索
export const likesearch = (searchkey)=>{
  return axios.post(`/search/likesearch?searchkey=${searchkey}`).then(res=>res.data)
}

//获取官方菜谱
export const getcookbookbyid = (cookbookid)=>{
  return axios.post(`/cookbook/getcookbookbyid?cookbookid=${cookbookid}`).then(res=>res.data)
}

//兴趣推荐菜谱
export const likelist = ()=>{
  return axios.post('/search/likelist').then(res=>res.data)
}

// 新增用户菜谱
export const add = (list)=>{
  return axios.post('/userbook/add',list).then(res=>res.data)
}

//用户点赞排行榜
export const userbooktopten = ()=>{
  return axios.post('/userbook/userbooktopten').then(res=>res.data)
}
