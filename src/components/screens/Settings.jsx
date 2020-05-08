import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import Screen from '@app/components/layout/Screen'

const Message = styled(Text)`
	font-size: 20px;
	color: black;
`

const Settings = () => (
	<Screen>
		<Message>Settings</Message>
	</Screen>
)

export default Settings
