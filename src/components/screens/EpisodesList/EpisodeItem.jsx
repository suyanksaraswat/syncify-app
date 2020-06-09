import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import moment from 'moment'

import Button from '@app/components/common/Button'
import { startPlayback } from '@app/modules/player/actions'
import { selectEpisode } from '@app/modules/podcasts/actions'

const EpisodeItem = (props) => {
	return (
		<Wrapper
			testID="episode-item"
			onPress={() => {
				props.selectEpisode(props.episode)
				props.navigation.navigate('Episode')
			}}
		>
			<Header>
				<HeaderText ellipsizeMode="tail" numberOfLines={1}>
					{props.episode.title}
				</HeaderText>
				<DateText>
					{moment(props.episode.pubDate.substr(0, 10), 'YYYYMMDD')
						.fromNow()
						.replace(' ago', '')}
				</DateText>
			</Header>

			<EpisodeBody>
				<EpisodeImage source={{ uri: props.episode.imageURL }} />
				<DescriptionTextBox>
					<EpisodeDescription ellipsizeMode="tail" numberOfLines={3}>
						{props.episode.subtitle || props.episode.description}
					</EpisodeDescription>
				</DescriptionTextBox>
				<ButtonBox>
					<Button
						testID="play-btn"
						onPress={() => {
							props.startPlayback(props.episode)
							props.navigation.navigate('Player')
						}}
						name={'play-circle'}
						size={50}
					/>
				</ButtonBox>
			</EpisodeBody>
		</Wrapper>
	)
}

const Wrapper = styled(TouchableOpacity)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.metrics.smallSize}px;
`

const Header = styled(View)`
	position: relative;
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: row;
	justify-content: space-between;
	margin: ${({ theme }) => theme.metrics.extraSmallSize}px;
`

const EpisodeBody = styled(Header)`
	margin: 0px;
`

const HeaderText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	color: ${({ theme }) => theme.colors.text};
	flex: 5;
	margin-left: ${({ theme }) => theme.metrics.smallSize}px;
	margin-right: ${({ theme }) => theme.metrics.smallSize}px;
`

const DateText = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.5%')}px;
	color: ${({ theme }) => theme.colors.text};
	flex: 1;
	margin-left: ${({ theme }) => theme.metrics.smallSize}px;
`

const EpisodeDescription = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.5%')}px;
	color: ${({ theme }) => theme.colors.text};
	flex: 1;
`

const EpisodeImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	border-radius: ${({ theme }) => theme.metrics.smallSize}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`
const DescriptionTextBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('50%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ButtonBox = styled(View)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${({ theme }) => theme.metrics.getWidthFromDP('35%')}px;
`

export default connect(
	(state) => ({ subscriptionsList: state.podcasts.subscriptions }),
	{ startPlayback, selectEpisode }
)(EpisodeItem)
