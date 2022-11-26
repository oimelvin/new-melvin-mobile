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
	'EquipmentPage'
>

const FiltroEquipamentoPage: React.FC = () => {
	const { navigate } = useNavigation<FiltroEquipamentoPageProp>()

	const { data, handles } = useFiltroEquipamentoPageHook()

	const [dirtyAtivo, setDirtyAtivo] = useState(false)

	const errorAtivo =
		dirtyAtivo && !data.selectedAtivo
			? i18n.t('FiltroEquipamentoPage.equipmentRequired')
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
				<FiltroEquipamentoPageContainer>
					<Title color={colors.white}>
						{i18n.t('FiltroEquipamentoPage.searchEquipment')}
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
							'FiltroEquipamentoPage.selectABranch'
						)}
						emptyListText={i18n.t(
							'FiltroEquipamentoPage.noBranchesFound'
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
							'FiltroEquipamentoPage.selectASector'
						)}
						emptyListText={i18n.t(
							'FiltroEquipamentoPage.noSectorsFound'
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
							'FiltroEquipamentoPage.selectAFamily'
						)}
						emptyListText={i18n.t(
							'FiltroEquipamentoPage.noFamiliesFound'
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
							'FiltroEquipamentoPage.selectAStatus'
						)}
						emptyListText={i18n.t(
							'FiltroEquipamentoPage.noStatusFound'
						)}
					/>
					<MarginTop value={15} />
					<Input
						value={data.pesquisa}
						onChangeText={value => handles.setPesquisa(value)}
						placeholderTextColor={colors.gray100}
						placeholder={i18n.t(
							'FiltroEquipamentoPage.searchEquipment'
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
							'FiltroEquipamentoPage.selectAnEquipment'
						)}
						emptyListText={i18n.t(
							'FiltroEquipamentoPage.noEquipmentFound'
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
						{i18n.t('FiltroEquipamentoPage.seeEquipment')}
					</Button>
					<MarginTop value={32} />
				</FiltroEquipamentoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroEquipamentoPage
