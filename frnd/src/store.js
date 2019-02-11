import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: 'choims', email: 'choims@hudaldaldal.com', password: '123456' },
      { id: 2, name: 'jian', email: 'jian@hudaldaldal.com', password: '123456' }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout (state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    login ({ state, commit }, loginObj) {
      // console.log(signObj)
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user
      })
      if (selectedUser === null || selectedUser.password !== loginObj.password) commit('loginError')
      else {
        commit('loginSuccess', selectedUser)
        router.push({ name: 'mypage' })
      }
    },
    logout ({ commit }) {
      commit('logout')
      router.push({ name: 'home' })
    }
  }
})
