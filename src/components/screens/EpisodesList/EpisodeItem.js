import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Wrapper = styled(TouchableOpacity)`
	width: 100%;
	flex-direction: row;
	align-items: center;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
`

const EpisodeText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
	color: ${({ theme }) => theme.colors.text};
`
const EpisodeItem = ({ title }) => {
	return (
		<Wrapper onPress={() => {}}>
			<EpisodeText>{title}</EpisodeText>
		</Wrapper>
	)
}

export default connect(
	(state) => ({ currentPodcast: state.podcasts.currentPodcast }),
	{}
)(EpisodeItem)
