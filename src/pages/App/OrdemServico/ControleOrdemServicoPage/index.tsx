import React from 'react'

import { ControleOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer } from '@styles/global.style'

import useControleOrdemServicoHook from './hooks/useControleOrdemServico.hook'
import { i18n } from '@languages/index'
import Button from './components/Button'

const ControleOrdemServicoPage: React.FC = () => {
	const { handles } = useControleOrdemServicoHook()

	return (
		<ControleOrdemServicoPageContainer>
			<PageContainer>
				<Button
					label={i18n.t('workOrderControl.entries')}
					onPress={handles.onPressApontamento}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t('workOrderControl.unavailability')}
					onPress={handles.onPressIndisponibilidade}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t('workOrderControl.signatures')}
					onPress={handles.onPressAssinaturas}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t('workOrderControl.history')}
					onPress={handles.onPressHistorico}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t('workOrderControl.changeWorkOrderStatus')}
					onPress={handles.onPressAlterarStatusOrdemServico}
				/>
			</PageContainer>
		</ControleOrdemServicoPageContainer>
	)
}

export default ControleOrdemServicoPage
