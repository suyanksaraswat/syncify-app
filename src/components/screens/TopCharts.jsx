import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import Screen from '@app/components/layout/Screen'

const Message = styled(Text)`
	font-size: 20px;
	color: black;
`

const TopCharts = () => (
	<Screen>
		<Message>TopCharts</Message>
	</Screen>
)

export default TopCharts
