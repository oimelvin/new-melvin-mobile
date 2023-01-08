import React from 'react'

import {
	AcoesOrdemServicoContainer,
	AcoesOrdemServicoIconButton,
} from './styles'

import { i18n } from '@languages/index'

interface AcoesOrdemServicoProps {
	onPressAcoes: () => void
	onPressPlanejamento: () => void
	onPressControle: () => void
	onPressAnexos: () => void
	onPressRastreabilidade: () => void
}

const AcoesOrdemServico: React.FC<AcoesOrdemServicoProps> = ({
	onPressAcoes,
	onPressPlanejamento,
	onPressControle,
	onPressAnexos,
	onPressRastreabilidade,
}) => {
	return (
		<AcoesOrdemServicoContainer>
			<AcoesOrdemServicoIconButton
				provider="materialCommunityIcons"
				iconName="clipboard-list-outline"
				label={i18n.t('workOrderDetails.actions')}
				onPress={onPressAcoes}
			/>
			<AcoesOrdemServicoIconButton
				provider="materialCommunityIcons"
				iconName="calendar-clock"
				label={i18n.t('workOrderDetails.planning')}
				onPress={onPressPlanejamento}
			/>
			<AcoesOrdemServicoIconButton
				provider="materialCommunityIcons"
				iconName="tools"
				label={i18n.t('workOrderDetails.control')}
				onPress={onPressControle}
			/>
			<AcoesOrdemServicoIconButton
				provider="materialCommunityIcons"
				iconName="attachment"
				label={i18n.t('workOrderDetails.attachments')}
				onPress={onPressAnexos}
			/>
			<AcoesOrdemServicoIconButton
				provider="materialCommunityIcons"
				iconName="barcode-scan"
				label={i18n.t('workOrderDetails.traceability')}
				onPress={onPressRastreabilidade}
			/>
		</AcoesOrdemServicoContainer>
	)
}

export default AcoesOrdemServico
