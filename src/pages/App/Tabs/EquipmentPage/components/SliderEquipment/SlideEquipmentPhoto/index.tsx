import React from 'react'
import { Image, View } from 'react-native'

import { i18n } from '@languages/index'

import colors from '@styles/colors.style'
import { MarginTop, SlideTitle } from '@styles/global.style'
import Icon from '@components/Icon'
import useAtivo from '../../../ativo.context'
import { BASE_URL_FILES } from '@services/apiFiles'

const SlideEquipmentPhoto: React.FC = () => {
	const { ativo } = useAtivo()

	return (
		<View style={{ flex: 1, paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.equipmentPhoto')}</SlideTitle>
			<MarginTop value={16} />
			<Image
				style={{ flex: 1 }}
				resizeMode="contain"
				source={{
					uri: `${BASE_URL_FILES}${ativo!.imagem}`,
				}}
			/>
			<View
				style={{
					padding: 5,
					alignSelf: 'center',
					borderRadius: 50,
					backgroundColor: ativo!.isActive ? colors.green : colors.red,
				}}
			>
				<Icon
					provider="materialCommunityIcons"
					iconName={ativo!.isActive ? 'check' : 'close'}
					color={colors.white}
				/>
			</View>
		</View>
	)
}

export default SlideEquipmentPhoto
