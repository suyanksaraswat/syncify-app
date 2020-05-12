import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import Screen from '@app/components/layout/Screen'
import styles from '@app/styles'
import Icon from '@app/components/common/Icon'

const EmptyPodcasts = () => (
	<Screen testID="playlists-wrapper">
		<Icon
			name="view-list"
			size={styles.metrics.getWidthFromDP('10%')}
			color={styles.colors.text}
		/>
		<Message>No podcasts yet</Message>
		<InfoMessage>
			You can add podcasts by searching or try Top Charts tab for
			inspiration
		</InfoMessage>

		<SearchButton onPress={() => {}}>
			<ButtonText>Search</ButtonText>
			<Icon
				name="magnify"
				size={styles.metrics.getWidthFromDP('6%')}
				color={styles.colors.text}
			/>
		</SearchButton>
	</Screen>
)

const Message = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
	color: black;
`

const InfoMessage = styled(Text)`
	margin: ${({ theme }) => theme.metrics.largeSize}px;
	color: ${({ theme }) => theme.colors.subtext};
	font-size: ${({ theme }) => theme.metrics.largeSize}px;
	text-align: center;
`
const SearchButton = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin: ${({ theme }) => theme.metrics.extraSmallSize}px;
	border: 1px solid black;
	border-radius: 5px;
	padding: ${({ theme }) => theme.metrics.smallSize}px;
	background-color: ${({ theme }) =>
		theme.colors.inactiveBottomNavigatorBarItem};
`
const ButtonText = styled(Text)`
	margin-right: ${({ theme }) => theme.metrics.mediumSize}px;
	color: ${({ theme }) => theme.colors.text};
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('5%')}px;
	text-align: center;
`

export default EmptyPodcasts
