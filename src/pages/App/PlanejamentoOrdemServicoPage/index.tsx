import React from 'react'

import { PlanejamentoOrdemServicoPageContainer } from './styles'
import usePlanejamentoOrdemServicoHook from './hooks/usePlanejamentoOrdemServico.hook'
import { PageContainer, ScrollView, Text } from '@styles/global.style'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'

const PlanejamentoOrdemServicoPage: React.FC = () => {
	const { data } = usePlanejamentoOrdemServicoHook()

	if (data.loading) {
		return (
			<PlanejamentoOrdemServicoPageContainer>
				<Loading />
			</PlanejamentoOrdemServicoPageContainer>
		)
	}

	return (
		<PlanejamentoOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<Text>Planejamento</Text>
				</ScrollView>
			</PageContainer>
		</PlanejamentoOrdemServicoPageContainer>
	)
}

export default PlanejamentoOrdemServicoPage
