import React from 'react'
import { Dimensions } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import AnimatedCard from '@components/AnimatedCard'
import CardMaterialMenu from '../CardMaterialMenu'

const CardMaterial: React.FC = () => {
	const cardHeight = Dimensions.get('window').height * 0.75

	return (
		<AnimatedCard cardHeight={cardHeight}>
			<CardMaterialMenu />
			<MarginTop value={32} />
			<Title>Materiais</Title>
		</AnimatedCard>
	)
}

export default CardMaterial
