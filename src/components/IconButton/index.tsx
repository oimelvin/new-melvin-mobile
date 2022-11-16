import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import Icon, { IconProps } from '../Icon'
import { IconButtonContainer } from './styles'

export type IconButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> &
  IconProps

const IconButton: React.FC<IconButtonProps> = ({
	provider,
	iconName,
	color,
	size,
	...rest
}) => (
	<IconButtonContainer {...rest}>
		<Icon provider={provider} iconName={iconName} color={color} size={size} />
	</IconButtonContainer>
)

export default IconButton
