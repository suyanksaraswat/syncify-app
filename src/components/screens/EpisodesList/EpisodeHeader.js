import React from 'react'
import { View, Image, Button, ImageBackground, Text } from 'react-native'
import styled from 'styled-components'

const EpisodeHeader = ({ podcast }) => {
	return (
		<HeaderBackground source={{ uri: podcast.feed.image }} blurRadius={8}>
			<BlurredWrapper>
				<EpisodeImage source={{ uri: podcast.feed.image }} />
				<PodcastInfo>
					<PodcastName>{podcast.feed.title}</PodcastName>
					<Button title="Subscribe" />
				</PodcastInfo>
			</BlurredWrapper>
		</HeaderBackground>
	)
}

const BlurredWrapper = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.5);
`
const HeaderBackground = styled(ImageBackground)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
`
const PodcastName = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5.5%')}px;
	color: ${({ theme }) => theme.colors.background};
`

const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`
const PodcastInfo = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('60%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('30%')}px;
	align-items: flex-start;
	justify-content: space-between;
`

export default EpisodeHeader
