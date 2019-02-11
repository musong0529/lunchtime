import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import LunchMnRcmndtn from './views/LunchMnRcmndtn.vue'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    alert('already Login!!')
    next('/')
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert('Please Login!')
    next('/')
  } else {
    next()
  }
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lunchMnDtl',
      name: 'lunchMnDtl',
      component: () => import(/* webpackChunkName: "lunchMnDtl" */ './views/LunchMnDtl.vue')
    },
    {
      path: '/lunchMnMp',
      name: 'lunchMnMp',
      component: () => import(/* webpackChunkName: "lunchMnMp" */ './views/LunchMnMp.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser,
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "mypage" */ './views/Mypage.vue')
    }
  ]
})
