import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { AdicionarOrdemServicosPageContainer } from './styles'
import colors from '@styles/colors.style'
import { KeyboardAvoidingView, MarginTop, Title } from '@styles/global.style'
import Select from '@components/Select'
import Button from '@components/Button'
import Input from '@components/Input'

import { i18n } from '@languages/index'
import useAdicionarOrdemServicosHook from './hooks/useAdicionarOrdemServico.hook'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

type AdicionarOrdemServicosPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'AdicionarOrdemServicoPage'
>

const AdicionarOrdemServicoPage: React.FC = () => {
	const { goBack } = useNavigation<AdicionarOrdemServicosPageProp>()

	const { loading, edicao, data, handles } = useAdicionarOrdemServicosHook()

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
						translucentBackground
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
						translucentBackground
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
						translucentBackground
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
						translucentBackground
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
						translucentBackground
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.peopleNumber')}
						value={data.valores.numeroPessoas}
						onChangeText={value => handles.setNumeroPessoas(value)}
						placeholder={i18n.t('addWorkOrder.informAPeopleNumber')}
						color={colors.black}
						keyboardType="numeric"
						translucentBackground
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
						translucentBackground
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addWorkOrder.manHour')}
						value={data.valores.homemHora}
						color={colors.black}
						keyboardType="numeric"
						translucentBackground
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
						translucentBackground
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
						translucentBackground
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
						translucentBackground
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
						translucentBackground
					/>
					<MarginTop value={15} />
					<Button
						onPress={handles.salvarOrdemServico}
						disabled={loading}
					>
						{edicao
							? i18n.t('addWorkOrder.edit')
							: i18n.t('addWorkOrder.add')}
					</Button>
					<MarginTop value={32} />
				</AdicionarOrdemServicosPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default AdicionarOrdemServicoPage
