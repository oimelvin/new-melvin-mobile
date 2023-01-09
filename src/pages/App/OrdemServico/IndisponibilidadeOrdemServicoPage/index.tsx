import React from 'react'

import { IndisponibilidadeOrdemServicoPageContainer } from './styles'
import { PageContainer, Text } from '@styles/global.style'

import useIndisponibilidadeOrdemServicoHook from './hooks/useIndisponibilidadeOrdemServico.hook'
import { i18n } from '@languages/index'

const IndisponibilidadeOrdemServicoPage: React.FC = () => {
	const { handles } = useIndisponibilidadeOrdemServicoHook()

	return (
		<IndisponibilidadeOrdemServicoPageContainer>
			<PageContainer>
				<Text>Indisponibilidade</Text>
			</PageContainer>
		</IndisponibilidadeOrdemServicoPageContainer>
	)
}

export default IndisponibilidadeOrdemServicoPage
