import React from 'react'

import { AcoesOrdemServicoPageContainer } from './styles'
import useAcoesOrdemServicoHook from './hooks/useAcoesOrdemServico.hook'
import { MarginTop, PageContainer } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import Button from '@components/Button'
import Input from '@components/Input'

import { i18n } from '@languages/index'

const AcoesOrdemServicoPage: React.FC = () => {
	const { loading, saving, data, handles } = useAcoesOrdemServicoHook()

	if (loading) {
		return (
			<AcoesOrdemServicoPageContainer>
				<Loading />
			</AcoesOrdemServicoPageContainer>
		)
	}

	return (
		<AcoesOrdemServicoPageContainer>
			<PageContainer>
				<Button
					label={i18n.t(
						'workOrderActions.checklist.selectDefaultChecklist'
					)}
					disabled={saving}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t(
						'workOrderActions.checklist.removeDefaultChecklist'
					)}
					color={colors.red}
					onPress={handles.onRemoverChecklistPadrao}
					disabled={true || saving}
				/>
				<MarginTop value={16} />
				<Input
					label={i18n.t('workOrderActions.actions.guidance')}
					value={data.orientacao}
					onChangeText={value => handles.setOrientacao(value)}
					placeholder={i18n.t(
						'workOrderActions.actions.informAGuidance'
					)}
					color={colors.black}
					numberOfLines={4}
					multiline
				/>
				<MarginTop value={15} />
				<Input
					label={i18n.t('workOrderActions.actions.notes')}
					value={data.observacoes}
					onChangeText={value => handles.setObservacoes(value)}
					placeholder={i18n.t(
						'workOrderActions.actions.informANotes'
					)}
					color={colors.black}
					numberOfLines={4}
					multiline
				/>
				<MarginTop value={15} />
				<Button
					label={i18n.t('workOrderActions.actions.save')}
					onPress={handles.onSalvarAcoes}
					disabled={saving || loading}
				/>
				<MarginTop value={15} />
			</PageContainer>
		</AcoesOrdemServicoPageContainer>
	)
}

export default AcoesOrdemServicoPage
