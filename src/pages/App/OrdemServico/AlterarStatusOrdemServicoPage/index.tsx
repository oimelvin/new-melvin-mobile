import React from 'react'

import { AlterarStatusOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer, Title } from '@styles/global.style'
import colors from '@styles/colors.style'
import Button from '@components/Button'

import useAlterarStatusOrdemServicoHook from './hooks/useAlterarStatusOrdemServico.hook'
import { i18n } from '@languages/index'

const AlterarStatusOrdemServicoPage: React.FC = () => {
	const { handles } = useAlterarStatusOrdemServicoHook()

	return (
		<AlterarStatusOrdemServicoPageContainer>
			<PageContainer>
				<Title color={colors.black}>
					{i18n.t('workOrderChangeStatus.changeWorkOrderStatus')}
				</Title>
				<MarginTop value={15} />
				<Button onPress={handles.onAprovarOrdemServico}>
					{i18n.t('workOrderChangeStatus.approve')}
				</Button>
				<MarginTop value={15} />
				<Button onPress={handles.onFinalizarOrdemServico}>
					{i18n.t('workOrderChangeStatus.finish')}
				</Button>
				<MarginTop value={15} />
				<Button onPress={handles.onReabrirOrdemServico}>
					{i18n.t('workOrderChangeStatus.reopen')}
				</Button>
				<MarginTop value={15} />
				<Button onPress={handles.onCancelarOrdemServico}>
					{i18n.t('common.cancel')}
				</Button>
				<MarginTop value={15} />
			</PageContainer>
		</AlterarStatusOrdemServicoPageContainer>
	)
}

export default AlterarStatusOrdemServicoPage
