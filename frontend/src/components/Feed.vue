<template>
  <div class="hello">
    <h1>HELLO</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
