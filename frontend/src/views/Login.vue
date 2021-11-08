<template>
  <div>
    <p>This is a login page</p>
    <LoginForm/>
  </div>
</template>

<script>
  import LoginForm from '../components/LoginForm.vue';

  export default {
    name: 'Login',

    components: {
      LoginForm,
    },
  }
</script>
