import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { RouteProp, useRoute } from '@react-navigation/native'

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

type AcoesOrdemServicoTopTabNavigatorRouteProp = RouteProp<
	AcoesOrdemServicoTopTabNavigatorParamList,
	'AcoesOrdemServicoPage'
>

const TopTabBar =
	createMaterialTopTabNavigator<AcoesOrdemServicoTopTabNavigatorParamList>()

const AcoesOrdemServicoTopTabNavigator: React.FC = () => {
	const {
		params: { id },
	} = useRoute<AcoesOrdemServicoTopTabNavigatorRouteProp>()

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
				tabBarInactiveTintColor: colors.gray300,
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
				initialParams={{
					id,
				}}
			/>
			<TopTabBar.Screen
				name="ChecklistOrdemServicoPage"
				options={{
					tabBarLabel: i18n.t('workOrderActions.checklist.checklist'),
				}}
				component={ChecklistOrdemServicoPage}
				initialParams={{
					id,
				}}
			/>
		</TopTabBar.Navigator>
	)
}

export default AcoesOrdemServicoTopTabNavigator
