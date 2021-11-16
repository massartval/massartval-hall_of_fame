<!-- UPDATE ONE ITEM-->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="PUT" @submit.prevent="updateLinkMutation">
          <input type="text" v-model="inputId" placeholder="ID"><br>
          <input type="text" v-model="inputTitle" placeholder="Title"><br>
          <input type="text" v-model="inputDescription" placeholder="Description"><br>
          <input type="text" v-model="inputUrl" placeholder="URL"><br>
          <v-btn type="submit">Update Link</v-btn>
        </v-form>
        <div v-if="updateLink.id /* Fix Vue render errors in console */">
          <h2>Response</h2>
          <h3>{{ updateLink.title }}</h3>
          <p>{{ updateLink.description }}</p>
          <p>{{ updateLink.url + ` - id: ` + updateLink.id }}</p>        
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const UPDATE_LINK = gql `
mutation($updateLinkId: ID!, $updateLinkTitle: String!, $updateLinkDescription: String, $updateLinkUrl: String!){
  updateLink(id: $updateLinkId, title: $updateLinkTitle, description: $updateLinkDescription, url: $updateLinkUrl) {
    id
    title
    description
    url
  }
}
`

export default {
  name: 'UpdateLink',
  data() {
    return {
      updateLink: {},
      inputId: '',
      inputTitle: '',
      inputDescription: '',
      inputUrl: '',
    }
  }, 
  methods: {
    updateLinkMutation() {
        const id = this.inputId;
        const title = this.inputTitle;
        const desc = this.inputDescription;
        const url = this.inputUrl;
      this.$apollo.mutate({
        mutation: UPDATE_LINK,
        variables: {
          updateLinkId: id,
          updateLinkTitle: title,
          updateLinkDescription: desc,
          updateLinkUrl: url,
        }
      }).then((response) => {
        this.updateLink = response.data.updateLink;
      })
    }
  }
};
</script>