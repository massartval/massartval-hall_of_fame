<!-- UPDATE ONE ITEM-->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="PUT" @submit.prevent="testMutation">
          <input type="text" v-model="inputId" placeholder="Test mutation - enter link id"><br>
          <input type="text" v-model="inputTitle" placeholder="Test mutation - enter link title"><br>
          <input type="text" v-model="inputDescription" placeholder="Test mutation - enter link description"><br>
          <input type="text" v-model="inputUrl" placeholder="Test mutation - enter link url"><br>
          <v-btn type="submit">Update Link</v-btn>
        </v-form>
        <div v-if="inputId && updateLink.length /* Fix Vue render errors in console */">
          <h2>Response</h2>
          <h3>{{ updateLink.title }}</h3>
          <p>{{ updateLink.description }}</p>
          <p>{{ updateLink.url + ` - id: ` + updateLink.id }}</p>        
        </div>
        <div>
          <h2>Inputs</h2>
          <h3>{{ inputTitle }}</h3>
          <p>{{ inputDescription }}</p>
          <p>{{ inputUrl + ` - id: ` + inputId }}</p> 
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const TEST_MUTATION = gql `
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
  name: 'TestMutation',
  data() {
    return {
      updateLink: [],
      inputId: '',
      inputTitle: '',
      inputDescription: '',
      inputUrl: '',
    }
  }, 
  methods: {
    testMutation() {
        const id = this.inputId;
        const title = this.inputTitle;
        const desc = this.inputDescription;
        const url = this.inputUrl;
        //console.log(this.inputId, this.inputTitle, this.inputDescription, this.inputUrl);
        //console.log(id, title, desc, url);
      this.$apollo.mutate({
        mutation: TEST_MUTATION,
        variables: {
          updateLinkId: id,
          updateLinkTitle: title,
          updateLinkDescription: desc,
          updateLinkUrl: url,
        }
      })
    }
  }
};
</script>