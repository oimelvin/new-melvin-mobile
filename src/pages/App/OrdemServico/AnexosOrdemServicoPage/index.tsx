import React from 'react'

import { AnexosOrdemServicoPageContainer } from './styles'
import useAnexosOrdemServicoHook from './hooks/useAnexosOrdemServico.hook'
import { PageContainer, Text } from '@styles/global.style'

import { i18n } from '@languages/index'

const AnexosOrdemServicoPage: React.FC = () => {
	const { data, handles } = useAnexosOrdemServicoHook()

	return (
		<AnexosOrdemServicoPageContainer>
			<PageContainer>
				<Text>Anexos</Text>
			</PageContainer>
		</AnexosOrdemServicoPageContainer>
	)
}

export default AnexosOrdemServicoPage
