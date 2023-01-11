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
					/>
					<MarginTop value={15} />
					<Button
						label={i18n.t(
							'filterServicePortfolio.filterWorkOrders'
						)}
						onPress={() => handleFiltrarCarteiraServicos()}
					/>
					<MarginTop value={32} />
				</FiltroCarteiraServicosPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroCarteiraServicosPage
