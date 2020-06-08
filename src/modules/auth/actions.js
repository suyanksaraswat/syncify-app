import * as WebBrowser from 'expo-web-browser'
import jwtDecode from 'jwt-decode'
import * as AuthSessionNew from 'expo-auth-session'
import { AsyncStorage, Alert } from 'react-native'

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from 'react-native-dotenv'

import { client } from '../../graphql/client'
import { SignInMutation } from '../../graphql/mutations/user'

const auth0ClientId = AUTH0_CLIENT_ID
const auth0Domain = AUTH0_DOMAIN
const returnUrl = 'https://github.com/syncify-team'

/**
 * Converts an object to a query string.
 */

/* eslint-disable no-alert, no-console */
const toQueryString = (params) => {
	return `?${Object.entries(params)
		.map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		)
		.join('&')}`
}

export const login = () => async (dispatch) => {
	// Retrieve the redirect URL, add this to the callback URL list
	// of your Auth0 application.
	let redirectUrl
	try {
		redirectUrl = await AuthSessionNew.getRedirectUrl()
		console.log(`Redirect URL: ${redirectUrl}`)
	} catch (e) {
		console.log(e)
	}

	// Structure the auth parameters and URL
	const queryParams = toQueryString({
		client_id: auth0ClientId,
		redirect_uri: redirectUrl,
		response_type: 'id_token', // id_token will return a JWT token
		scope: 'openid profile email', // retrieve the user's profile
		nonce: Math.random().toString(36), // ideally, this will be a random value
	})
	const authUrl = `${auth0Domain}/authorize${queryParams}`

	// Perform the authentication

	console.log('Authentication request')
	let response
	try {
		response = await AuthSessionNew.startAsync({ authUrl })
	} catch (e) {
		console.log(e)
	}

	console.log('Authentication response', response)

	if (response.type === 'success') {
		if (response.params.error) {
			Alert(
				'Authentication error',
				response.params.error_description || 'something went wrong'
			)
			return
		}

		// Retrieve the JWT token and decode it
		const jwtToken = response.params.id_token
		const decoded = jwtDecode(jwtToken)
		// Id token format: https://auth0.com/docs/api-auth/tutorials/adoption/api-tokens#access-vs-id-tokens
		console.log('Id token', JSON.stringify(decoded, null, 2))

		try {
			await AsyncStorage.setItem('token', jwtToken)
		} catch (error) {
			// Error saving data
			console.log(error)
		}

		try {
			response = await client.mutate({
				variables: { token: jwtToken },
				mutation: SignInMutation,
			})
		} catch (error) {
			console.log(`Error in Logging in: ${error}`)
			// dispatch an error message instead
		}

		const {
			first_name: firstName,
			last_name: lastName,
		} = response.data.signIn
		const name = `${firstName} ${lastName}`
		dispatch({
			type: 'auth/LOGGED_IN',
			payload: { name, idToken: jwtToken },
		})
	}
}

export const logout = () => async (dispatch) => {
	const queryParams = toQueryString({
		returnTo: returnUrl,
		client_id: auth0ClientId,
	})
	const logoutUrl = `${auth0Domain}/v2/logout${queryParams}`

	// Log out
	const response = await WebBrowser.openBrowserAsync(logoutUrl)

	console.log('Logout response', response)

	if (response.type === 'cancel') {
		dispatch({ type: 'auth/LOGGED_OUT', payload: { idToken: null } })
	}
}
