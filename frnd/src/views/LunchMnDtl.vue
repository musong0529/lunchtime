<template>
  <v-layout wrap column>
    <v-flex d-flex>
      <v-card flat tile class="d-flex">
        <v-img
          :src="require('../assets/galbitang.jpg')"
          aspect-ratio="1"
        >
          <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-card>
    </v-flex>
    <div class="mt-4 mb-4">
      <dl>
        <dt>추천이유</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</dd>
      </dl>
    </div>
    <LunchGoBtn></LunchGoBtn>
    <!-- <v-layout>
      <v-btn class="title" color="deep-orange darken-1" large block dark round>{{ lunchMn }} 먹으로 가자</v-btn>
    </v-layout> -->
  </v-layout>
</template>

<script>
// import { eventBus } from '../main.js'
// import LunchGoBtn from '../components/LunchGoBtn'
export default {
  components: {
    // LunchGoBtn
  },
  data () {
    return {
      // lunchMn: ''
    }
  }
}
</script>
