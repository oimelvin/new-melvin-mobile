import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

import { SearchEquipmentContainer } from './styles'
import colors from '@styles/colors.style'
import Icon from '@components/Icon'
import CardButton from '@components/CardButton'

type EquipmentPageProp = NativeStackNavigationProp<
  AppStackNavigatorParamList,
  'BottomTabNavigator'
>

const SearchEquipment: React.FC = () => {
	const { navigate } = useNavigation<EquipmentPageProp>()

	return (
		<SearchEquipmentContainer>
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
				onPress={() => navigate('SearchEquipmentManuallyPage')}
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
				onPress={() => navigate('SearchEquipmentQRCodePage')}
			/>
		</SearchEquipmentContainer>
	)
}

export default SearchEquipment
