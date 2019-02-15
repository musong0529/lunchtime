<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <AllUsers></AllUsers>
      </v-flex>
      <v-flex xs6>
        <SignUp></SignUp>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AllUsers from '@/components/users/AllUsers'
import SignUp from '@/components/users/SignUp'

export default {
  components: {
    AllUsers,
    SignUp
  }
}
</script>

<style>

</style>
