import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import LunchMnRcmndtn from './views/LunchMnRcmndtn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    // {
    //   path: '/',
    //   name: 'lunchMnRcmndtn',
    //   component: LunchMnRcmndtn
    // },
    {
      path: '/lunchMnDtl',
      name: 'lunchMnDtl',
      component: () => import(/* webpackChunkName: "lunchMnDtl" */ './views/LunchMnDtl.vue')
    },
    {
      path: '/lunchMnMp',
      name: 'lunchMnMp',
      component: () => import(/* webpackChunkName: "lunchMnMp" */ './views/LunchMnMp.vue')
    }
  ]
})
