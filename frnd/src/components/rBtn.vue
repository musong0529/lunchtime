<template>
  <div>
    <v-btn @click="rMenuSend">추천메뉴</v-btn>
  </div>
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
    rMenuSend () {
      // this.$router.push({
      //   name: 'lunchMnMp'
      // })
      eventBus.$emit('menuPush', this.lunchMn)
    }
  }
}
</script>

<style>

</style>
