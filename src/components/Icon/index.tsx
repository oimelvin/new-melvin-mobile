import React, { useContext } from 'react'
import { ColorValue } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { ThemeContext } from '@contexts/theme.context'
import { IconContainer } from './styles'

export type IconProps = {
	provider:
		| 'feather'
		| 'fontAwesome'
		| 'fontAwesome5'
		| 'fontisto'
		| 'ionicons'
		| 'materialCommunityIcons'
		| 'materialIcons'
	iconName: string
	color?: ColorValue
	size?: number
}

const Icon: React.FC<IconProps> = ({ provider, iconName, color, size }) => {
	const { theme } = useContext(ThemeContext)

	const getIcon = () => {
		let Icon

		switch (provider) {
			case 'feather':
				Icon = Feather
				break
			case 'fontAwesome':
				Icon = FontAwesome
				break
			case 'fontAwesome5':
				Icon = FontAwesome5
				break
			case 'fontisto':
				Icon = Fontisto
				break
			case 'ionicons':
				Icon = Ionicons
				break
			case 'materialCommunityIcons':
				Icon = MaterialCommunityIcons
				break
			case 'materialIcons':
				Icon = MaterialIcons
				break
		}

		return (
			<Icon
				name={iconName}
				color={color || theme.colors.text}
				size={size || 24}
			/>
		)
	}

	return <IconContainer>{getIcon()}</IconContainer>
}

export default Icon
