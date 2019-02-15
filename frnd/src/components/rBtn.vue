<template>
  <div>
    <v-btn @click="rMenuSend">추천메뉴</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
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
      EventBus.$emit('menuPush', this.lunchMn)
    }
  }
}
</script>

<style>

</style>
