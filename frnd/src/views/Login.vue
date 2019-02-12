<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-alert
        :value="isLoginError"
        type="error"
      >
        Login error!
      </v-alert>
      <v-alert
        :value="isLogin"
        type="success"
      >
        Login success!
      </v-alert>
      <h2>Login</h2>
      <v-text-field
        label="email"
        type="email"
        v-model="email"
      ></v-text-field>

      <v-text-field
        label="password"
        type="password"
        v-model="password"
      ></v-text-field>

      <v-btn @click="login({ email, password })" color="purple" depressed dark large block>login</v-btn>
      <!-- <v-btn color="success" @click="test">Test</v-btn> -->
      <!-- <v-btn color="success" @click="postTest">postTest</v-btn> -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      email: null,
      password: null,
      value: false
    }
  },
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions(['login'])

    // test () {
    //   this.$http
    //     .get('https://reqres.in/api/users?page=2')
    //     .then(res => {
    //       // handle success
    //       console.log(res)
    //     })
    //     .catch(error => {
    //       // handle error
    //       console.log(error)
    //     })
    //     .then(() => {
    //       // always executed
    //       console.log('always')
    //     })
    // },
    // postTest () {
    //   this.$http
    //     .post('https://reqres.in/api/register', {
    //       email: 'sydney@fife',
    //       password: 'pistol'
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  }
}
</script>

<style>

</style>
