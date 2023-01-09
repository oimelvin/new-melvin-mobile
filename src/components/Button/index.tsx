import React from 'react'
import { ColorValue, TouchableOpacityProps } from 'react-native'

import colors from '@styles/colors.style'

import { ButtonContainer, TextButton } from './styles'

export type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> & {
	variant?: 'fill' | 'outline'
	color?: ColorValue
	textColor?: ColorValue
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	color,
	textColor,
	disabled,
	...rest
}) => {
	const renderChildren = () => {
		if (typeof children === 'string') {
			if (!variant || variant === 'fill') {
				if (disabled) {
					return (
						<TextButton style={{ color: colors.white }}>
							{children}
						</TextButton>
					)
				}

				return (
					<TextButton style={{ color: textColor || colors.black }}>
						{children}
					</TextButton>
				)
			}

			if (disabled) {
				return (
					<TextButton style={{ color: colors.gray100 }}>
						{children}
					</TextButton>
				)
			}

			return (
				<TextButton style={{ color: textColor || colors.white }}>
					{children}
				</TextButton>
			)
		}

		return children
	}

	if (!variant || variant === 'fill') {
		if (disabled) {
			return (
				<ButtonContainer
					style={{
						backgroundColor: colors.gray100,
						borderColor: colors.gray100,
					}}
					disabled
					{...rest}
				>
					{renderChildren()}
				</ButtonContainer>
			)
		}

		return (
			<ButtonContainer
				style={{
					backgroundColor: color || colors.cyan,
					borderColor: color || colors.cyan,
				}}
				{...rest}
			>
				{renderChildren()}
			</ButtonContainer>
		)
	}

	if (disabled) {
		return (
			<ButtonContainer
				style={{
					borderColor: colors.gray100,
				}}
				disabled
				{...rest}
			>
				{renderChildren()}
			</ButtonContainer>
		)
	}

	return (
		<ButtonContainer
			style={{
				backgroundColor: 'transparent',
				borderColor: color || colors.white,
			}}
			{...rest}
		>
			{renderChildren()}
		</ButtonContainer>
	)
}

export default Button
