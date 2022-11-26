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
import { MarginTop } from '@styles/global.style'
import SearchEquipmentTitle from './components/SearchEquipmentTitle'
import CardEquipment from './components/CardEquipment'
import useAtivoService from '@services/useAtivoService.hook'
import useAtivo from './ativo.context'
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
	'EquipmentPage'
>

const EquipmentPage: React.FC = () => {
	const { navigate } = useNavigation<BottomTabNavigatorProp>()
	const { params } = useRoute<EquipmentRouteProp>()

	const { getAtivoById } = useAtivoService()

	const { ativo, setAtivo } = useAtivo()

	const isFocused = useIsFocused()

	const carregarAtivo = async () => {
		if (params?.id) {
			const ativoApi = await getAtivoById(params?.id)
			setAtivo(ativoApi)
		}
	}

	useEffect(() => {
		if (isFocused) {
			carregarAtivo()
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
								size={75}
								color={colors.white}
							/>
						}
						label={i18n.t('equipment.manualSearch')}
						onPress={() => navigate('FiltroEquipamentoPage')}
					/>
					<CardButton
						icon={
							<Icon
								provider="materialIcons"
								iconName="qr-code"
								size={75}
								color={colors.white}
							/>
						}
						label={i18n.t('equipment.qrCodeSearch')}
						onPress={() => navigate('QRCodeEquipamentoPage')}
					/>
					<MarginTop value={32} />
				</AcessoRapidoEquipamentoContainer>
			</SearchEquipmentContainer>
			{ativo && <CardEquipment />}
		</>
	)
}

export default EquipmentPage
