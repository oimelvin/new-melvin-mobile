import React from 'react'
import { Alert, View } from 'react-native'

import colors from '@styles/colors.style'
import Icon from '@components/Icon'
import MenuItem from '../MenuItem'

import { i18n } from '@languages/index'

const Menu: React.FC = () => {
	return (
		<View style={{ flex: 1 }}>
			<MenuItem
				icon={
					<Icon
						provider="materialCommunityIcons"
						iconName="account"
						color={colors.white}
						size={30}
					/>
				}
				label={i18n.t('account.myData')}
				onPress={() =>
					Alert.alert(
						'Meus Dados',
						'Funcionalidade não implementada.'
					)
				}
			/>
			<MenuItem
				icon={
					<Icon
						provider="materialCommunityIcons"
						iconName="account-group"
						color={colors.white}
						size={30}
					/>
				}
				label={i18n.t('account.myData')}
				onPress={() =>
					Alert.alert(
						'Meus Dados',
						'Funcionalidade não implementada.'
					)
				}
			/>
			<MenuItem
				icon={
					<Icon
						provider="materialIcons"
						iconName="attach-money"
						color={colors.white}
						size={30}
					/>
				}
				label={i18n.t('account.portability')}
				onPress={() =>
					Alert.alert(
						'Portabilidade',
						'Funcionalidade não implementada.'
					)
				}
			/>
			<MenuItem
				icon={
					<Icon
						provider="materialCommunityIcons"
						iconName="cog"
						color={colors.white}
						size={30}
					/>
				}
				label={i18n.t('account.config')}
				onPress={() =>
					Alert.alert(
						'Configurações',
						'Funcionalidade não implementada.'
					)
				}
			/>
		</View>
	)
}

export default Menu
