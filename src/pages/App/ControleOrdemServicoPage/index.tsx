import React from 'react'

import { ControleOrdemServicoPageContainer } from './styles'
import useControleOrdemServicoHook from './hooks/useControleOrdemServico.hook'
import { PageContainer, ScrollView, Text } from '@styles/global.style'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'

const ControleOrdemServicoPage: React.FC = () => {
	const { data } = useControleOrdemServicoHook()

	if (data.loading) {
		return (
			<ControleOrdemServicoPageContainer>
				<Loading />
			</ControleOrdemServicoPageContainer>
		)
	}

	return (
		<ControleOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<Text>Controle</Text>
				</ScrollView>
			</PageContainer>
		</ControleOrdemServicoPageContainer>
	)
}

export default ControleOrdemServicoPage
