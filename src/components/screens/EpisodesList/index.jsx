import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

import EpisodeItem from './EpisodeItem'

const Wrapper = styled(View)`
	flex-direction: column;
	align-items: flex-start;
`

const Episodes = (props) => (
	<Wrapper>
		<ScrollView testID="episode-list">
			{props.currentPodcast.items.map((podcast) => (
				<EpisodeItem
					key={podcast.link}
					onPress={() => {}}
					title={podcast.title}
				/>
			))}
		</ScrollView>
	</Wrapper>
)

export default connect(
	(state) => ({ currentPodcast: state.podcasts.currentPodcast }),
	{}
)(Episodes)
