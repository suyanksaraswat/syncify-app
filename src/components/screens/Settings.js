import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(View)`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`

const Message = styled(Text)`
	font-size: 20px;
	color: black;
`

const Settings = () => (
	<Wrapper>
		<Message>Settings</Message>
	</Wrapper>
)

export default Settings
