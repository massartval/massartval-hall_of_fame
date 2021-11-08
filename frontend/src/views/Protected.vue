<template>
  <div>
    <h2>Protected</h2>
    <p>This is the place where the authenticated users can modify the website (add new links, modify and delete existing links).</p>
    <LogoutForm/>
    <br>
    <TestQuery/>
    <TestMutation/>
  </div>
</template>

<script>
  import LogoutForm from '../components/LogoutForm.vue'
  import TestMutation from '../components/TestMutation.vue'
  import TestQuery from '../components/TestQuery.vue'
  export default {
    name: 'Protected',

    components: {
      LogoutForm,
      TestMutation,
      TestQuery,
    },
  }
</script>
