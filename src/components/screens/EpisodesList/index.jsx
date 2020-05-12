import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import styled from 'styled-components'

import EpisodeItem from './EpisodeItem'
import EpisodeHeader from './EpisodeHeader'

const Episodes = (props) => (
	<Wrapper>
		<EpisodeHeader podcast={props.podcast} />
		<EpisodeCounter>
			<CounterText>{props.podcast.items.length} episodes</CounterText>
		</EpisodeCounter>
		<ScrollView testID="episode-list">
			{props.podcast.items.map((episode) => (
				<EpisodeItem
					key={episode.link}
					onPress={() => {}}
					episode={episode}
				/>
			))}
		</ScrollView>
	</Wrapper>
)

const Wrapper = styled(View)`
	flex-direction: column;
	align-items: flex-start;
`

const EpisodeCounter = styled(View)`
	flex-direction: row;
	align-items: center;
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('10%')}px;
	margin-left: ${({ theme }) => theme.metrics.getWidthFromDP('2%')}px;
`

const CounterText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4%')}px;
`

export default connect(
	(state) => ({
		podcast: state.podcasts.currentPodcast,
	}),
	{}
)(Episodes)
