<!-- GET ONE ITEM -->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form>
          <input type="text" v-model="inputId" placeholder="Test query - enter link id">
        </v-form>
        <div v-if="inputId && getLink /* Fix Vue render errors in console */">
          <h3>{{ getLink.title }}</h3>
          <p>{{ getLink.description }}</p>
          <p>{{ getLink.url + ` - id: ` + getLink.id }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const GET_LINK = gql `
query($getLinkId: ID!){
  getLink(id: $getLinkId) {
    id
    title
    description
    url
  }
}
`

export default {
  name: 'TestQuery',
  data() {
    return {
      getLink: [],
      inputId: '',
    }
  }, 
  apollo: {
    getLink: {
      query: GET_LINK,
      variables() {
        return {
          getLinkId: this.inputId,
        }
      }
    },
  },
};
</script>


<!-- GET ALL ITEMS -->

<!--template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
          {{ getFeed }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const GET_LINKS = gql `
query {
  getFeed {
    id  
    title
    url
  }
}
`;

export default {
  name: 'TestQuery',
  data() {
    return {
      getFeed: []
    }
  }, 
  apollo: {
    getFeed: {
      query: GET_LINKS
    }
  }
};
</script-->