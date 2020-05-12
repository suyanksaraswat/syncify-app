import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

const TrackTextInfo = (props) => {
	return (
		<Wrapper>
			<EpisodeTitleText>{props.currentTrack.title}</EpisodeTitleText>
			<AuthorText>{props.currentTrack.artist}</AuthorText>
		</Wrapper>
	)
}

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

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack || {},
	}),
	{}
)(TrackTextInfo)
