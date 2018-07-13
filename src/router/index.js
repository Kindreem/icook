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
// import Upload from '../components/upload/menu/index.vue'

import member from '@/components/member/member'
import register from '@/components/register/register'
import pRegister from '@/components/register/psd_register'
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

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },

  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },{
      path: "/O_recipe",
      name: "O_recipe",
      component: O_recipe,
    },{
      path: "/U_menu",
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
      path: '/',
      name: 'member',
      component: member,
    },
    {
      path: '/register/register',
      name: 'register',
      component: register
    },
    {
      path: '/register/psd',
      name: 'psd',
      component: pRegister
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
      path: '/load/load',
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
