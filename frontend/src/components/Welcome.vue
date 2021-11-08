<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/ryanlerch-Decorative-Letter-Set-21.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Hall of Fame
        </h1>

        <p class="subheading font-weight-regular">
          Here you will find my favorite internet things!
          <br>If you wish to contact me, visit my
          <a
            href="https://www.linkedin.com/in/massartval/"
            target="_blank"
          >LinkedIn</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Welcome',
  }
</script>
