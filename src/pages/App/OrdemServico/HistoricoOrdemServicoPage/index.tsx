import React from 'react'

import { HistoricoOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer, Title } from '@styles/global.style'

import useHistoricoOrdemServicoHook from './hooks/useHistoricoOrdemServico.hook'
import { i18n } from '@languages/index'
import colors from '@styles/colors.style'
import Input from '@components/Input'
import Button from '@components/Button'

const HistoricoOrdemServicoPage: React.FC = () => {
	const { loading, saving, data, handles } = useHistoricoOrdemServicoHook()

	return (
		<HistoricoOrdemServicoPageContainer>
			<PageContainer>
				<Title color={colors.black}>
					{i18n.t('workOrderHistory.history')}
				</Title>
				<MarginTop value={15} />
				<Input
					value={data.historico}
					onChangeText={value => handles.setHistorico(value)}
					placeholder={i18n.t('workOrderHistory.informAHistory')}
					color={colors.black}
					numberOfLines={4}
					multiline
					translucentBackground
				/>
				<MarginTop value={15} />
				<Button
					onPress={handles.onSalvarHistorico}
					disabled={saving || loading}
				>
					{i18n.t('common.save')}
				</Button>
				<MarginTop value={15} />
			</PageContainer>
		</HistoricoOrdemServicoPageContainer>
	)
}

export default HistoricoOrdemServicoPage
