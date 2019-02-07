<template>
  <v-toolbar color="grey lighten-4" fixed app>
    <v-toolbar-title class="headline">
      <span>{{ toolbartitle }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar size="36px">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
  </v-toolbar>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  data () {
    return {
      toolbartitle: '점심시간'
      // lunchMn: ''
    }
  },
  created () {
    eventBus.$on('menuPush', menu => {
      console.log(menu)
      this.toolbartitle = menu
    })
  }
}
</script>
