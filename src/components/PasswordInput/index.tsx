import React, { useState } from 'react'

import { ButtonOpacity } from '@styles/global.style'
import Icon from '../Icon'
import Input, { InputProps } from '../Input'
import colors from '@styles/colors.style'

export type PasswordInputProps = InputProps

const PasswordInput: React.FC<PasswordInputProps> = props => {
	const [passwordVisible, setPasswordVisible] = useState(false)

	const renderButtonViewPassword = () => (
		<ButtonOpacity onPress={() => setPasswordVisible(value => !value)}>
			<Icon
				provider="materialCommunityIcons"
				iconName={passwordVisible ? 'eye-off' : 'eye'}
				color={colors.cyan}
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
