import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'

import Colors from '@app/styles/colors'

export default function TabBarIcon(props) {
	return (
		<MaterialCommunityIcons
			name={props.name}
			size={30}
			style={{ marginBottom: -3 }}
			color={
				props.focused
					? Colors.activeBottomNavigatorBarItem
					: Colors.inactiveBottomNavigatorBarItem
			}
		/>
	)
}
