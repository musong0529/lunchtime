<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile router :to="{ name: 'home' }" exact>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  v-if="isLogin === false" router :to="{ name: 'login' }" exact>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else router :to="{ name: 'mypage' }" exact>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Mypage</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey lighten-4" fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <span>{{ toolbartitle }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu bottom left v-if="isLogin">
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_horiz</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                router :to="{ name: 'mypage' }" exact
              >
                <v-list-tile-title>Mypage</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                @click="$store.dispatch('logout')"
              >
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      <v-btn flat v-else router :to="{ name: 'login' }">Login</v-btn>
      <!-- <v-avatar size="36px">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar> -->
    </v-toolbar-items>

  </v-toolbar>
    <!-- <Toolbar></Toolbar> -->
    <v-content>
      <!-- <HelloWorld/> -->
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- <v-footer class="pa-3" color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019 HUDALDALDAL</span>
    </v-footer> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Toolbar from '@/components/Toolbar'
// import Rbtn from '@/components/rBtn'
// import Vbtn from '@/components/vBtn'
import { mapState } from 'vuex'
import { eventBus } from './main.js'

export default {
  name: 'App',
  components: {
    // Toolbar
    // Rbtn,
    // Vbtn
  },
  data: () => ({
    toolbartitle: '점심시간',
    drawer: null
  }),
  computed: {
    ...mapState(['isLogin'])
  },
  // methods: {
  //   ...mapActions(['logout'])
  // },
  created () {
    eventBus.$on('menuPush', menu => {
      console.log(menu)
      this.toolbartitle = menu
    })
  }
}
</script>
