import React from 'react'

import useSearchEquipmentManuallyHook from './hooks'
import { SearchEquipmentManuallyPageContainer } from './styles'
import colors from '@styles/colors.style'
import Select from '@components/Select'
import { MarginTop } from '@styles/global.style'
import Input from '@components/Input'
import Button from '@components/Button'

const SearchEquipmentManuallyPage: React.FC = () => {
	const { data, handles } = useSearchEquipmentManuallyHook()

	return (
		<SearchEquipmentManuallyPageContainer>
			<Select
				items={data.filiais.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.selectedFilial}
				onSelect={item => handles.setSelectedFilial(item)}
				color={colors.white}
				placeholder="Selecione uma filial:"
				emptyListText="Nenhuma filial encontrada."
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
				placeholder="Selecione um setor:"
				emptyListText="Nenhum setor encontrado."
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
				placeholder="Selecione uma família:"
				emptyListText="Nenhuma família encontrada."
			/>
			<MarginTop value={15} />
			<Select
				items={data.ativos.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.selectedAtivo}
				onSelect={item => handles.setSelectedAtivo(item)}
				disabled={!data.selectedSetor && !data.selectedFamilia}
				color={colors.white}
				placeholder="Selecione um ativo:"
				emptyListText="Nenhum ativo encontrado."
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
				placeholder="Selecione um status:"
				emptyListText="Nenhum status encontrado."
			/>
			<MarginTop value={15} />
			<Select
				items={data.oficinas.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.selectedOficina}
				onSelect={item => handles.setSelectedOficina(item)}
				color={colors.white}
				placeholder="Selecione uma oficina:"
				emptyListText="Nenhuma oficina encontrada."
			/>
			<MarginTop value={15} />
			<Input
				value={data.pesquisa}
				onChangeText={value => handles.setPesquisa(value)}
				placeholderTextColor={colors.gray100}
				placeholder="Pesquisar"
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<MarginTop value={15} />
			<Button onPress={handles.submitSearch}>Filtrar</Button>
			<MarginTop value={15} />
		</SearchEquipmentManuallyPageContainer>
	)
}

export default SearchEquipmentManuallyPage
