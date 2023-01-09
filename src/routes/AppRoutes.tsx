import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'

import colors from '@styles/colors.style'

import BottomTabNavigator from './BottomTabNavigator'
import NotificationTopTabNavigator from './NotificationTopTabNavigator'
import AccountPage from '@pages/App/AccountPage'

import FiltroEquipamentoPage from '@pages/App/FiltroEquipamentoPage'
import QRCodeEquipamentoPage from '@pages/App/QRCodeEquipamentoPage'

import SolicitacaoServicosPage from '@pages/App/SolicitacoesPage'
import SolicitacaoDetalheComponent from '@pages/App/SolicitacoesPage/components/SolicitacaoDetalheComponent'
import NovaSolicitacaoComponent from '@pages/App/SolicitacoesPage/components/NovaSolicitacaoComponent'

import CarteiraServicosPage from '@pages/App/OrdemServico/CarteiraServicosPage'
import FiltroCarteiraServicosPage from '@pages/App/OrdemServico/FiltroCarteiraServicosPage'
import AdicionarOrdemServicoPage from '@pages/App/OrdemServico/AdicionarOrdemServicoPage'
import DetalhesOrdemServicoPage from '@pages/App/OrdemServico/DetalhesOrdemServicoPage'
import AcoesOrdemServicoTopTabNavigator from './AcoesOrdemServicoTopTabNavigator'
import PlanejamentoOrdemServicoPage from '@pages/App/OrdemServico/PlanejamentoOrdemServicoPage'
import ControleOrdemServicoPage from '@pages/App/OrdemServico/ControleOrdemServicoPage'
import AnexosOrdemServicoPage from '@pages/App/OrdemServico/AnexosOrdemServicoPage'
import RastreabilidadeOrdemServicoPage from '@pages/App/OrdemServico/RastreabilidadeOrdemServicoPage'
import ProgramacaoPage from '@pages/App/OrdemServico/ProgramacaoPage'
import FiltroProgramacaoPage from '@pages/App/OrdemServico/FiltroProgramacaoPage'

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
	AcoesOrdemServicoTopTabNavigator: {
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
	FiltroProgramacaoPage: undefined
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
			name="AcoesOrdemServicoTopTabNavigator"
			component={AcoesOrdemServicoTopTabNavigator}
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
			name="FiltroProgramacaoPage"
			component={FiltroProgramacaoPage}
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
