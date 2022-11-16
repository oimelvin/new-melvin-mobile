import React from 'react'

import { MelvinContainer } from './styles'
import colors from '@styles/colors.style'

import { Title } from '@styles/global.style'

import { i18n } from '@languages/index'

const MelvinPage: React.FC = () => (
	<MelvinContainer>
		<Title color={colors.white}>{i18n.t('melvin.myShortcuts')}</Title>
	</MelvinContainer>
)

export default MelvinPage
