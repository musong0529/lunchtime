<template>
  <div>
    <v-avatar>
      <img
        :src="`${userInfo.avatar}`"
      >
    </v-avatar>
    <p>welcome {{ userInfo.first_name }} {{ userInfo.last_name }}</p>
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
