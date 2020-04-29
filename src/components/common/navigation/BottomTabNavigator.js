import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabBarIcon from "../../../../components/TabBarIcon"
import navigation from '../../../routes/navigation'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default BottomTabNavigator = ({ containerRef, initialNavigationState }) => {
	return (
		<NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Top Charts" component={Navigator} />
          </Stack.Navigator>
        </NavigationContainer>
	)
}

const Navigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={navigation.initialRoute}>
      {navigation.routes.map(x => (
		<BottomTab.Screen
		  key={x.id}
		  name={x.id}
		  component={x.component}
		  options={{
			title: x.title,
			tabBarIcon: ({ focused }) => (
			  <TabBarIcon focused={focused} name={x.icon} />
			),
		  }}
		/>
	  ))}
    </BottomTab.Navigator>
  )
}
