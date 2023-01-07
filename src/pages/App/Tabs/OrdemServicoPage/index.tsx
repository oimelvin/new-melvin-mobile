import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import {
	AcessoRapidoOrdemServicoContainer,
	OrdemServicoContainer,
	OrdemServicoTitle,
} from './styles'
import { MarginLeft, MarginTop } from '@styles/global.style'
import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import colors from '@styles/colors.style'
import CardButton from '@components/CardButton'
import Icon from '@components/Icon'

type BottomTabNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'BottomTabNavigator'
>

const OrdemServicoPage: React.FC = () => {
	const { navigate } = useNavigation<BottomTabNavigatorProp>()

	return (
		<OrdemServicoContainer>
			<OrdemServicoTitle>
				{i18n.t('workOrders.workOrders')}
			</OrdemServicoTitle>
			<MarginTop value={16} />
			<AcessoRapidoOrdemServicoContainer>
				<CardButton
					icon={
						<Icon
							provider="materialCommunityIcons"
							iconName="file-check"
							size={45}
							color={colors.white}
						/>
					}
					label={i18n.t('workOrders.servicesPortfolio')}
					onPress={() => navigate('CarteiraServicosPage')}
				/>
				<MarginLeft value={16} />
				<CardButton
					icon={
						<Icon
							provider="materialCommunityIcons"
							iconName="calendar-account"
							size={45}
							color={colors.white}
						/>
					}
					label={i18n.t('workOrders.schedule')}
					onPress={() => navigate('ProgramacaoPage')}
				/>
				<MarginLeft value={16} />
				<CardButton
					icon={
						<Icon
							provider="materialCommunityIcons"
							iconName="file-clock"
							size={45}
							color={colors.white}
						/>
					}
					label={i18n.t('workOrders.serviceRequest')}
					onPress={() => navigate('SolicitacaoServicosPage')}
				/>
			</AcessoRapidoOrdemServicoContainer>
		</OrdemServicoContainer>
	)
}

export default OrdemServicoPage
