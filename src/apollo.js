import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { logErrorMessages } from '@vue/apollo-util'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { getUserId } from './features/user'

const userId = getUserId()

let link = onError(error => {
  logErrorMessages(error)
})

// HTTP connection to the API
link = link.concat(
  createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:4000/',
    headers: {
      'x-user-id': userId,
    },
  }),
)

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/subscriptions`,
  options: {
    reconnect: true,
    connectionParams: {
      userId,
    },
  },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  link,
)

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link,
  cache,
})
