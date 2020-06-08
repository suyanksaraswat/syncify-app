import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { AsyncStorage } from 'react-native'
import { GRAPHQL_API_URL } from 'react-native-dotenv'

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = await AsyncStorage.getItem('token')
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(createHttpLink({ uri: GRAPHQL_API_URL })),
	cache: new InMemoryCache(),
})

export { client }
