import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

import MiniPlayer from '@app/components/common/MiniPlayer'

const TabBar = (props) => {
	return (
		<Wrapper>
			{props.currentTrack && <MiniPlayer />}
			<BottomTabBar {...props} />
		</Wrapper>
	)
}

const Wrapper = styled(View)`
	width: 100%;
`

export default connect(
	(state) => ({
		currentTrack: state.player.currentTrack,
	}),
	{}
)(TabBar)
