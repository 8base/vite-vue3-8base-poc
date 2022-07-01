import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from "@apollo/client/link/context";
import { createApolloProvider } from '@vue/apollo-option'

import store from "../../store";

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_WORKSPACE_ENDPOINT,
})

const setAuthorizationLink = setContext((request, previousContext) => {
  return store.getters.authenticated ? {
    ...previousContext,
    headers: {
      authorization: `Bearer ${store.getters.idToken}`
    }
  } : previousContext
});


// Create the apollo client
export const api = new ApolloClient({
  link: setAuthorizationLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
