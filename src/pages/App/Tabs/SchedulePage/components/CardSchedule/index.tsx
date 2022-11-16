import React from 'react'
import { Dimensions } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import AnimatedCard from '@components/AnimatedCard'
import CardScheduleMenu from '../CardScheduleMenu'

const CardSchedule: React.FC = () => {
	const cardHeight = Dimensions.get('window').height * 0.75

	return (
		<AnimatedCard cardHeight={cardHeight}>
			<CardScheduleMenu />
			<MarginTop value={32} />
			<Title>Programação</Title>
		</AnimatedCard>
	)
}

export default CardSchedule
