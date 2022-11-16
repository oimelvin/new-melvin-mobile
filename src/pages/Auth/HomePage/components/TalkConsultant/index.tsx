import React from 'react'

import { TalkConsultantContainer, TalkConsultantText } from './styles'
import BouncingIcon from '@components/BouncingIcon'
import { i18n } from '@languages/index'

const TalkConsultant: React.FC = () => (
	<TalkConsultantContainer>
		<BouncingIcon provider="ionicons" iconName="chevron-up" color="#FFF" />
		<TalkConsultantText>{i18n.t('home.talkConsultant')}</TalkConsultantText>
	</TalkConsultantContainer>
)

export default TalkConsultant
