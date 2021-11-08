<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="POST" @submit.prevent="logout">
          <v-btn type="submit">Logout</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'LogoutForm',
    methods: {
      logout() {
        // Destroy AUTH_TOKEN in local storage
        localStorage.removeItem('AUTH_TOKEN');
        // Redirect to homepage
        this.$router.push('/');
      }
    }
  }
</script>
