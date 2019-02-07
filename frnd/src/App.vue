<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <v-container fluid fill-height>
        <router-view></router-view>
      </v-container> -->
      <Rbtn></Rbtn>
      <Vbtn></Vbtn>
      <!-- <router-view></router-view> -->
    </v-content>

    <!-- <v-footer class="pa-3" color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019 HUDALDALDAL</span>
    </v-footer> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Toolbar from '@/components/Toolbar'
import Rbtn from '@/components/rBtn'
import Vbtn from '@/components/vBtn'
export default {
  name: 'App',
  components: {
    Toolbar,
    Rbtn,
    Vbtn
  },
  data: () => ({

  })
}
</script>
