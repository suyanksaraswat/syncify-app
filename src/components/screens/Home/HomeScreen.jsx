import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import FriendsActive from './FriendsActive'
import PopularPodcasts from './PopularPodcasts'

const HomeScreen = (props) => (
	<Wrapper>
		<HeaderBox>
			<HeaderText>Active friends</HeaderText>
		</HeaderBox>
		<FriendsActive />

		<HeaderBox>
			<HeaderText>Popular podcasts</HeaderText>
		</HeaderBox>
		<PopularPodcasts {...props} />

		{/* <HorizontalPodcasts
			title="Popular podcasts"
			data={filteredpodcastlist}
			{...props}
		/> */}
	</Wrapper>
)

const Wrapper = styled(View)`
	width: 100%;
	justify-content: center;
	align-items: center;
`

const HeaderBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('12%')}px;
	padding: ${({ theme }) => theme.metrics.smallSize}px;
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('3%')}px;
`
const HeaderText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
	color: ${({ theme }) => theme.colors.skyBlue};
	flex: 1;
`

export default HomeScreen
