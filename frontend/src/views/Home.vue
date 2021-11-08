<template>
  <div>
    <Welcome/>
    <hr>
    <Feed/>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome.vue';
  import Feed from '../components/Feed.vue';

  export default {
    name: 'Home',

    components: {
      Welcome,
      Feed,
    },
  }
</script>
