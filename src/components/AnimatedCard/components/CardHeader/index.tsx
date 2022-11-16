import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { CardHeaderContainer, CardIndicator } from './styles'

type CardHeaderProps = {
	toggleAnimate(): void
}

const CardHeader: React.FC<CardHeaderProps> = ({ toggleAnimate }) => {
	return (
		<TouchableWithoutFeedback onPress={() => toggleAnimate()}>
			<CardHeaderContainer>
				<CardIndicator />
			</CardHeaderContainer>
		</TouchableWithoutFeedback>
	)
}

export default CardHeader
