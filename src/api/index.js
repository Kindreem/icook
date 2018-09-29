
import axios from 'axios'

//设置请求的跟路径
const baseURL = "http://api.ichushen.cn/"
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

//微信登录
export const wxlogin = (code)=>{
    return axios.post(`/sign/getWxUserinfo?code=${code}`).then(res=>res.data)
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

//菜谱搜索
export const searchbook = (searchkey,pagenum,pagesize,searchsort)=>{
  return axios.post(`/search/searchbook?searchkey=${searchkey}&pagenum=${pagenum}&pagesize=${pagesize}&searchsort=${searchsort}
  `).then(res=>res.data)
}

//根据菜谱id获取官方菜谱
export const getcook = (cookbookid)=>{
  return axios.post(`/cookbook/getcookbookbyid?cookbookid=${cookbookid}`).then(res=>res.data)
}

//根据菜谱id获取用户菜谱
export const getuser = (ubid,userid)=>{
  return axios.post(`/userbook/getuserbookbyid?ubid=${ubid}&userid=${userid}`).then(res=>res.data)
}

// 新增用户菜谱
export const add = (list)=>{
  return axios.post('/userbook/add',list).then(res=>res.data)
}

//用户点赞排行榜
export const userbooktopten = ()=>{
  return axios.post('/userbook/userbooktopten').then(res=>res.data)
}

//用户菜谱点赞
export const bookstar = (ubid,userid)=>{
  return axios.post(`/userbook/bookstar?ubid=${ubid}&userid=${userid}`).then(res=>res.data)
}

//取消点赞
export const bookunstar = (ubid,userid)=>{
  return axios.post(`/userbook/bookunstar?ubid=${ubid}&userid=${userid}`).then(res=>res.data)
}

//收藏
export const bookcollect = (ubid,userid)=>{
  return axios.post(`/userbook/bookcollect?ubid=${ubid}&userid=${userid}`).then(res=>res.data)
}

//取消收藏
export const bookuncollect = (ubid,userid)=>{
  return axios.post(`/userbook/bookuncollect?ubid=${ubid}&userid=${userid}`).then(res=>res.data)
}

//我的菜谱
export const mybook = (userid)=>{
  return axios.post(`/user/mybook?userid=${userid}`).then(res=>res.data)
}

//我的收藏的菜谱
export const mybookcollect = (userid)=>{
  return axios.post(`/user/mybookcollect?userid=${userid}`).then(res=>res.data)
}

//修改个人信息
export const updateuser = (userid,userphoto,usernickname,userbirthday,usersex)=>{
  return axios.post(`/userinfo/updateuser?userid=${userid}&userphoto=${userphoto}&usernickname=${usernickname}&userbirthday=${userbirthday}&usersex=${usersex}`).then(res=>res.data)
}

//根据流派id获取官方菜谱
export const getcooklist = (factionsid,pagenum,pagesize)=>{
  return axios.post(`/cookbook/listbyfactionsid?factionsid=${factionsid}&pagenum=${pagenum}&pagesize=${pagesize}`).then(res=>res.data)
}

//上传作品
export const addfeed = (userid,ufname,ufimg,uftext)=>{
  return axios.post(`/userfeed/addfeed?userid=${userid}&ufname=${ufname}&ufimg=${ufimg}&uftext=${uftext}`).then(res=>res.data)
}

//我的作品
export const myfeed = (userid)=>{
  return axios.post(`/userfeed/myfeed?userid=${userid}`).then(res=>res.data)
}

//我的成就
export const myachievement = (userid)=>{
  return axios.post(`user/myachievement?userid=${userid}`).then(res=>res.data)
}



//任务列表
export const tastlist = (userid)=>{
  return axios.post(`task/list?userid=${userid}`).then(res=>res.data)
}
//领取任务

export const receive= (userid,utid)=>{
  return axios.post(`task/receive?userid=${userid}&utid=${utid}`).then(res=>res.data)
}
//作品详情
export const getfeed = (ufid)=>{
  return axios.post(`/userfeed/getfeed?ufid=${ufid}`).then(res=>res.data)
}
