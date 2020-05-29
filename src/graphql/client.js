import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
	uri: 'http://localhost:3000/graphql',
})

const cache = new InMemoryCache()
const client = new ApolloClient({
	cache,
	httpLink,
})

export { client }
