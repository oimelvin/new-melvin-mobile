import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { ButtonOpacity } from '@styles/global.style'
import Icon from '../Icon'
import Input, { InputProps } from '../Input'

export type PasswordInputProps = InputProps

const PasswordInput: React.FC<PasswordInputProps> = props => {
	const { colors } = useTheme()

	const [passwordVisible, setPasswordVisible] = useState(false)

	const renderButtonViewPassword = () => (
		<ButtonOpacity onPress={() => setPasswordVisible(value => !value)}>
			<Icon
				provider="materialCommunityIcons"
				iconName={passwordVisible ? 'eye-off' : 'eye'}
				color={colors.accent}
				size={24}
			/>
		</ButtonOpacity>
	)

	return (
		<Input
			isPassword={!passwordVisible}
			rightComponent={renderButtonViewPassword()}
			keyboardType={passwordVisible ? 'visible-password' : 'default'}
			textContentType="password"
			{...props}
		/>
	)
}

export default PasswordInput
