import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import Logo from '@assets/logo.svg'

import Icon from '@components/Icon'
import TabBar from '@components/TabBar'

import { BackgroundImage } from '../styles/global.style'
import HeaderTabNavigation from '../components/HeaderTabNavigation'
import EquipmentPage from '@pages/App/Tabs/EquipmentPage'
import SchedulePage from '@pages/App/Tabs/SchedulePage'
import MelvinPage from '@pages/App/Tabs/MelvinPage'
import MaterialPage from '@pages/App/Tabs/MaterialPage'

export type BottomTabNavigatorParamList = {
	EquipmentPage: { id: string } | undefined
	SchedulePage: undefined
	MelvinPage: undefined
	MaterialPage: undefined
	Page5: undefined
}

const BottomTabBar = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabNavigator: React.FC = () => {
	const { colors } = useTheme()

	return (
		<BackgroundImage>
			<BottomTabBar.Navigator
				tabBar={props => <TabBar {...props} />}
				screenOptions={{
					header: props => <HeaderTabNavigation {...props} />,
				}}
				sceneContainerStyle={{
					backgroundColor: 'transparent',
				}}
				initialRouteName="EquipmentPage"
			>
				<BottomTabBar.Screen
					name="EquipmentPage"
					component={EquipmentPage}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon
								provider="materialIcons"
								iconName="settings"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<BottomTabBar.Screen
					name="SchedulePage"
					component={SchedulePage}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon
								provider="materialCommunityIcons"
								iconName="clipboard-list"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<BottomTabBar.Screen
					name="MelvinPage"
					component={MelvinPage}
					options={{
						tabBarIcon: () => (
							<Logo
								width={30}
								height={30}
								fill={colors.secondary}
							/>
						),
						headerShown: false,
					}}
				/>
				<BottomTabBar.Screen
					name="MaterialPage"
					component={MaterialPage}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon
								provider="fontAwesome5"
								iconName="box-open"
								color={color}
								size={size}
							/>
						),
					}}
				/>
				<BottomTabBar.Screen
					name="Page5"
					component={EquipmentPage}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Icon
								provider="materialCommunityIcons"
								iconName="chart-bar"
								color={color}
								size={size}
							/>
						),
					}}
				/>
			</BottomTabBar.Navigator>
		</BackgroundImage>
	)
}

export default BottomTabNavigator
