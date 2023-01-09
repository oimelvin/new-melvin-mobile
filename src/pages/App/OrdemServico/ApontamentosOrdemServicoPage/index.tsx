import React from 'react'

import { ApontamentosOrdemServicoPageContainer } from './styles'
import { PageContainer, Text } from '@styles/global.style'

import useApontamentosOrdemServicoHook from './hooks/useApontamentosOrdemServico.hook'
import { i18n } from '@languages/index'

const ApontamentosOrdemServicoPage: React.FC = () => {
	const { handles } = useApontamentosOrdemServicoHook()

	return (
		<ApontamentosOrdemServicoPageContainer>
			<PageContainer>
				<Text>Apontamentos</Text>
			</PageContainer>
		</ApontamentosOrdemServicoPageContainer>
	)
}

export default ApontamentosOrdemServicoPage
