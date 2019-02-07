<template>
  <div>
    추천메뉴는 {{ rMenu }} 입니다.
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  data () {
    return {
      rMenu: ''
    }
  },
  created () {
    eventBus.$on('menuPush', menu => {
      this.rMenu = menu
    })
  }
}
</script>

<style>

</style>
