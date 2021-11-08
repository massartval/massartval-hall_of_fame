<!-- UPDATE ONE ITEM-->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form action="" method="PUT" @submit.prevent="testMutation">
          <input type="text" v-model="inputId" placeholder="Test mutation - enter link id">
          <input type="text" v-model="inputDescription" placeholder="Test mutation - enter link description">
          <input type="text" v-model="inputUrl" placeholder="Test mutation - enter link url">
          <v-btn type="submit">Update Link</v-btn>
        </v-form>
        <div v-if="inputId && updateLink /* Fix Vue render errors in console */">
          {{ updateLink.url + ` - ` + updateLink.id }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

const TEST_MUTATION = gql `
mutation($updateLinkId: ID!, $updateLinkDescription2: String, $updateLinkUrl2: String){
  updateLink(id: $updateLinkId, description: $updateLinkDescription2, url: $updateLinkUrl2) {
    id
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
      inputDescription: '',
      inputUrl: '',
    }
  }, 
  methods: {
    testMutation() {
        const id = this.inputId;
        const desc = this.inputDescription;
        const url = this.inputUrl
      this.$apollo.mutate({
        mutation: TEST_MUTATION,
        variables: {
          updateLinkId: id,
          updateLinkDescription2: desc,
          updateLinkUrl2: url,
        }
      })
    }
  }
};
</script>