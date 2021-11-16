<!-- POST ONE ITEM-->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="POST" @submit.prevent="postLinkMutation">
          <input type="text" v-model="inputTitle" placeholder="Title"><br>
          <input type="text" v-model="inputDescription" placeholder="Description"><br>
          <input type="text" v-model="inputUrl" placeholder="URL"><br>
          <v-btn type="submit">Post Link</v-btn>
        </v-form>
        <div v-if="postLink.id /* Fix Vue render errors in console */">
          <h2>Response</h2>
          <h3>{{ postLink.title }}</h3>
          <p>{{ postLink.description }}</p>
          <p>{{ postLink.url + ` - id: ` + postLink.id }}</p>        
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const POST_LINK = gql `
mutation($postLinkTitle: String!, $postLinkDescription: String, $postLinkUrl: String!){
  postLink(title: $postLinkTitle, description: $postLinkDescription, url: $postLinkUrl) {
    id
    title
    description
    url
  }
}
`

export default {
  name: 'PostLink',
  data() {
    return {
      postLink: {},
      inputTitle: '',
      inputDescription: '',
      inputUrl: '',
    }
  }, 
  methods: {
    postLinkMutation() {
        const title = this.inputTitle;
        const desc = this.inputDescription;
        const url = this.inputUrl;
      this.$apollo.mutate({
        mutation: POST_LINK,
        variables: {
          postLinkTitle: title,
          postLinkDescription: desc,
          postLinkUrl: url,
        }
      }).then((response) => {
        this.postLink = response.data.postLink;
      })
    }
  }
};
</script>