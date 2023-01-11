import React from 'react'
import { ColorValue, TouchableOpacityProps } from 'react-native'

import { ButtonContainer, ButtonText } from './styles'
import colors from '@styles/colors.style'

export type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> & {
	label?: string
	color?: ColorValue
	labelColor?: ColorValue
	disabledColor?: ColorValue
	disabledLabelColor?: ColorValue
}

const Button: React.FC<ButtonProps> = ({
	label,
	children,
	color,
	labelColor,
	disabledColor,
	disabledLabelColor,
	disabled,
	...rest
}) => {
	const getColor = () => {
		if (disabled) {
			return disabledColor || colors.gray300
		}

		return color || colors.cyan
	}

	const getLabelColor = () => {
		if (disabled) {
			return disabledLabelColor || colors.black
		}

		return labelColor || colors.black
	}

	const renderContent = () => {
		if (!children && !label) {
			throw new Error('A label or children must be informed to button.')
		}

		return (
			children || <ButtonText color={getLabelColor()}>{label}</ButtonText>
		)
	}

	return (
		<ButtonContainer
			backgroundColor={getColor()}
			borderColor={getColor()}
			disabled={disabled}
			{...rest}
		>
			{renderContent()}
		</ButtonContainer>
	)
}

export default Button
