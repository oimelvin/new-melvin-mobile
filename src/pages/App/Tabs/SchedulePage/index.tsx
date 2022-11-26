import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
	AcessoRapidoProgramacaoContainer,
	ScheduleContainer,
	ScheduleTitle,
} from './styles'

import { MarginTop } from '@styles/global.style'
import CardButton from '@components/CardButton'
import Icon from '@components/Icon'
import colors from '@styles/colors.style'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

type BottomTabNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'BottomTabNavigator'
>

const SchedulePage: React.FC = () => {
	const { navigate } = useNavigation<BottomTabNavigatorProp>()

	return (
		<ScheduleContainer>
			<ScheduleTitle>{i18n.t('schedule.schedule')}</ScheduleTitle>
			<MarginTop value={16} />
			<AcessoRapidoProgramacaoContainer>
				<CardButton
					icon={
						<Icon
							provider="materialCommunityIcons"
							iconName="clipboard-list"
							size={75}
							color={colors.white}
						/>
					}
					label={i18n.t('schedule.workOrders')}
					onPress={() => navigate('FiltroOrdemServicoPage')}
				/>
				<CardButton
					icon={
						<Icon
							provider="materialCommunityIcons"
							iconName="clipboard-list"
							size={75}
							color={colors.white}
						/>
					}
					label={i18n.t('schedule.solicitations')}
					onPress={() => navigate('FiltroSolicitacaoPage')}
				/>
			</AcessoRapidoProgramacaoContainer>
			<MarginTop value={32} />
		</ScheduleContainer>
	)
}

export default SchedulePage
