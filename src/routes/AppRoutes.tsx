import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigator from './BottomTabNavigator'
import FiltroEquipamentoPage from '@pages/App/FiltroEquipamentoPage'
import QRCodeEquipamentoPage from '@pages/App/QRCodeEquipamentoPage'
import NotificationTopTabNavigator from './NotificationTopTabNavigator'
import AccountPage from '@pages/App/AccountPage'
import colors from '@styles/colors.style'
import SolicitacaoServicosPage from '@pages/App/SolicitacoesPage'
import CarteiraServicosPage from '@pages/App/CarteiraServicosPage'
import AdicionarOrdemServicoPage from '@pages/App/AdicionarOrdemServicoPage'
import AcoesOrdemServicoPage from '@pages/App/AcoesOrdemServicoPage'
import PlanejamentoOrdemServicoPage from '@pages/App/PlanejamentoOrdemServicoPage'
import ControleOrdemServicoPage from '@pages/App/ControleOrdemServicoPage'
import AnexosOrdemServicoPage from '@pages/App/AnexosOrdemServicoPage'
import RastreabilidadeOrdemServicoPage from '@pages/App/RastreabilidadeOrdemServicoPage'
import DetalhesOrdemServicoPage from '@pages/App/DetalhesOrdemServicoPage'
import FiltroCarteiraServicosPage from '@pages/App/FiltroCarteiraServicosPage'
import ProgramacaoPage from '@pages/App/ProgramacaoPage'
import SolicitacaoDetalheComponent from '@pages/App/SolicitacoesPage/components/SolicitacaoDetalheComponent'
import NovaSolicitacaoComponent from '@pages/App/SolicitacoesPage/components/NovaSolicitacaoComponent'

export type AppStackNavigatorParamList = {
	BottomTabNavigator: undefined
	FiltroEquipamentoPage: undefined
	QRCodeEquipamentoPage: undefined
	CarteiraServicosPage: undefined
	AdicionarOrdemServicoPage: {
		id?: string
	}
	DetalhesOrdemServicoPage: {
		id: string
	}
	AcoesOrdemServicoPage: {
		id: string
	}
	PlanejamentoOrdemServicoPage: {
		id: string
	}
	ControleOrdemServicoPage: {
		id: string
	}
	AnexosOrdemServicoPage: {
		id: string
	}
	RastreabilidadeOrdemServicoPage: {
		id: string
	}
	FiltroCarteiraServicosPage: undefined
	ProgramacaoPage: undefined
	SolicitacaoServicosPage: undefined
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
			name="DetalhesOrdemServicoPage"
			component={DetalhesOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="AcoesOrdemServicoPage"
			component={AcoesOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="PlanejamentoOrdemServicoPage"
			component={PlanejamentoOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="ControleOrdemServicoPage"
			component={ControleOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="AnexosOrdemServicoPage"
			component={AnexosOrdemServicoPage}
			options={{
				headerTransparent: false,
				animation: 'slide_from_right',
			}}
		/>
		<NativeStack.Screen
			name="RastreabilidadeOrdemServicoPage"
			component={RastreabilidadeOrdemServicoPage}
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
			name="ProgramacaoPage"
			component={ProgramacaoPage}
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
