import React from 'react'

import { MaterialContainer, MaterialTitle } from './styles'

import { MarginTop } from '@styles/global.style'
import CardMaterial from './components/CardMaterial'

import { i18n } from '@languages/index'

const MaterialPage: React.FC = () => (
	<>
		<MaterialContainer>
			<MaterialTitle>{i18n.t('material.materials')}</MaterialTitle>
			<MarginTop value={16} />
		</MaterialContainer>
		<CardMaterial />
	</>
)

export default MaterialPage
