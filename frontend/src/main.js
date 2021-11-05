
import Vue from 'vue';
import App from './App.vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
// import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import vuetify from './plugins/vuetify'
// import { ApolloProvider } from 'vue-apollo';
// import { createProvider } from './vue-apollo';


Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      <code data-enlighter-language="generic" class="EnlighterJSRAW">[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}</code>,
    ));
  }
  if (networkError) console.log(`ERROR:`, <code data-enlighter-language="generic" class="EnlighterJSRAW">[Network error]: ${networkError}</code>);
});

/*
const httpLinkAuth = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  //const token = localStorage.getItem('USER_TOKEN')
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzNTgwNDczNH0.u9TrMlPbCyQ489apzjwUEVDSISDcz3YKVuNd2RdwpLU";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})*/

const apolloClient = new ApolloClient({
  // link: httpLinkAuth.concat(httpLink),
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: '#app',
  apolloProvider,
  vuetify,
  render: (h) => h(App)
});
