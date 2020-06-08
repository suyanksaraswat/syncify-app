import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

const RedButton = (props) => {
	return (
		<Button
			onPress={() => {
				props.startPlayback(props.episode)
				props.navigation.navigate('Player')
			}}
		>
			<ButtonText>Play episode</ButtonText>
		</Button>
	)
}

const Button = styled(TouchableOpacity)`
	background-color: ${({ theme }) => theme.colors.redWatermelon};
	align-items: center;
	justify-content: center;
	width: 40%;
	border-radius: 2px;
	margin: ${({ theme }) => theme.metrics.extraLargeSize}px;
	box-shadow: 0px 0px 1px #b90f0f;
`

const ButtonText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	color: ${({ theme }) => theme.colors.background};
	margin: ${({ theme }) => theme.metrics.largeSize}px;
	font-weight: bold;
`

export default RedButton
