import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

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
    login ({ dispatch }, loginObj) {
      axios
        .post('https://reqres.in/api/login', loginObj)
        .then(res => {
          console.log(res)
          let token = res.data.token
          window.localStorage.setItem('access_token', token)
          dispatch('getMemberInfo')
        })
        .catch(err => {
          console.error(err)
        })
    },
    logout ({ commit }) {
      commit('logout')
      router.push({ name: 'home' })
    },
    getMemberInfo ({ commit }) {
      let token = window.localStorage.getItem('access_token')
      let config = {
        headers: {
          'access-token': token
        }
      }
      axios
        .get('https://reqres.in/api/users/2', config)
        .then(response => {
          console.log(response)
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar
          }
          commit('loginSuccess', userInfo)
          router.push({ name: 'mypage' })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
})
