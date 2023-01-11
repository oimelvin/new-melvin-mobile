import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import { AdicionarOrdemServicosPageContainer } from './styles'
import colors from '@styles/colors.style'
import { KeyboardAvoidingView, MarginTop, Title } from '@styles/global.style'
import Select from '@components/Select'
import Button from '@components/Button'
import Input from '@components/Input'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'
import useAdicionarOrdemServicosHook from './hooks/useAdicionarOrdemServico.hook'

const AdicionarOrdemServicoPage: React.FC = () => {
	const { loading, saving, edicao, data, handles } =
		useAdicionarOrdemServicosHook()

	if (loading) {
		return (
			<AdicionarOrdemServicosPageContainer>
				<Loading />
			</AdicionarOrdemServicosPageContainer>
		)
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<AdicionarOrdemServicosPageContainer>
					<MarginTop value={15} />
					<Title color={colors.black}>
						{edicao
							? i18n.t('addWorkOrder.editWorkOrder')
							: i18n.t('addWorkOrder.addWorkOrder')}
					</Title>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.description')}
						value={data.valores.descricao}
						onChangeText={value => handles.setDescricao(value)}
						placeholder={i18n.t('addWorkOrder.informADescription')}
						color={colors.black}
						numberOfLines={2}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.maintenanceType')}
						items={data.tiposManutencao.map(
							({ id, descricao }) => ({
								value: id,
								label: descricao,
							})
						)}
						selectedValue={data.valores.selectedTipoManutencao}
						onSelect={item =>
							handles.setSelectedTipoManutencao(item)
						}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAMaintenanceType'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noMaintenanceTypesFound'
						)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.priority')}
						items={data.prioridades.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedPrioridade}
						onSelect={item => handles.setSelectedPrioridade(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAPriority'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noPrioritiesFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.workshop')}
						items={data.oficinas.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedOficina}
						onSelect={item => handles.setSelectedOficina(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAWorkshop'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noWorkshopsFound'
						)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.condition')}
						items={data.condicoes.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedCondicao}
						onSelect={item => handles.setSelectedCondicao(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectACondition'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noConditionsFound'
						)}
						required
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.peopleNumber')}
						value={data.valores.numeroPessoas}
						onChangeText={value => handles.setNumeroPessoas(value)}
						placeholder={i18n.t('addWorkOrder.informAPeopleNumber')}
						color={colors.black}
						keyboardType="numeric"
						required
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.executionTime')}
						value={data.valores.tempoExecucao}
						onChangeText={value => handles.setTempoExecucao(value)}
						placeholder={i18n.t(
							'addWorkOrder.informAnExecutionTime'
						)}
						color={colors.black}
						keyboardType="numeric"
						required
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.manHour')}
						value={data.valores.homemHora}
						color={colors.black}
						keyboardType="numeric"
						disabled
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.branch')}
						items={data.filiais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedFilial}
						onSelect={item => handles.setSelectedFilial(item)}
						color={colors.black}
						placeholder={i18n.t('addWorkOrder.selectABranch')}
						emptyListText={i18n.t('addWorkOrder.noBranchesFound')}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.sector')}
						items={data.setores.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedSetor}
						onSelect={item => handles.setSelectedSetor(item)}
						disabled={!data.valores.selectedFilial}
						color={colors.black}
						placeholder={i18n.t('addWorkOrder.selectASector')}
						emptyListText={i18n.t('addWorkOrder.noSectorsFound')}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.equipment')}
						items={data.equipamentos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedEquipamento}
						onSelect={item => handles.setSelectedEquipamento(item)}
						disabled={!data.valores.selectedSetor}
						color={colors.black}
						placeholder={i18n.t('addWorkOrder.selectAnEquipment')}
						emptyListText={i18n.t('addWorkOrder.noEquipmentsFound')}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addWorkOrder.set')}
						items={data.conjuntos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedConjunto}
						onSelect={item => handles.setSelectedConjunto(item)}
						disabled={!data.valores.selectedEquipamento}
						color={colors.black}
						placeholder={i18n.t('addWorkOrder.selectASet')}
						emptyListText={i18n.t('addWorkOrder.noSetsFound')}
					/>
					<MarginTop value={15} />
					<Button
						label={i18n.t('common.save')}
						onPress={handles.salvarOrdemServico}
						disabled={saving || loading}
					/>
					<MarginTop value={32} />
				</AdicionarOrdemServicosPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default AdicionarOrdemServicoPage
