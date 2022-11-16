import React from 'react'

import { ScheduleContainer, ScheduleTitle } from './styles'

import { MarginTop } from '@styles/global.style'
import CardSchedule from './components/CardSchedule'

import { i18n } from '@languages/index'

const SchedulePage: React.FC = () => (
	<>
		<ScheduleContainer>
			<ScheduleTitle>{i18n.t('schedule.schedule')}</ScheduleTitle>
			<MarginTop value={16} />
		</ScheduleContainer>
		<CardSchedule />
	</>
)

export default SchedulePage
