import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import useFiltroEquipamentoPageHook from './hooks'
import { BottomTabNavigatorParamList } from '@routes/BottomTabNavigator'

import { FiltroEquipamentoPageContainer } from './styles'
import colors from '@styles/colors.style'
import Select from '@components/Select'
import {
	Divider,
	KeyboardAvoidingView,
	MarginTop,
	Title,
} from '@styles/global.style'
import Input from '@components/Input'
import Button from '@components/Button'
import { i18n } from '@languages/index'

type FiltroEquipamentoPageProp = BottomTabNavigationProp<
	BottomTabNavigatorParamList,
	'EquipamentoPage'
>

const FiltroEquipamentoPage: React.FC = () => {
	const { navigate } = useNavigation<FiltroEquipamentoPageProp>()

	const { data, handles } = useFiltroEquipamentoPageHook()

	const [dirtyEquipamento, setDirtyEquipamento] = useState(false)

	const errorEquipamento =
		dirtyEquipamento && !data.selectedEquipamento
			? i18n.t('searchEquipmentManually.equipmentRequired')
			: undefined

	const handleVisualizarEquipamento = () => {
		if (data.selectedEquipamento) {
			navigate('EquipamentoPage', {
				id: data.selectedEquipamento,
			})
		}
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FiltroEquipamentoPageContainer>
					<Title>
						{i18n.t('searchEquipmentManually.searchEquipment')}
					</Title>
					<MarginTop value={15} />
					<Select
						label={i18n.t('searchEquipmentManually.branch')}
						items={data.filiais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedFilial}
						onSelect={item => handles.setSelectedFilial(item)}
						placeholder={i18n.t(
							'searchEquipmentManually.selectABranch'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noBranchesFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('searchEquipmentManually.sector')}
						items={data.setores.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedSetor}
						onSelect={item => handles.setSelectedSetor(item)}
						disabled={!data.selectedFilial}
						placeholder={i18n.t(
							'searchEquipmentManually.selectASector'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noSectorsFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('searchEquipmentManually.family')}
						items={data.familias.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedFamilia}
						onSelect={item => handles.setSelectedFamilia(item)}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAFamily'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noFamiliesFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('searchEquipmentManually.status')}
						items={data.status.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedStatus}
						onSelect={item => handles.setSelectedStatus(item)}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAStatus'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noStatusFound'
						)}
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('common.search')}
						value={data.pesquisa}
						onChangeText={value => handles.setPesquisa(value)}
						placeholderTextColor={colors.gray300}
						placeholder={i18n.t(
							'searchEquipmentManually.searchEquipment'
						)}
						selectionColor={colors.gray500}
					/>
					<Divider color={colors.gray900} />
					<MarginTop value={15} />
					<Select
						label={i18n.t('searchEquipmentManually.equipment')}
						items={data.equipamentos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedEquipamento}
						onSelect={item => handles.setSelectedEquipamento(item)}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAnEquipment'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noEquipmentFound'
						)}
						onCloseSelect={() =>
							!data.selectedEquipamento &&
							setDirtyEquipamento(true)
						}
						errorText={errorEquipamento}
						required
					/>
					<MarginTop value={15} />
					<Button
						label={i18n.t('searchEquipmentManually.seeEquipment')}
						onPress={() => handleVisualizarEquipamento()}
						disabled={!data.selectedEquipamento}
					/>
					<MarginTop value={32} />
				</FiltroEquipamentoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroEquipamentoPage
