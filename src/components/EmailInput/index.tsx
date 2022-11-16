import React from 'react'

import Input, { InputProps } from '../Input'

export type EmailInputProps = Omit<
  InputProps,
  | 'keyboardType'
  | 'autoCompleteType'
  | 'textContentType'
  | 'autoCapitalize'
  | 'spellCheck'
  | 'autoCorrect'
>

const EmailInput: React.FC<EmailInputProps> = ({
	maxLength,
	selectTextOnFocus,
	...rest
}) => (
	<Input
		keyboardType="email-address"
		autoComplete="email"
		textContentType="emailAddress"
		autoCapitalize="none"
		maxLength={maxLength || 120}
		spellCheck={false}
		autoCorrect={false}
		selectTextOnFocus={selectTextOnFocus || true}
		{...rest}
	/>
)

export default EmailInput
