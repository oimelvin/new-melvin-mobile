import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import colors from '@styles/colors.style'
import { i18n } from '@languages/index'
import ToYouPage from '@pages/App/NotificationTabs/ToYouPage'
import MyMessagesPage from '@pages/App/NotificationTabs/MyMessagesPage'
import SentPage from '@pages/App/NotificationTabs/SentPage'

export type TopTabNavigatorParamList = {
	ToYouPage: undefined
	MyMessagesPage: undefined
	SentPage: undefined
}

const TopTabBar = createMaterialTopTabNavigator<TopTabNavigatorParamList>()

const NotificationTopTabNavigator: React.FC = () => {
	return (
		<TopTabBar.Navigator
			screenOptions={{
				lazy: true,
				tabBarStyle: {
					backgroundColor: colors.black,
				},
				tabBarIndicatorStyle: {
					backgroundColor: colors.cyan,
				},
				tabBarActiveTintColor: colors.white,
				tabBarInactiveTintColor: colors.gray300,
			}}
			sceneContainerStyle={{
				backgroundColor: colors.black,
				padding: 15,
			}}
			overScrollMode="never"
			initialRouteName="ToYouPage"
		>
			<TopTabBar.Screen
				name="ToYouPage"
				options={{
					tabBarLabel: i18n.t('notifications.toYou'),
				}}
				component={ToYouPage}
			/>
			<TopTabBar.Screen
				name="MyMessagesPage"
				options={{
					tabBarLabel: i18n.t('notifications.myMessages'),
				}}
				component={MyMessagesPage}
			/>
			<TopTabBar.Screen
				name="SentPage"
				options={{
					tabBarLabel: i18n.t('notifications.sent'),
				}}
				component={SentPage}
			/>
		</TopTabBar.Navigator>
	)
}

export default NotificationTopTabNavigator
