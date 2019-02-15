import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsersInfo: [
      { userId: 'jj123', password: '123', name: 'jojo', address: 'Seoul', src: 'https://goo.gl/oqLfJR' },
      { userId: 'xs256', password: '256', name: 'huroo', address: 'Bussan', src: 'https://goo.gl/Ksk9B9' },
      { userId: 'xsmax512', password: '512', name: 'booba', address: 'Seoul', src: 'https://goo.gl/x7SpCD' }
    ],
    allUsers: [
      { id: 1, name: 'choims', email: 'choims@hudaldaldal.com', password: '123456' },
      { id: 2, name: 'jian', email: 'jian@hudaldaldal.com', password: '123456' }
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {
    allUsersCount: state => {
      return state.allUsersInfo.length
    },
    counfOfSeoul: state => {
      let count = 0
      state.allUsersInfo.forEach(user => {
        if (user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.counfOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsersInfo.push(payload)
    },
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
    addUsers: ({ commit }, payload) => {
      commit('addUsers', payload)
    },
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
