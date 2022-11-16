import React from 'react'
import { Alert } from 'react-native'

import { i18n } from '@languages/index'

import { EquipmentMenuContainer } from './styles'
import IconButtonWithLabel from '@components/IconButtonWithLabel'

const CardEquipmentMenu: React.FC = () => (
	<EquipmentMenuContainer>
		<IconButtonWithLabel
			label={i18n.t('equipment.technicalData')}
			provider="materialCommunityIcons"
			iconName="robot-industrial"
			onPress={() =>
				Alert.alert('Dados Técnicos', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.searchSolicitation')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar SS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.openSolicitation')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert('Abrir SS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.searchOS')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar OS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('equipment.openOS')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert('Abrir OS', 'Funcionalidade não implementada.')
			}
		/>
	</EquipmentMenuContainer>
)

export default CardEquipmentMenu
