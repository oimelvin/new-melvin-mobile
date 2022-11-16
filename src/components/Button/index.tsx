import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
	ButtonContainerFill,
	ButtonContainerOutline,
	ButtonContainerFillDisabled,
	ButtonContainerOutlineDisabled,
	TextButtonFill,
	TextButtonFillDisabled,
	TextButtonOutlineDisabled,
	TextButtonOutline,
} from './styles'

export type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> & {
  variant?: 'fill' | 'outline'
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	disabled,
	...rest
}) => {
	const renderChildren = () => {
		if (typeof children === 'string') {
			if (!variant || variant === 'fill') {
				if (disabled) {
					return <TextButtonFillDisabled>{children}</TextButtonFillDisabled>
				}

				return <TextButtonFill>{children}</TextButtonFill>
			}

			if (disabled) {
				return <TextButtonOutlineDisabled>{children}</TextButtonOutlineDisabled>
			}

			return <TextButtonOutline>{children}</TextButtonOutline>
		}

		return children
	}

	if (!variant || variant === 'fill') {
		if (disabled) {
			return (
				<ButtonContainerFillDisabled disabled {...rest}>
					{renderChildren()}
				</ButtonContainerFillDisabled>
			)
		}

		return (
			<ButtonContainerFill {...rest}>{renderChildren()}</ButtonContainerFill>
		)
	}

	if (disabled) {
		return (
			<ButtonContainerOutlineDisabled disabled {...rest}>
				{renderChildren()}
			</ButtonContainerOutlineDisabled>
		)
	}

	return (
		<ButtonContainerOutline {...rest}>
			{renderChildren()}
		</ButtonContainerOutline>
	)
}

export default Button
