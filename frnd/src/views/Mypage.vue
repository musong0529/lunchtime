<template>
  <div>
    <p>welcome {{ userInfo.name }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style>

</style>
