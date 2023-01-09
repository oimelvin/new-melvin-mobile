import React from 'react'

import { ButtonContainer, Label } from './styles'
import colors from '@styles/colors.style'
import { ButtonOpacity } from '@styles/global.style'
import Icon from '@components/Icon'

interface ButtonProps {
	label: string
	onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
	return (
		<ButtonOpacity onPress={onPress}>
			<ButtonContainer>
				<Label>{label}</Label>
				<Icon
					provider="materialIcons"
					iconName="chevron-right"
					color={colors.black}
				/>
			</ButtonContainer>
		</ButtonOpacity>
	)
}

export default Button
