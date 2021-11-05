<template>
  <div>
    <Link v-for="link in getFeed" :key="link.id" :link="link"></Link>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Link from "./Link.vue";

const GET_LINKS = gql `
query {
  getFeed {
    id  
    title
    url
  }
}
`

export default {
  name: 'Feed',
  data() {
    return {
      getFeed: []
    }
  }, 
  components: {
    Link,
  },
  apollo: {
    getFeed: {
      query: GET_LINKS
    }
  }
};
</script>