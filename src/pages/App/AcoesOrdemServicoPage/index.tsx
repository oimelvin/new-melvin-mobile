import React from 'react'

import { AcoesOrdemServicoPageContainer } from './styles'
import useAcoesOrdemServicoHook from './hooks/useAcoesOrdemServico.hook'
import { PageContainer, ScrollView, Text } from '@styles/global.style'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'

const AcoesOrdemServicoPage: React.FC = () => {
	const { data } = useAcoesOrdemServicoHook()

	if (data.loading) {
		return (
			<AcoesOrdemServicoPageContainer>
				<Loading />
			</AcoesOrdemServicoPageContainer>
		)
	}

	return (
		<AcoesOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<Text>Ações</Text>
				</ScrollView>
			</PageContainer>
		</AcoesOrdemServicoPageContainer>
	)
}

export default AcoesOrdemServicoPage
