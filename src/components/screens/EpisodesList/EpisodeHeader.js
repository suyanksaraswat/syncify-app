import React from 'react'
import { View, Image, Button } from 'react-native'
import styled from 'styled-components'

const EpisodeHeader = ({ image }) => {
	return (
		<Wrapper>
			<EpisodeImage source={{ uri: image }} />
			<ButtonContainer>
				<Button title="Subscribe" />
			</ButtonContainer>
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`
const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`
const ButtonContainer = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('50%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	align-items: flex-start;
	justify-content: flex-end;
`

export default EpisodeHeader
