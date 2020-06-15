import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styled from 'styled-components'

const FriendItem = (props) => {
	return (
		<ItemContainer>
			<Wrapper onPress={() => {}}>
				<FriendsImage source={{ uri: props.image }} />
				<NameTextBox>
					<FriendsName ellipsizeMode="tail" numberOfLines={3}>
						{props.firstName} {props.lastName}
					</FriendsName>
					<Username>{props.username}</Username>
				</NameTextBox>
			</Wrapper>
			{props.renderIcon && props.renderIcon()}
		</ItemContainer>
	)
}

const Wrapper = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.metrics.smallSize}px;
`

const FriendsName = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
	color: ${({ theme }) => theme.colors.text};
	flex: 1;
`

const Username = styled(Text)`
	font-size: ${({ theme }) => theme.metrics.getWidthFromDP('3.5%')}px;
	color: ${({ theme }) => theme.colors.text};
`
const FriendsImage = styled(Image)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
	border-radius: 50px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
`
const NameTextBox = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('50%')}px;
	margin: ${({ theme }) => theme.metrics.smallSize}px;
	display: flex;
	flex-direction: column;
`
export const ItemContainer = styled(View)`
	width: ${({ theme }) => theme.metrics.getWidthFromDP('100%')}px;
	flex-direction: row;
	align-items: center;
`

export default FriendItem
