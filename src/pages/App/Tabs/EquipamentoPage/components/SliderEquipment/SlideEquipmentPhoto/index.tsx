import React from 'react'
import { Image, View } from 'react-native'

import { i18n } from '@languages/index'

import colors from '@styles/colors.style'
import { MarginTop, SlideTitle } from '@styles/global.style'
import Icon from '@components/Icon'
import useEquipamento from '../../../equipamento.context'
import { BASE_URL_FILES } from '@services/apiFiles'

const SlideEquipmentPhoto: React.FC = () => {
	const { equipamento } = useEquipamento()

	return (
		<View style={{ flex: 1, paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.equipmentPhoto')}</SlideTitle>
			<MarginTop value={16} />
			<Image
				style={{ flex: 1 }}
				resizeMode="contain"
				source={{
					uri: `${BASE_URL_FILES}${equipamento!.imagem}`,
				}}
			/>
			<View
				style={{
					padding: 5,
					alignSelf: 'center',
					borderRadius: 50,
					backgroundColor: equipamento!.isActive
						? colors.green
						: colors.red,
				}}
			>
				<Icon
					provider="materialCommunityIcons"
					iconName={equipamento!.isActive ? 'check' : 'close'}
					color={colors.white}
				/>
			</View>
		</View>
	)
}

export default SlideEquipmentPhoto
