<template>
  <v-layout
    justify-center
    align-center
    class="text-xs-center"
  >
    <v-flex xs12>
      <v-btn class="title" color="deep-orange darken-1" dark large round @click="rcmndtnBtn">추천 받기</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  data () {
    return {
      lunchMn: '갈비탕'
    }
  },
  methods: {
    rcmndtnBtn () {
      // console.log('click')
      this.$router.push({
        name: 'lunchMnDtl'
      })
      eventBus.$emit('tbtl', this.lunchMn)
      // eventBus.$emit('tbtl2', this.lunchMn)
    }
  }
}
</script>
