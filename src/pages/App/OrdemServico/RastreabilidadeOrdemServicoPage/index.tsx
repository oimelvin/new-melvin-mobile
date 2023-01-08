import React from 'react'

import { RastreabilidadeOrdemServicoPageContainer } from './styles'
import useRastreabilidadeOrdemServicoHook from './hooks/useRastreabilidadeOrdemServico.hook'
import { PageContainer, Text } from '@styles/global.style'

import { i18n } from '@languages/index'

const RastreabilidadeOrdemServicoPage: React.FC = () => {
	const { data, handles } = useRastreabilidadeOrdemServicoHook()

	return (
		<RastreabilidadeOrdemServicoPageContainer>
			<PageContainer>
				<Text>Rastreabilidade</Text>
			</PageContainer>
		</RastreabilidadeOrdemServicoPageContainer>
	)
}

export default RastreabilidadeOrdemServicoPage
