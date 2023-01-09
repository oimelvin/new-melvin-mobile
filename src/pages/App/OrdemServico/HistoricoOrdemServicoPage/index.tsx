import React from 'react'

import { HistoricoOrdemServicoPageContainer } from './styles'
import { PageContainer, Text } from '@styles/global.style'

import useHistoricoOrdemServicoHook from './hooks/useHistoricoOrdemServico.hook'
import { i18n } from '@languages/index'

const HistoricoOrdemServicoPage: React.FC = () => {
	const { handles } = useHistoricoOrdemServicoHook()

	return (
		<HistoricoOrdemServicoPageContainer>
			<PageContainer>
				<Text>Histórico</Text>
			</PageContainer>
		</HistoricoOrdemServicoPageContainer>
	)
}

export default HistoricoOrdemServicoPage
