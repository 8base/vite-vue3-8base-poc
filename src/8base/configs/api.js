import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import store from "../../store";

const link = new HttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_APP_WORKSPACE_ENDPOINT,
})

// Create the apollo client
export const api = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
