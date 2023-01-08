import React from 'react'

import { PlanejamentoOrdemServicoPageContainer } from './styles'
import usePlanejamentoOrdemServicoHook from './hooks/usePlanejamentoOrdemServico.hook'
import { PageContainer, Text } from '@styles/global.style'

import { i18n } from '@languages/index'

const PlanejamentoOrdemServicoPage: React.FC = () => {
	const { data, handles } = usePlanejamentoOrdemServicoHook()

	return (
		<PlanejamentoOrdemServicoPageContainer>
			<PageContainer>
				<Text>Planejamento</Text>
			</PageContainer>
		</PlanejamentoOrdemServicoPageContainer>
	)
}

export default PlanejamentoOrdemServicoPage
