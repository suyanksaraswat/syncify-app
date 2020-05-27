import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

const TrackTextInfo = (props) => {
	return (
		<Wrapper>
			<EpisodeTitleText>{props.currentTrack.title}</EpisodeTitleText>
			<AuthorText>{props.podcast.meta.author}</AuthorText>
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: 100%;
	align-items: center;
	justify-content: center;
`

const EpisodeTitleText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
	color: ${({ theme }) => theme.colors.text};
	margin: ${({ theme }) => theme.metrics.mediumSize}px;
	text-align: center;
`

const AuthorText = styled(EpisodeTitleText)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
	margin: ${({ theme }) => theme.metrics.extraSmallSize}px;
`

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack || {},
		podcast: state.podcasts.currentPodcast,
	}),
	{}
)(TrackTextInfo)
