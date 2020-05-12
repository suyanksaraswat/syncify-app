import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

import EpisodeItem from './EpisodeItem'
import EpisodeHeader from './EpisodeHeader'

const Episodes = (props) => (
	<Wrapper>
		<EpisodeHeader podcast={props.podcast} />
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

export default connect(
	(state) => ({
		podcast: state.podcasts.currentPodcast,
	}),
	{}
)(Episodes)
