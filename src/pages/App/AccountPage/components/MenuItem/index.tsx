import React, { ReactElement } from 'react'

import { MarginLeft, Text } from '@styles/global.style'
import { MenuItemContainer } from './styles'
import colors from '@styles/colors.style'

type MenuItemProps = {
	icon: ReactElement
	label: string
	onPress(): void
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onPress }) => {
	return (
		<MenuItemContainer onPress={onPress}>
			{icon}
			<MarginLeft value={15} />
			<Text color={colors.white}>{label}</Text>
		</MenuItemContainer>
	)
}

export default MenuItem
