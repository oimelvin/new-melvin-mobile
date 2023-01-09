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
				<Button disabled={saving}>
					{i18n.t(
						'workOrderActions.checklist.selectDefaultChecklist'
					)}
				</Button>
				<MarginTop value={16} />
				<Button
					variant="outline"
					color={colors.red}
					textColor={colors.red}
					onPress={handles.onRemoverChecklistPadrao}
					disabled={true || saving}
				>
					{i18n.t(
						'workOrderActions.checklist.removeDefaultChecklist'
					)}
				</Button>
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
					translucentBackground
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
					translucentBackground
				/>
				<MarginTop value={15} />
				<Button
					onPress={handles.onSalvarAcoes}
					disabled={saving || loading}
				>
					{i18n.t('workOrderActions.actions.save')}
				</Button>
				<MarginTop value={15} />
			</PageContainer>
		</AcoesOrdemServicoPageContainer>
	)
}

export default AcoesOrdemServicoPage
