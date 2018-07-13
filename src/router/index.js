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
    },{
      path: "/",
      redirect: '/home'
    },
  ]
})
