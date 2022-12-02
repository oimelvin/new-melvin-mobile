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
		if (data.selectedEquipamento?.value) {
			navigate('EquipamentoPage', {
				id: data.selectedEquipamento.value,
			})
		}
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FiltroEquipamentoPageContainer>
					<Title color={colors.white}>
						{i18n.t('searchEquipmentManually.searchEquipment')}
					</Title>
					<MarginTop value={15} />
					<Select
						items={data.filiais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedFilial}
						onSelect={item => handles.setSelectedFilial(item)}
						color={colors.white}
						placeholder={i18n.t(
							'searchEquipmentManually.selectABranch'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noBranchesFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						items={data.setores.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedSetor}
						onSelect={item => handles.setSelectedSetor(item)}
						disabled={!data.selectedFilial}
						color={colors.white}
						placeholder={i18n.t(
							'searchEquipmentManually.selectASector'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noSectorsFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						items={data.familias.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedFamilia}
						onSelect={item => handles.setSelectedFamilia(item)}
						color={colors.white}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAFamily'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noFamiliesFound'
						)}
					/>
					<MarginTop value={15} />
					<Select
						items={data.status.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedStatus}
						onSelect={item => handles.setSelectedStatus(item)}
						color={colors.white}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAStatus'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noStatusFound'
						)}
					/>
					<MarginTop value={15} />
					<Input
						value={data.pesquisa}
						onChangeText={value => handles.setPesquisa(value)}
						placeholderTextColor={colors.gray100}
						placeholder={i18n.t(
							'searchEquipmentManually.searchEquipment'
						)}
						selectionColor={colors.gray500}
						color={colors.white}
					/>
					<Divider color={colors.gray900} />
					<MarginTop value={15} />
					<Select
						items={data.equipamentos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedEquipamento}
						onSelect={item => handles.setSelectedEquipamento(item)}
						color={colors.white}
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
					/>
					<MarginTop value={15} />
					<Button
						onPress={() => handleVisualizarEquipamento()}
						disabled={!data.selectedEquipamento}
					>
						{i18n.t('searchEquipmentManually.seeEquipment')}
					</Button>
					<MarginTop value={32} />
				</FiltroEquipamentoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroEquipamentoPage
