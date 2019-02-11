<template>

  <v-toolbar color="grey lighten-4" fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <span>{{ toolbartitle }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-if="isLogin">welcome</v-btn>
      <v-btn flat v-else router :to="{ name: 'login' }">Login</v-btn>
      <!-- <v-avatar size="36px">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar> -->
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
// import { eventBus } from '../main.js'
export default {
  data () {
    return {
      toolbartitle: '점심시간',
      drawer: null
      // lunchMn: ''
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  created () {
    eventBus.$on('menuPush', menu => {
      console.log(menu)
      this.toolbartitle = menu
    })
  }
}
</script>
