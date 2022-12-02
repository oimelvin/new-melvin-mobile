import React, { useEffect } from 'react'
import {
	RouteProp,
	useIsFocused,
	useNavigation,
	useRoute,
} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
	AcessoRapidoEquipamentoContainer,
	SearchEquipmentContainer,
} from './styles'
import { MarginLeft, MarginTop } from '@styles/global.style'
import SearchEquipmentTitle from './components/SearchEquipmentTitle'
import CardEquipment from './components/CardEquipment'
import useEquipamentoService from '@services/useEquipamentoService.hook'
import useEquipamento from './equipamento.context'
import CardButton from '@components/CardButton'
import Icon from '@components/Icon'
import colors from '@styles/colors.style'

import { BottomTabNavigatorParamList } from '@routes/BottomTabNavigator'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { i18n } from '@languages/index'

type BottomTabNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'BottomTabNavigator'
>
type EquipmentRouteProp = RouteProp<
	BottomTabNavigatorParamList,
	'EquipamentoPage'
>

const EquipamentoPage: React.FC = () => {
	const { navigate } = useNavigation<BottomTabNavigatorProp>()
	const { params } = useRoute<EquipmentRouteProp>()

	const { getEquipamentoById } = useEquipamentoService()

	const { equipamento, setEquipamento } = useEquipamento()

	const isFocused = useIsFocused()

	const carregarEquipamento = async () => {
		if (params?.id) {
			const equipamentoApi = await getEquipamentoById(params?.id)
			setEquipamento(equipamentoApi)
		}
	}

	useEffect(() => {
		if (isFocused) {
			carregarEquipamento()
		}
	}, [isFocused])

	return (
		<>
			<SearchEquipmentContainer>
				<SearchEquipmentTitle />
				<MarginTop value={16} />
				<AcessoRapidoEquipamentoContainer>
					<CardButton
						icon={
							<Icon
								provider="materialIcons"
								iconName="search"
								size={45}
								color={colors.white}
							/>
						}
						label={i18n.t('equipment.manualSearch')}
						onPress={() => navigate('FiltroEquipamentoPage')}
					/>
					<MarginLeft value={16} />
					<CardButton
						icon={
							<Icon
								provider="materialIcons"
								iconName="qr-code"
								size={45}
								color={colors.white}
							/>
						}
						label={i18n.t('equipment.qrCodeSearch')}
						onPress={() => navigate('QRCodeEquipamentoPage')}
					/>
				</AcessoRapidoEquipamentoContainer>
			</SearchEquipmentContainer>
			{equipamento && <CardEquipment />}
		</>
	)
}

export default EquipamentoPage
