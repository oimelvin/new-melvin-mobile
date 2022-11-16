import React from 'react'
import { Dimensions } from 'react-native'

import { MarginTop } from '@styles/global.style'
import AnimatedCard from '@components/AnimatedCard'
import CardEquipmentMenu from '../CardEquipmentMenu'
import SliderEquipment from '../SliderEquipment'

const CardEquipment: React.FC = () => {
	const cardHeight = Dimensions.get('window').height * 0.75

	return (
		<AnimatedCard cardHeight={cardHeight}>
			<CardEquipmentMenu />
			<MarginTop value={32} />
			<SliderEquipment />
		</AnimatedCard>
	)
}

export default CardEquipment
