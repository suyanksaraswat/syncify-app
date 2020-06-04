import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import styled from 'styled-components'

import { startPlayback } from '@app/modules/player/actions'
import EpisodeItem from './EpisodeItem'
import EpisodeHeader from './EpisodeHeader'

export const Episodes = (props) => (
	<Wrapper>
		<EpisodeHeader podcast={props.podcast} />

		<EpisodeCounter>
			<CounterText>{props.podcast.episodes.length} episodes</CounterText>
		</EpisodeCounter>
		<ScrollView testID="episode-list">
			{props.podcast.episodes.map((episode) => (
				<EpisodeItem
					key={episode.description}
					navigation={props.navigation}
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
	padding-left: ${({ theme }) => theme.metrics.getWidthFromDP('2%')}px;
	background-color: rgba(0, 0, 0, 0.7);
`

const CounterText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.5%')}px;
	color: ${({ theme }) => theme.colors.background};
`

export default connect(
	(state) => ({
		podcast: state.podcasts.currentPodcast,
	}),
	{ startPlayback }
)(Episodes)
