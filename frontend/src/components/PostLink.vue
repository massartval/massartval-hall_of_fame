<!-- POST ONE ITEM-->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="POST" @submit.prevent="postLink">
          <input type="text" v-model="inputTitle" placeholder="Title"><br>
          <input type="text" v-model="inputDescription" placeholder="Description"><br>
          <input type="text" v-model="inputUrl" placeholder="URL"><br>
          <v-btn type="submit">Post Link</v-btn>
        </v-form>
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
      postLink: [],
      inputTitle: '',
      inputDescription: '',
      inputUrl: '',
    }
  }, 
  methods: {
    testMutation() {
        const title = this.inputTitle;
        const desc = this.inputDescription;
        const url = this.inputUrl;
        //console.log(this.inputId, this.inputTitle, this.inputDescription, this.inputUrl);
        //console.log(id, title, desc, url);
      this.$apollo.mutate({
        mutation: POST_LINK,
        variables: {
          postLinkTitle: title,
          postLinkDescription: desc,
          postLinkUrl: url,
        }
      })
    }
  }
};
</script>