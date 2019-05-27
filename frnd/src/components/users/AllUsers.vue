<template>
  <div>
    <h1>All Users({{ count }})</h1>
    <p>Seoul User: {{ seouls }}({{ percent }})%</p>
    <v-list two-line>
      <v-list-tile
        v-for="(user, index) in allUsersInfo"
        :key="index"
        avatar
      >
        <v-list-tile-avatar>
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{ index }} / {{ user.address }} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    //...mapGetters(['allUsersCount', 'counfOfSeoul', 'percentOfSeoul'])
    ...mapGetters({
      count: 'allUsersCount',
      seouls: 'counfOfSeoul',
      percent: 'percentOfSeoul'
    }),
    ...mapState(['allUsersInfo'])
  },
  mounted () {
    EventBus.$on('signUp', users => {
      this.$store.state.allUsersInfo.push(users)
    })
  }
}
</script>

<style>

</style>
