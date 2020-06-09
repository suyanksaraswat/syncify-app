import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import FriendsActive from './FriendsActive'

const HomeScreen = () => (
	<Wrapper>
		<FriendsActive />
	</Wrapper>
)

const Wrapper = styled(View)`
	width: 100%;
	justify-content: center;
	align-items: center;
`

export default HomeScreen
