import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Wrapper = styled(View)`
	width: 100%;
	align-items: center;
`

const EpisodeTitleText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6%')}px;
	color: ${({ theme }) => theme.colors.text};
`

const AuthorText = styled(EpisodeTitleText)`
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`

const TrackTextInfo = (props) => {
	return (
		<Wrapper>
			<EpisodeTitleText>{props.title}</EpisodeTitleText>
			<AuthorText>{props.artist}</AuthorText>
		</Wrapper>
	)
}

export default connect(
	(state) => ({
		title: state.player.currentTrack.title,
		artist: state.player.currentTrack.artist,
	}),
	{}
)(TrackTextInfo)
