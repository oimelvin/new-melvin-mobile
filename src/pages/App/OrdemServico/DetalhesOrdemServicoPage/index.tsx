import React from 'react'
import { View } from 'react-native'
import { ProgressBar } from 'react-native-paper'

import { DetalhesOrdemServicoPageContainer } from './styles'
import useDetalhesOrdemServicoHook from './hooks/useDetalhesOrdemServico.hook'
import {
	PageContainer,
	Divider,
	MarginTop,
	SubTitle,
	Title,
	ScrollView,
} from '@styles/global.style'
import Loading from '@components/Loading'
import Field from '@components/Field'
import FAB from '@components/FAB'
import AcoesOrdemServico from './components/AcoesOrdemServico'

import { i18n } from '@languages/index'
import colors from '@styles/colors.style'

const DetalhesOrdemServicoPage: React.FC = () => {
	const {
		data: { loading, ordemServico, statusOrdemServico },
		handles,
	} = useDetalhesOrdemServicoHook()

	if (loading) {
		return (
			<DetalhesOrdemServicoPageContainer>
				<Loading />
			</DetalhesOrdemServicoPageContainer>
		)
	}

	return (
		<DetalhesOrdemServicoPageContainer>
			<PageContainer>
				<ScrollView>
					<AcoesOrdemServico
						onPressAcoes={handles.onPressAcoes}
						onPressPlanejamento={handles.onPressPlanejamento}
						onPressControle={handles.onPressControle}
						onPressAnexos={handles.onPressAnexos}
						onPressRastreabilidade={handles.onPressRastreabilidade}
					/>
					<View>
						<ProgressBar
							progress={statusOrdemServico / 7}
							color={colors.green}
							style={{
								backgroundColor: colors.gray100,
								borderRadius: 16,
							}}
						/>
					</View>
					<MarginTop value={16} />
					<Title>#{ordemServico?.codOrdem}</Title>
					<MarginTop value={5} />
					<SubTitle>{ordemServico?.descricao}</SubTitle>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.openingDate')}
						value={handles.convertDate(ordemServico?.dataAbertura)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.startExecutionDate')}
						value={handles.convertDate(
							ordemServico?.dataExecucaoInicio
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.requestDate')}
						value={handles.convertDate(
							ordemServico?.dataSolicitacao
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.startScheduleDate')}
						value={handles.convertDate(
							ordemServico?.dataProgramacaoInicio
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.cancellationDate')}
						value={handles.convertDate(ordemServico?.dataCancelada)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.closingDate')}
						value={handles.convertDate(
							ordemServico?.dataEncerramento
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.endExecutionDate')}
						value={handles.convertDate(
							ordemServico?.dataExecucaoFim
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.issueDate')}
						value={handles.convertDate(ordemServico?.dataEmissao)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.endScheduleDate')}
						value={handles.convertDate(
							ordemServico?.dataProgramacaoFim
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.approvalDate')}
						value={handles.convertDate(ordemServico?.dataAprovacao)}
					/>
					<Divider style={{ width: '100%' }} color={colors.gray100} />
					<Field
						label={i18n.t('workOrderDetails.approver')}
						value={
							ordemServico?.aprovador?.name ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.maintenanceType')}
						value={
							ordemServico?.tipoManutencao?.descricao ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.workshop')}
						value={
							ordemServico?.oficina?.descricao ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.status')}
						value={
							ordemServico?.statusTexto || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.situation')}
						value={
							ordemServico?.situacao || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.priority')}
						value={
							ordemServico?.prioridade?.descricao ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.condition')}
						value={
							ordemServico?.condicao == '1'
								? 'Parado'
								: 'Funcionando' || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.statusTime')}
						value={
							ordemServico?.statusTempo || i18n.t('common.noData')
						}
					/>
					<Divider style={{ width: '100%' }} color={colors.gray100} />
					<Field
						label={i18n.t('workOrderDetails.man')}
						value={
							ordemServico?.homem.toFixed(2) ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.manHour')}
						value={
							handles.calcularHomemHora().toFixed(2) ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.hour')}
						value={
							ordemServico?.hora.toFixed(2) ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.cost')}
						value={
							ordemServico?.custo.toFixed(2) ||
							i18n.t('common.noData')
						}
					/>
					<Divider style={{ width: '100%' }} color={colors.gray100} />
					<Field
						label={i18n.t('workOrderDetails.guidance')}
						value={
							ordemServico?.orientacao || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.explanation')}
						value={
							ordemServico?.justificativa ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.notes')}
						value={
							ordemServico?.observacao || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.history')}
						value={
							ordemServico?.historico || i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
				</ScrollView>
				<FAB
					provider="materialIcons"
					iconName="edit"
					onPress={handles.onEditOrdemServico}
				/>
			</PageContainer>
		</DetalhesOrdemServicoPageContainer>
	)
}

export default DetalhesOrdemServicoPage
