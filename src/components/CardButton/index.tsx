import React, { ReactElement } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { MarginTop } from '@styles/global.style'
import {
	CardButtonContainer,
	CardButtonLabelContainer,
	CardButtonLabel,
} from './styles'

export type CardButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> & {
  icon: ReactElement
  label: string
}

const CardButton: React.FC<CardButtonProps> = ({ icon, label, onPress }) => (
	<CardButtonContainer onPress={onPress}>
		{icon}
		<MarginTop value={10} />
		<CardButtonLabelContainer>
			<CardButtonLabel>{label}</CardButtonLabel>
		</CardButtonLabelContainer>
	</CardButtonContainer>
)

export default CardButton
