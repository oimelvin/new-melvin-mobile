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
				<Button
					label={i18n.t('workOrderChangeStatus.approve')}
					onPress={handles.onAprovarOrdemServico}
				/>
				<MarginTop value={15} />
				<Button
					label={i18n.t('workOrderChangeStatus.finish')}
					onPress={handles.onFinalizarOrdemServico}
				/>
				<MarginTop value={15} />
				<Button
					label={i18n.t('workOrderChangeStatus.reopen')}
					onPress={handles.onReabrirOrdemServico}
				/>
				<MarginTop value={15} />
				<Button
					label={i18n.t('common.cancel')}
					onPress={handles.onCancelarOrdemServico}
				/>
				<MarginTop value={15} />
			</PageContainer>
		</AlterarStatusOrdemServicoPageContainer>
	)
}

export default AlterarStatusOrdemServicoPage
