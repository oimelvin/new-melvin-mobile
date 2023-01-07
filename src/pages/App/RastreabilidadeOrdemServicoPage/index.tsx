import React from 'react'

import { RastreabilidadeOrdemServicoPageContainer } from './styles'
import useRastreabilidadeOrdemServicoHook from './hooks/useRastreabilidadeOrdemServico.hook'
import { PageContainer, ScrollView, Text } from '@styles/global.style'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'

const RastreabilidadeOrdemServicoPage: React.FC = () => {
	const { data } = useRastreabilidadeOrdemServicoHook()

	if (data.loading) {
		return (
			<RastreabilidadeOrdemServicoPageContainer>
				<Loading />
			</RastreabilidadeOrdemServicoPageContainer>
		)
	}

	return (
		<RastreabilidadeOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<Text>Rastreabilidade</Text>
				</ScrollView>
			</PageContainer>
		</RastreabilidadeOrdemServicoPageContainer>
	)
}

export default RastreabilidadeOrdemServicoPage
