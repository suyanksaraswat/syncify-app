import React from 'react'

import { View } from 'react-native'

import styled from 'styled-components'
import Button from '@app/components/common/Button'

const ButtonsWrapper = styled(View)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
	padding-right: ${({ theme }) => theme.metrics.extraLargeSize}px;
`

const PlayerControls = () => {
	const [liked, setLiked] = React.useState(false)
	const isPlaying = React.useState(false)

	const handleLike = async () => {
		if (liked) {
			await setLiked(false)
		} else {
			await setLiked(true)
		}
	}

	return (
		<ButtonsWrapper>
			<Button onPress={() => {}} name="speedometer" size={35} />
			<Button onPress={() => {}} name="skip-previous-circle" size={55} />
			<Button
				onPress={() => {}}
				name={!isPlaying ? 'play-circle' : 'pause-circle'}
				size={70}
			/>
			<Button onPress={() => {}} name="skip-next-circle" size={55} />
			<Button
				onPress={handleLike}
				name={liked ? 'heart' : 'heart-outline'}
				size={35}
			/>
		</ButtonsWrapper>
	)
}

export default PlayerControls
