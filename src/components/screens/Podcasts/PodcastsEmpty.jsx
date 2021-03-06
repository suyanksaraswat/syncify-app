import React from 'react'

import { connect } from 'react-redux'

import Screen from '@app/components/layout/Screen'
import EmptyPodcasts from './PodcastsEmptyState'

const Podcasts = () => (
	<Screen testID="playlists-wrapper">
		<EmptyPodcasts />
	</Screen>
)

export default connect(() => ({}), {})(Podcasts)
