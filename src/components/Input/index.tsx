import React, { ReactElement } from 'react'
import { ColorValue, TextInputProps } from 'react-native'

import colors from '@styles/colors.style'
import { MarginRight, MarginTop, Text } from '@styles/global.style'
import {
	InputContainer,
	InputLabel,
	TextInputBorder,
	TextInput,
	FixedText,
	ButtonTextInputContainer,
	InfoContainer,
	InfoText,
	ErrorText,
} from './styles'
import Icon from '../Icon'

export type InputProps = Omit<
	TextInputProps,
	'editable' | 'passwordRules' | 'secureTextEntry'
> & {
	label?: string
	disabled?: boolean
	readOnly?: boolean
	isPassword?: boolean
	infoText?: string
	errorText?: string
	rightComponent?: ReactElement
	color?: ColorValue
	translucentBackground?: boolean
}

const Input: React.FC<InputProps> = ({
	label,
	value,
	disabled,
	readOnly,
	isPassword,
	rightComponent,
	infoText,
	errorText,
	color,
	placeholderTextColor,
	selectionColor,
	translucentBackground,
	...rest
}) => {
	const getColor = (): string => {
		if (errorText) {
			return colors.red
		} else if (disabled) {
			return colors.gray500
		}

		return color ? color.toString() : colors.black
	}

	const renderLabel = () => label && label + (label.includes(':') ? '' : ':')

	const renderInfo = () => {
		if (errorText) {
			return (
				<>
					<Icon
						provider="materialIcons"
						iconName="error-outline"
						color={colors.red}
					/>
					<MarginRight value={10} />
					<ErrorText style={{ flexShrink: 1, flexWrap: 'wrap' }}>
						{errorText}
					</ErrorText>
				</>
			)
		}

		if (infoText) {
			return (
				<>
					<Icon
						provider="materialIcons"
						iconName="info-outline"
						color={placeholderTextColor || colors.gray500}
					/>
					<MarginRight value={10} />
					<InfoText color={placeholderTextColor || colors.gray500}>
						{infoText}
					</InfoText>
				</>
			)
		}

		return null
	}

	return (
		<InputContainer>
			{label && (
				<InputLabel color={color || colors.white}>
					{renderLabel()}
				</InputLabel>
			)}
			<MarginTop value={5} />
			<TextInputBorder
				borderColor={getColor()}
				translucentBackground={translucentBackground}
			>
				{readOnly ? (
					<FixedText color={getColor()}>{value}</FixedText>
				) : (
					<TextInput
						value={value}
						placeholderTextColor={
							placeholderTextColor || colors.gray500
						}
						selectionColor={selectionColor || colors.cyan}
						color={getColor()}
						secureTextEntry={isPassword}
						editable={!disabled}
						{...rest}
					/>
				)}
				<ButtonTextInputContainer>
					{rightComponent}
				</ButtonTextInputContainer>
			</TextInputBorder>
			<InfoContainer>{renderInfo()}</InfoContainer>
		</InputContainer>
	)
}

export default Input
