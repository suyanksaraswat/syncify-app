import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

import PodcastItem from './PodcastItem'

const Podcasts = (props) => (
	<Wrapper>
		<ScrollView testID="podcast-list" horizontal>
			{props.subscriptions.map((podcast) => (
				<PodcastItem
					key={podcast.url}
					onPress={() => props.navigation.push('Episodes')}
					image={podcast.image}
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
	(state) => ({ subscriptions: state.podcasts.subscriptions }),
	{}
)(Podcasts)
