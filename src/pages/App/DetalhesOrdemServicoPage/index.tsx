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

import { i18n, moment } from '@languages/index'
import colors from '@styles/colors.style'
import FAB from '@components/FAB'

const DetalhesOrdemServicoPage: React.FC = () => {
	const {
		data: { loading, ordemServico },
		handles,
	} = useDetalhesOrdemServicoHook()

	const statusOrdemServico = ordemServico?.status || 0

	const convertDate = (date: Date | undefined) => {
		if (!date) {
			return i18n.t('common.noData')
		}

		return moment(date).format('L')
	}

	const calcularHomemHora = () => {
		const homem = ordemServico?.homem || 0
		const hora = ordemServico?.hora || 0

		return homem * hora
	}

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
					<Title>#{ordemServico?.codOrdem}</Title>
					<MarginTop value={16} />
					<SubTitle>{ordemServico?.descricao}</SubTitle>
					<MarginTop value={16} />
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
					<Field
						label={i18n.t('workOrderDetails.openingDate')}
						value={convertDate(ordemServico?.dataAbertura)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.startExecutionDate')}
						value={convertDate(ordemServico?.dataExecucaoInicio)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.requestDate')}
						value={convertDate(ordemServico?.dataSolicitacao)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.startScheduleDate')}
						value={convertDate(ordemServico?.dataProgramacaoInicio)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.cancellationDate')}
						value={convertDate(ordemServico?.dataCancelada)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.closingDate')}
						value={convertDate(ordemServico?.dataEncerramento)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.endExecutionDate')}
						value={convertDate(ordemServico?.dataExecucaoFim)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.issueDate')}
						value={convertDate(ordemServico?.dataEmissao)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.endScheduleDate')}
						value={convertDate(ordemServico?.dataProgramacaoFim)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('workOrderDetails.approvalDate')}
						value={convertDate(ordemServico?.dataAprovacao)}
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
							ordemServico?.condicao == 1
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
							calcularHomemHora().toFixed(2) ||
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
					onPress={() => console.log('Editar OS')}
				/>
			</PageContainer>
		</DetalhesOrdemServicoPageContainer>
	)
}

export default DetalhesOrdemServicoPage
