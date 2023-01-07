import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigator from './BottomTabNavigator'
import FiltroEquipamentoPage from '@pages/App/FiltroEquipamentoPage'
import QRCodeEquipamentoPage from '@pages/App/QRCodeEquipamentoPage'
import CarteiraServicosPage from '@pages/App/CarteiraServicosPage'
import FiltroCarteiraServicosPage from '@pages/App/FiltroCarteiraServicosPage'
import NotificationTopTabNavigator from './NotificationTopTabNavigator'
import AccountPage from '@pages/App/AccountPage'
import colors from '@styles/colors.style'
import SolicitacaoServicosPage from '@pages/App/SolicitacoesPage'
import { FiltrosCarteiraServicos } from '@models/FiltrosCarteiraServicos'
import SolicitacaoDetalheComponent from '@pages/App/SolicitacoesPage/components/SolicitacaoDetalheComponent'
import NovaSolicitacaoComponent from '@pages/App/SolicitacoesPage/components/NovaSolicitacaoComponent'
import AdicionarOrdemServicoPage from '@pages/App/AdicionarOrdemServicoPage'

export type AppStackNavigatorParamList = {
	BottomTabNavigator: undefined
	FiltroEquipamentoPage: undefined
	QRCodeEquipamentoPage: undefined
	CarteiraServicosPage: undefined
	AdicionarOrdemServicoPage: {
		id?: string
	}
	SolicitacaoServicosPage: undefined
	FiltroCarteiraServicosPage: undefined
	NotificationTopTabNavigator: undefined
	AccountPage: undefined
	SolicitacaoDetalheComponent: undefined
	NovaSolicitacaoComponent: undefined
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
			headerBackTitleVisible: false,
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
			name="QRCodeEquipamentoPage"
			component={QRCodeEquipamentoPage}
			options={{
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="FiltroEquipamentoPage"
			component={FiltroEquipamentoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="CarteiraServicosPage"
			component={CarteiraServicosPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="AdicionarOrdemServicoPage"
			component={AdicionarOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="FiltroCarteiraServicosPage"
			component={FiltroCarteiraServicosPage}
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
		<NativeStack.Screen
			name="SolicitacaoServicosPage"
			component={SolicitacaoServicosPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>

		<NativeStack.Screen
			name="SolicitacaoDetalheComponent"
			component={SolicitacaoDetalheComponent}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="NovaSolicitacaoComponent"
			component={NovaSolicitacaoComponent}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>

		<NativeStack.Screen name="AccountPage" component={AccountPage} />
	</NativeStack.Navigator>
)

export default AppStackNavigator
