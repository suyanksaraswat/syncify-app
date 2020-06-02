import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

const EpisodesImage = (props) => {
	return (
		<Wrapper>
			<ImageComponent source={{ uri: props.episode.imageURL }} />
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.width}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	margin-bottom: ${({ theme }) => theme.metrics.extraLargeSize}px;
	align-items: center;
`

const ImageComponent = styled(Image)`
	width: 30%;
	height: 100%;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`

export default EpisodesImage
