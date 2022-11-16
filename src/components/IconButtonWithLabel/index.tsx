import React from 'react'

import { IconButtonProps } from '../IconButton'
import {
	IconButtonContainer,
	IconButtonLabel,
	StyledIconButton,
} from './styles'

export type EquipmentIconButtonProps = {
  label: string
} & Omit<Omit<IconButtonProps, 'size'>, 'color'>

const IconButtonWithLabel: React.FC<EquipmentIconButtonProps> = ({
	provider,
	iconName,
	label,
	onPress,
}) => (
	<IconButtonContainer>
		<StyledIconButton
			provider={provider}
			iconName={iconName}
			onPress={onPress}
		/>
		<IconButtonLabel>{label}</IconButtonLabel>
	</IconButtonContainer>
)

export default IconButtonWithLabel
