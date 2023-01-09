import React from 'react'

import { AlterarStatusOrdemServicoPageContainer } from './styles'
import { PageContainer, Text } from '@styles/global.style'

import useAlterarStatusOrdemServicoHook from './hooks/useAlterarStatusOrdemServico.hook'
import { i18n } from '@languages/index'

const AlterarStatusOrdemServicoPage: React.FC = () => {
	const { handles } = useAlterarStatusOrdemServicoHook()

	return (
		<AlterarStatusOrdemServicoPageContainer>
			<PageContainer>
				<Text>Alterar status da ordem de serviço</Text>
			</PageContainer>
		</AlterarStatusOrdemServicoPageContainer>
	)
}

export default AlterarStatusOrdemServicoPage
