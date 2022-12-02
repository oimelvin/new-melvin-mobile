import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import Logo from '@assets/logo.svg'

import Icon from '@components/Icon'
import TabBar from '@components/TabBar'

import { BackgroundImage } from '../styles/global.style'
import HeaderTabNavigation from '../components/HeaderTabNavigation'
import EquipamentoPage from '@pages/App/Tabs/EquipamentoPage'
import OrdemServicoPage from '@pages/App/Tabs/OrdemServicoPage'
import MelvinPage from '@pages/App/Tabs/MelvinPage'
import MaterialPage from '@pages/App/Tabs/MaterialPage'
import DashboardPage from '@pages/App/Tabs/DashboardPage'

export type BottomTabNavigatorParamList = {
	EquipamentoPage: { id: string } | undefined
	OrdemServicoPage: undefined
	MelvinPage: undefined
	MaterialPage: undefined
	DashboardPage: undefined
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
				initialRouteName="EquipamentoPage"
			>
				<BottomTabBar.Screen
					name="EquipamentoPage"
					component={EquipamentoPage}
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
					name="OrdemServicoPage"
					component={OrdemServicoPage}
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
					name="DashboardPage"
					component={DashboardPage}
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
