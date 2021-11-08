<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="POST" @submit.prevent="login">
          <div>
            <input type="email" v-model="username" id="username" placeholder="Email">
          </div>
          <div>
            <input type="password" v-model="password" id="password" placeholder="Password">
          </div>
          <div>
            <v-btn type="submit">Login</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import gql from 'graphql-tag';

  export default {
    name: 'LoginForm',

    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Clear fields on submit
        const user = this.username;
        const pass = this.password;
        this.username = '';
        this.password = '';

        this.$apollo.mutate({
          mutation: gql`
          mutation($email: String!, $password: String!){
            login(email: $email, password: $password) {
              token
            }
          }
          `, 
          variables: {
            email: user,
            password: pass,
          }
        })
        .then((data) => {
          // console.log(`Login data: `, data);
          // Save token to the app local storage
          localStorage.setItem('AUTH_TOKEN', data.data.login.token);
          // Redirect to 'protected'
          this.$router.push('/protected');
        })
        .catch((error) => {
          console.log(error);
        });
        
      }
    }
  }
</script>
