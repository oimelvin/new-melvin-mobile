import React from 'react'

import { AnexosOrdemServicoPageContainer } from './styles'
import useAnexosOrdemServicoHook from './hooks/useAnexosOrdemServico.hook'
import { PageContainer, ScrollView, Text } from '@styles/global.style'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'

const AnexosOrdemServicoPage: React.FC = () => {
	const { data } = useAnexosOrdemServicoHook()

	if (data.loading) {
		return (
			<AnexosOrdemServicoPageContainer>
				<Loading />
			</AnexosOrdemServicoPageContainer>
		)
	}

	return (
		<AnexosOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<Text>Anexos</Text>
				</ScrollView>
			</PageContainer>
		</AnexosOrdemServicoPageContainer>
	)
}

export default AnexosOrdemServicoPage
