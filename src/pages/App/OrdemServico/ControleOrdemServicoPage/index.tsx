import React from 'react'

import { ControleOrdemServicoPageContainer } from './styles'
import useControleOrdemServicoHook from './hooks/useControleOrdemServico.hook'
import { PageContainer, Text } from '@styles/global.style'

import { i18n } from '@languages/index'

const ControleOrdemServicoPage: React.FC = () => {
	const { data, handles } = useControleOrdemServicoHook()

	return (
		<ControleOrdemServicoPageContainer>
			<PageContainer>
				<Text>Controle</Text>
			</PageContainer>
		</ControleOrdemServicoPageContainer>
	)
}

export default ControleOrdemServicoPage
