import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigator from './BottomTabNavigator'
import SearchEquipmentManuallyPage from '@pages/App/SearchEquipmentManuallyPage'
import SearchEquipmentQRCodePage from '@pages/App/SearchEquipmentQRCodePage'
import NotificationTopTabNavigator from './NotificationTopTabNavigator'
import AccountPage from '@pages/App/AccountPage'
import colors from '@styles/colors.style'

export type AppStackNavigatorParamList = {
  BottomTabNavigator: undefined
  SearchEquipmentManuallyPage: undefined
  SearchEquipmentQRCodePage: undefined
  NotificationTopTabNavigator: undefined
  AccountPage: undefined
}

const NativeStack = createNativeStackNavigator<AppStackNavigatorParamList>()

const AppStackNavigator: React.FC = () => (
	<NativeStack.Navigator
		screenOptions={{
			contentStyle: {
				backgroundColor: colors.black,
			},
			animation: 'fade_from_bottom',
			headerStyle: {
				backgroundColor: colors.black,
			},
			headerTransparent: true,
			headerTintColor: colors.white,
			headerTitle: '',
		}}
		initialRouteName="BottomTabNavigator"
	>
		<NativeStack.Screen
			name="BottomTabNavigator"
			component={BottomTabNavigator}
			options={{
				headerShown: false,
			}}
		/>
		<NativeStack.Screen
			name="SearchEquipmentQRCodePage"
			component={SearchEquipmentQRCodePage}
			options={{
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="SearchEquipmentManuallyPage"
			component={SearchEquipmentManuallyPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			options={{
				headerTransparent: false,
				title: 'Notificações',
				headerTitleStyle: {
					fontSize: 16,
				},
				headerTitleAlign: 'center',
			}}
			name="NotificationTopTabNavigator"
			component={NotificationTopTabNavigator}
		/>
		<NativeStack.Screen name="AccountPage" component={AccountPage} />
	</NativeStack.Navigator>
)

export default AppStackNavigator
