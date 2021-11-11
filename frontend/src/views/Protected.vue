<template>
  <div>
    <h2>Protected</h2>
    <p>This is the place where the authenticated users can add new links and modify / delete existing links.</p>
    <LogoutForm/>
    <hr>
    <PostLink/>
    <hr>
    <TestQuery/>
    <TestMutation/>
  </div>
</template>

<script>
  import LogoutForm from '../components/LogoutForm.vue'
  import PostLink from '../components/PostLink.vue'
  import TestMutation from '../components/TestMutation.vue'
  import TestQuery from '../components/TestQuery.vue'
  export default {
    name: 'Protected',

    components: {
      LogoutForm,
      PostLink,
      TestMutation,
      TestQuery,
    },
  }
</script>
