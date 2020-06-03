import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const EpisodeTitle = (props) => {
	return (
		<Wrapper>
			<PodcastTitleText ellipsizeMode="tail" numberOfLines={1}>
				{props.podcast.meta.title}
			</PodcastTitleText>
			<EpisodeTitleText ellipsizeMode="tail" numberOfLines={1}>
				{props.episode.title}
			</EpisodeTitleText>
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: 100%;
	align-items: center;
	justify-content: center;
`

const PodcastTitleText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('7.5%')}px;
	color: ${({ theme }) => theme.colors.text};
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
	font-weight: bold;
`

const EpisodeTitleText = styled(PodcastTitleText)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	margin: ${({ theme }) => theme.metrics.largeSize}px;
`

export default EpisodeTitle
