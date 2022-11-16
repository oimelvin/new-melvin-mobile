import React from 'react'
import { Alert } from 'react-native'

import { i18n } from '@languages/index'

import { MaterialMenuContainer } from './styles'
import IconButtonWithLabel from '@components/IconButtonWithLabel'

const CardMaterialMenu: React.FC = () => (
	<MaterialMenuContainer>
		<IconButtonWithLabel
			label={i18n.t('material.generalData')}
			provider="materialCommunityIcons"
			iconName="database"
			onPress={() =>
				Alert.alert('Dados Gerais', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('material.searchMaterial')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar Materiais', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('material.singleReservation')}
			provider="materialCommunityIcons"
			iconName="calendar-check"
			onPress={() =>
				Alert.alert('Reserva Avulsa', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('material.searchProvider')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar Fornecedor', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('material.registerProvider')}
			provider="materialIcons"
			iconName="add-business"
			onPress={() =>
				Alert.alert('Cadastrar Fornecedor', 'Funcionalidade não implementada.')
			}
		/>
	</MaterialMenuContainer>
)

export default CardMaterialMenu
