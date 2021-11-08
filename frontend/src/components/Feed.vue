<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Link v-for="link in getFeed" :key="link.id" :link="link"/>
      </v-col>
    </v-row>
  </v-container>
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