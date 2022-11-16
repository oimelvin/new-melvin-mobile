import React from 'react'
import { Alert } from 'react-native'

import { i18n } from '@languages/index'

import { ScheduleMenuContainer } from './styles'
import IconButtonWithLabel from '@components/IconButtonWithLabel'

const CardScheduleMenu: React.FC = () => (
	<ScheduleMenuContainer>
		<IconButtonWithLabel
			label={i18n.t('schedule.myOS')}
			provider="materialCommunityIcons"
			iconName="calendar-account"
			onPress={() =>
				Alert.alert('Minhas OS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('schedule.searchSolicitation')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar SS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('schedule.openSolicitation')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert('Abrir SS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('schedule.searchOS')}
			provider="materialCommunityIcons"
			iconName="file-search-outline"
			onPress={() =>
				Alert.alert('Pesquisar OS', 'Funcionalidade não implementada.')
			}
		/>
		<IconButtonWithLabel
			label={i18n.t('schedule.openOS')}
			provider="materialCommunityIcons"
			iconName="file-document-edit-outline"
			onPress={() =>
				Alert.alert('Abrir OS', 'Funcionalidade não implementada.')
			}
		/>
	</ScheduleMenuContainer>
)

export default CardScheduleMenu
