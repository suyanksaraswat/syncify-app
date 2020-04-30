import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

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

const TrackTextInfo = ({ track }) => {
	return (
		<Wrapper>
			<EpisodeTitleText>{track.title}</EpisodeTitleText>
			<AuthorText>{track.author}</AuthorText>
		</Wrapper>
	)
}

export default TrackTextInfo
