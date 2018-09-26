import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home/index.vue"
import O_recipe from '../components/Official recipe/index.vue'
import Flow from '../components/flow/index.vue'
import Search from '../components/search/index.vue'
import U_menu from '../components/user menu/index.vue'
import Share from '../components/share/index.vue'
import Upload from '../components/upload/index.vue'
import Works from '../components/upload/works/index.vue'
import Cook from '../components/upload/cook/index.vue'

// import Upload from '../components/upload/menu/index.vue'

import member from '@/components/member/member'
import register from '@/components/register/register'
import login from '@/components/login/login'

import info from '@/components/info/info'
import impression from '@/components/info/impression'
import meet from '@/components/info/meet'

import load from '@/components/load/load.vue'

import conter from '@/components/conter/conter'
import achieve from '@/components/conter/achieve'
import badge from '@/components/conter/badge'
import show from '@/components/conter/show'

import tast from '@/components/tast/tast'
import genre from '@/components/genre/genre'
import dan from '@/components/dan/dan'

import {authlogin} from '@/api'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
           return savedPosition
   } else {
       if (from.meta.keepAlive) {
       　　from.meta.savedPosition = document.body.scrollTop;
       }
       return { x: 0, y: to.meta.savedPosition ||0}
   }
},

  // scrollBehavior(to, from,savedPosition) {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // },

  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },{
      path: "/",
      redirect: 'home',
    },{
      path: "/O_recipe/:id",
      name: "O_recipe",
      component: O_recipe,
    },{
      path: "/U_menu/:id",
      name: "U_menu",
      component: U_menu,
    },{
      path: "/flow",
      name: "flow",
      component: Flow,
    },{
      path: "/search",
      name: "search",
      component: Search,
    },{
      path: "/share",
      name: "share",
      component: Share,
    },{
      path: "/upload",
      name: "upload",
      component: Upload,
      children: [
        {
          path: "/works",
          name: "works",
          component: Works,
        },{
          path: "/cook",
          name: "cook",
          component: Cook,
        },
        // {
        //   path: "/menu",
        //   name: "menu",
        //   component: Menu,
        // },
      ]
    },
	// -----华丽的分割线-----

	 {
      path: '/member',
      name: 'member',
      component: member,
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login/login',
      name: 'login',
      component: login
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/info/impression',
      name: 'impression',
      component:impression
    },
    {
      path: '/info/meet',
      name: 'meet',
      component: meet
    },
    {
      path: '/load',
      name: 'load',
      component:load
    },
    {
      path: '/conter',
      name: 'conter',
      component:conter
    },
    {
      path: '/conter/achieve',
      name: 'achieve',
      component:achieve
    },
    {
      path: '/conter/badge',
      name: 'badge',
      component:badge
    },
    {
      path: '/conter/show',
      name: 'show',
      component:show
    },
    {
      path: '/tast/tast',
      name: 'tast',
      component:tast
    },
    {
      path: '/genre/genre',
      name: 'genre',
      component:genre
    },
    {
      path: '/dan/dan',
      name: 'dan',
      component:dan
    }
  ]
})

// 注册一个全局守卫，作用是在路由跳转前，对路由进行判断，防止未登录的用户跳转到其他需要登录的页面去
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('mytoken')
//   let userphone = localStorage.getItem('myphone')
//   authlogin(userphone,token).then(res=>{
//     if(res.code==200){
//         localStorage.setItem('mytoken', res.data.token)
//         next()
//      } else{
//         //如果没有登录，访问非登录页面,则跳转到登录页面
//       if(to.path!== '/member' && to.path!=='/register'){
//         next({path: '/member'})
//       }
//       // if(to.path!=='/register'){
//       //   next({path: '/member'})
//       // }
//       else{
//         //如果没有登录，但访问的是登录页面,直接进入
//         next()
//       }
//     }
//   })
// })
export default router

