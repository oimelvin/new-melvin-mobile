import React from 'react'
import { View } from 'react-native'

import { i18n } from '@languages/index'
import { EquipmentSubTitle, EquipmentTitle } from './styles'

const SearchEquipmentTitle: React.FC = () => {
	return (
		<View>
			<EquipmentSubTitle>{i18n.t('equipment.searchThe')}</EquipmentSubTitle>
			<EquipmentTitle>{i18n.t('equipment.equipment')}</EquipmentTitle>
		</View>
	)
}

export default SearchEquipmentTitle
