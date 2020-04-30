import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import episodes from '@app/components/screens/Episodes/episodes'

const Wrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.width}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('75%')}px;
	padding-horizontal: ${({ theme }) => theme.metrics.largeSize}px;
	align-items: center;
`

const ImageComponent = styled(Image)`
	width: 100%;
	height: 100%;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
`

const EpisodesImages = () => {
	return (
		<Wrapper>
			<ImageComponent source={{ uri: episodes[0].image }} />
		</Wrapper>
	)
}

export default EpisodesImages
