import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { FiltroCarteiraServicosPageContainer } from './styles'
import colors from '@styles/colors.style'
import { KeyboardAvoidingView, MarginTop, Title } from '@styles/global.style'
import Select from '@components/Select'
import Button from '@components/Button'
import Input from '@components/Input'
import DatePicker from '@components/DatePicker'

import { i18n } from '@languages/index'
import useFiltroCarteiraServicosHook from './hooks/useFiltroCarteiraServicos.hook'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

type FiltroCarteiraServicosPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'FiltroCarteiraServicosPage'
>

const FiltroCarteiraServicosPage: React.FC = () => {
	const { goBack } = useNavigation<FiltroCarteiraServicosPageProp>()

	const { data, handles } = useFiltroCarteiraServicosHook()

	const handleFiltrarCarteiraServicos = () => {
		// set filtros no redux
		goBack()
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FiltroCarteiraServicosPageContainer>
					<MarginTop value={15} />
					<Title color={colors.black}>
						{i18n.t(
							'filterServicePortfolio.filterServicePortfolio'
						)}
					</Title>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.branch')}
						items={data.filiais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedFilial}
						onSelect={item => handles.setSelectedFilial(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectABranch'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noBranchesFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.sector')}
						items={data.setores.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedSetor}
						onSelect={item => handles.setSelectedSetor(item)}
						disabled={!data.filtros.selectedFilial}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectASector'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noSectorsFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.equipment')}
						items={data.equipamentos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedEquipamento}
						onSelect={item => handles.setSelectedEquipamento(item)}
						disabled={!data.filtros.selectedSetor}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAnEquipment'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noEquipmentsFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.set')}
						items={data.conjuntos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedConjunto}
						onSelect={item => handles.setSelectedConjunto(item)}
						disabled={!data.filtros.selectedEquipamento}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectASet'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noSetsFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.status')}
						items={data.status.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedStatus}
						onSelect={item => handles.setSelectedStatus(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAStatus'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noStatusFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.workshop')}
						items={data.oficinas.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedOficina}
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
						label={i18n.t('filterServicePortfolio.maintenanceType')}
						items={data.tiposManutencao.map(
							({ id, descricao }) => ({
								value: id,
								label: descricao,
							})
						)}
						selectedValue={data.filtros.selectedTipoManutencao}
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
						label={i18n.t('filterServicePortfolio.condition')}
						items={data.condicoes.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedCondicao}
						onSelect={item => handles.setSelectedCondicao(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectACondition'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('filterServicePortfolio.priority')}
						items={data.prioridades.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.filtros.selectedPrioridade}
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
						label={i18n.t('filterServicePortfolio.executor')}
						items={data.executantes.map(({ id, nome }) => ({
							value: id,
							label: nome,
						}))}
						selectedValue={data.filtros.selectedExecutante}
						onSelect={item => handles.setSelectedExecutante(item)}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAnExecutor'
						)}
						emptyListText={i18n.t(
							'filterServicePortfolio.noExecutorsFound'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<DatePicker
						label={i18n.t('filterServicePortfolio.openingDate')}
						value={data.filtros.selectedDataAbertura}
						onDateChange={date =>
							handles.setSelectedDataAbertura(date)
						}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAnOpeningDate'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<DatePicker
						label={i18n.t('filterServicePortfolio.closingDate')}
						value={data.filtros.selectedDataEncerramento}
						onDateChange={date =>
							handles.setSelectedDataEncerramento(date)
						}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAClosingDate'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<DatePicker
						label={i18n.t('filterServicePortfolio.scheduleDate')}
						value={data.filtros.selectedDataProgramada}
						onDateChange={date =>
							handles.setSelectedDataProgramada(date)
						}
						color={colors.black}
						placeholder={i18n.t(
							'filterServicePortfolio.selectAScheduleDate'
						)}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('filterServicePortfolio.search')}
						value={data.filtros.pesquisa}
						onChangeText={value => handles.setPesquisa(value)}
						placeholder={i18n.t(
							'filterServicePortfolio.searchWorkOrders'
						)}
						color={colors.black}
						translucentBackground
					/>
					<MarginTop value={15} />
					<Button onPress={() => handleFiltrarCarteiraServicos()}>
						{i18n.t('filterServicePortfolio.filterWorkOrders')}
					</Button>
					<MarginTop value={32} />
				</FiltroCarteiraServicosPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroCarteiraServicosPage
