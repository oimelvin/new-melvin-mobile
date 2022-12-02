import React from 'react'

import { DashboardContainer, DashboardTitle } from './styles'

import { MarginTop } from '@styles/global.style'
import CardMaterial from './components/CardMaterial'

import { i18n } from '@languages/index'

const DashboardPage: React.FC = () => (
	<>
		<DashboardContainer>
			<DashboardTitle>{i18n.t('dashboard.dashboard')}</DashboardTitle>
			<MarginTop value={16} />
		</DashboardContainer>
		<CardMaterial />
	</>
)

export default DashboardPage
