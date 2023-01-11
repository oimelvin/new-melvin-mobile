import React, { ReactElement } from 'react'
import { ColorValue, TextInputProps, View } from 'react-native'

import colors from '@styles/colors.style'
import { MarginRight, MarginTop, Text } from '@styles/global.style'
import {
	InputContainer,
	TextInputBorder,
	TextInput,
	FixedText,
	ButtonTextInputContainer,
	InfoContainer,
	InfoText,
	ErrorText,
} from './styles'

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
	backgroundColor?: ColorValue
	color?: ColorValue
	multilineHeight?: number
	required?: boolean
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
	backgroundColor,
	color,
	placeholder,
	placeholderTextColor,
	selectionColor,
	multiline,
	required,
	...rest
}) => {
	const getColor = (): string => {
		if (errorText) {
			return colors.red
		} else if (disabled) {
			return colors.gray300
		} else if (!value) {
			return colors.gray500
		}

		return color ? color.toString() : colors.black
	}

	const renderLabel = () => label && label + (label.includes(':') ? '' : ':')

	const renderInfo = () => {
		if (errorText) {
			return (
				<>
					<MarginRight value={16} />
					<ErrorText style={{ flexShrink: 1, flexWrap: 'wrap' }}>
						{errorText}
					</ErrorText>
				</>
			)
		}

		if (infoText) {
			return (
				<>
					<MarginRight value={10} />
					<InfoText
						color={disabled ? colors.gray300 : colors.gray500}
					>
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
				<View
					style={{
						flexDirection: 'row',
						marginLeft: 16,
					}}
				>
					<Text color={color || colors.black}>{renderLabel()}</Text>
					<MarginRight value={5} />
					{required && <Text color={colors.red}>*</Text>}
				</View>
			)}
			<MarginTop value={5} />
			<TextInputBorder
				borderColor={getColor()}
				backgroundColor={backgroundColor}
			>
				{readOnly ? (
					<FixedText color={getColor()}>
						{value || placeholder}
					</FixedText>
				) : (
					<TextInput
						value={value}
						placeholder={placeholder}
						placeholderTextColor={
							disabled ? colors.gray300 : colors.gray500
						}
						selectionColor={colors.cyan}
						color={getColor()}
						secureTextEntry={isPassword}
						editable={!disabled}
						multiline={multiline}
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
