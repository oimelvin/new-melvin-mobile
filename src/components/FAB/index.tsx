import React from 'react'

import Icon from '../Icon'
import { IconButtonProps } from '@components/IconButton'
import { FABContainer } from './styles'
import { ButtonOpacity } from '@styles/global.style'

export type FABProps = {
	onPress(): void
} & IconButtonProps

const FAB: React.FC<FABProps> = ({
	provider,
	iconName,
	color,
	size,
	onPress,
}) => (
	<ButtonOpacity onPress={onPress}>
		<FABContainer>
			<Icon
				provider={provider}
				iconName={iconName}
				color={color}
				size={size}
			/>
		</FABContainer>
	</ButtonOpacity>
)

export default FAB
