import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { FiltroSolicitacaoPageContainer } from './styles'
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

import useFiltroSolicitacaoHook from './hooks'
import { i18n } from '@languages/index'
import { BottomTabNavigatorParamList } from '@routes/BottomTabNavigator'

type FiltroSolicitacaoPageProp = BottomTabNavigationProp<
	BottomTabNavigatorParamList,
	'SchedulePage'
>

const FiltroSolicitacaoPage: React.FC = () => {
	const { navigate } = useNavigation<FiltroSolicitacaoPageProp>()

	const { data, handles } = useFiltroSolicitacaoHook()

	const [dirtyAtivo, setDirtyAtivo] = useState(false)

	const errorAtivo =
		dirtyAtivo && !data.selectedAtivo
			? i18n.t('searchEquipmentManually.equipmentRequired')
			: undefined

	const handleVisualizarAtivo = () => {
		if (data.selectedAtivo?.value) {
			navigate('EquipmentPage', {
				id: data.selectedAtivo.value,
			})
		}
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FiltroSolicitacaoPageContainer>
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
						items={data.ativos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.selectedAtivo}
						onSelect={item => handles.setSelectedAtivo(item)}
						color={colors.white}
						placeholder={i18n.t(
							'searchEquipmentManually.selectAnEquipment'
						)}
						emptyListText={i18n.t(
							'searchEquipmentManually.noEquipmentFound'
						)}
						onCloseSelect={() =>
							!data.selectedAtivo && setDirtyAtivo(true)
						}
						errorText={errorAtivo}
					/>
					<MarginTop value={15} />
					<Button
						onPress={() => handleVisualizarAtivo()}
						disabled={!data.selectedAtivo}
					>
						{i18n.t('searchEquipmentManually.seeEquipment')}
					</Button>
					<MarginTop value={32} />
				</FiltroSolicitacaoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroSolicitacaoPage
