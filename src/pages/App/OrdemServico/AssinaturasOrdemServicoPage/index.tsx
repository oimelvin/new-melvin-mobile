import React from 'react'

import { AssinaturasOrdemServicoPageContainer } from './styles'
import { PageContainer, Text } from '@styles/global.style'

import useAssinaturasOrdemServicoHook from './hooks/useAssinaturasOrdemServico.hook'
import { i18n } from '@languages/index'

const AssinaturasOrdemServicoPage: React.FC = () => {
	const { handles } = useAssinaturasOrdemServicoHook()

	return (
		<AssinaturasOrdemServicoPageContainer>
			<PageContainer>
				<Text>Assinaturas</Text>
			</PageContainer>
		</AssinaturasOrdemServicoPageContainer>
	)
}

export default AssinaturasOrdemServicoPage
