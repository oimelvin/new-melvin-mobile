import React from 'react'
import { Alert } from 'react-native'

import { i18n } from '@languages/index'

import { EquipmentMenuContainer } from './styles'
import IconButtonWithLabel from '@components/IconButtonWithLabel'

const CardEquipmentMenu: React.FC = () => (
	<EquipmentMenuContainer>
		<IconButtonWithLabel
			label={i18n.t('equipment.searchRequest')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert(
					'Pesquisar solicitação',
					'Funcionalidade não implementada.'
				)
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.openRequest')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert(
					'Abrir solicitação',
					'Funcionalidade não implementada.'
				)
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.searchWorkOrder')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert(
					'Pesquisar ordem de serviço',
					'Funcionalidade não implementada.'
				)
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.openWorkOrder')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert(
					'Abrir ordem de serviço',
					'Funcionalidade não implementada.'
				)
			}
		/>
	</EquipmentMenuContainer>
)

export default CardEquipmentMenu
