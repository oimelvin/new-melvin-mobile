import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import colors from '@styles/colors.style'
import { i18n } from '@languages/index'

import AcoesOrdemServicoPage from '@pages/App/OrdemServico/AcoesOrdemServicoPage'
import ChecklistOrdemServicoPage from '@pages/App/OrdemServico/ChecklistOrdemServicoPage'

export type AcoesOrdemServicoTopTabNavigatorParamList = {
	AcoesOrdemServicoPage: {
		id: string
	}
	ChecklistOrdemServicoPage: {
		id: string
	}
}

const TopTabBar =
	createMaterialTopTabNavigator<AcoesOrdemServicoTopTabNavigatorParamList>()

const AcoesOrdemServicoTopTabNavigator: React.FC = () => {
	return (
		<TopTabBar.Navigator
			screenOptions={{
				lazy: true,
				tabBarStyle: {
					backgroundColor: colors.white,
				},
				tabBarIndicatorStyle: {
					backgroundColor: colors.cyan,
				},
				tabBarActiveTintColor: colors.black,
				tabBarInactiveTintColor: colors.gray100,
			}}
			sceneContainerStyle={{
				backgroundColor: colors.white,
			}}
			overScrollMode="never"
			initialRouteName="AcoesOrdemServicoPage"
		>
			<TopTabBar.Screen
				name="AcoesOrdemServicoPage"
				options={{
					tabBarLabel: i18n.t('workOrderActions.actions.actions'),
				}}
				component={AcoesOrdemServicoPage}
			/>
			<TopTabBar.Screen
				name="ChecklistOrdemServicoPage"
				options={{
					tabBarLabel: i18n.t('workOrderActions.checklist.checklist'),
				}}
				component={ChecklistOrdemServicoPage}
			/>
		</TopTabBar.Navigator>
	)
}

export default AcoesOrdemServicoTopTabNavigator
