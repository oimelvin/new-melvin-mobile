import Icon from '@components/Icon'
import { ButtonOpacity, MarginTop } from '@styles/global.style'
import React from 'react'

import { IconButtonProps } from '../IconButton'
import { IconButtonContainer, IconButtonLabel, IconContainer } from './styles'

export type IconButtonWithLabelProps = {
	label: string
} & Omit<Omit<IconButtonProps, 'size'>, 'color'>

const IconButtonWithLabel: React.FC<IconButtonWithLabelProps> = ({
	provider,
	iconName,
	label,
	onPress,
	...props
}) => (
	<ButtonOpacity onPress={onPress}>
		<IconButtonContainer>
			<IconContainer>
				<Icon provider={provider} iconName={iconName} {...props} />
			</IconContainer>
			<MarginTop value={5} />
			<IconButtonLabel numberOfLines={1}>{label}</IconButtonLabel>
		</IconButtonContainer>
	</ButtonOpacity>
)

export default IconButtonWithLabel
