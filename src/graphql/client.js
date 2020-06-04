import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
	link: createHttpLink({ uri: 'http://192.168.0.139:3000/graphql' }),
	cache: new InMemoryCache(),
})

export { client }
