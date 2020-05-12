import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import moment from 'moment'

import { playOrPause } from '@app/modules/player/actions'
import { PLAY_STATE } from '@app/modules/constants'
import Button from '@app/components/common/Button'

const EpisodeItem = ({ episode }) => {
	return (
		<Wrapper onPress={() => {}}>
			<Header>
				<HeaderText ellipsizeMode="tail" numberOfLines={1}>
					{episode.title}
				</HeaderText>
				<DateText>
					{moment(episode.pubDate.substr(0, 10), 'YYYYMMDD')
						.fromNow()
						.replace(' ago', '')}
				</DateText>
			</Header>

			<EpisodeBody>
				<EpisodeImage source={{ uri: episode.thumbnail }} />
				<DescriptionTextBox>
					<EpisodeDescription ellipsizeMode="tail" numberOfLines={3}>
						{episode.description}
					</EpisodeDescription>
				</DescriptionTextBox>
				<ButtonBox>
					<Button onPress={() => {}} name={'play-circle'} size={50} />
					<DateText>
						{new Date(episode.enclosure.duration * 1000)
							.toISOString()
							.substr(11, 8)}
					</DateText>
				</ButtonBox>
			</EpisodeBody>
		</Wrapper>
	)
}

const Wrapper = styled(TouchableOpacity)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.metrics.largeSize}px;
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
	(state) => ({
		isPlaying: state.player.playState === PLAY_STATE.PLAYING,
	}),
	{
		playOrPause,
	}
)(EpisodeItem)
