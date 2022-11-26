import { useEffect, useState } from 'react'

import { SelectItemProps } from '@components/Select'

import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Ativo } from '@models/Ativo'
import { Familia } from '@models/Familia'
import { Status } from '@models/Status'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useAtivoService from '@services/useAtivoService.hook'
import useFamiliaService from '@services/useFamiliaService.hook'

interface SearchEquipmentHookDataProps {
	filiais: Filial[]
	setores: Setor[]
	ativos: Ativo[]
	familias: Familia[]
	status: Status[]
	selectedFilial: SelectItemProps | null
	selectedSetor: SelectItemProps | null
	selectedAtivo: SelectItemProps | null
	selectedFamilia: SelectItemProps | null
	selectedStatus: SelectItemProps | null
	pesquisa: string
	dirtyAtivo: boolean
}

interface SearchEquipmentHookHandlesProps {
	setSelectedFilial(value: string): void
	setSelectedSetor(value: string): void
	setSelectedAtivo(value: string): void
	setSelectedFamilia(value: string): void
	setSelectedStatus(value: string): void
	setPesquisa(value: string): void
}

export interface SearchEquipmentHookProps {
	data: SearchEquipmentHookDataProps
	handles: SearchEquipmentHookHandlesProps
}

const useSearchEquipmentManuallyHook = () => {
	const [filiais, setFiliais] = useState<Filial[]>([])
	const [setores, setSetores] = useState<Setor[]>([])
	const [ativos, setAtivos] = useState<Ativo[]>([])
	const [familias, setFamilias] = useState<Familia[]>([])
	const [status] = useState<Status[]>([
		{
			id: 'P',
			descricao: 'Parado',
		},
		{
			id: 'F',
			descricao: 'Funcionando',
		},
	])
	const [pesquisa, setPesquisa] = useState<string>()

	const [selectedFilial, setSelectedFilial] =
		useState<SelectItemProps | null>(null)
	const [selectedSetor, setSelectedSetor] = useState<SelectItemProps | null>(
		null
	)
	const [selectedAtivo, setSelectedAtivo] = useState<SelectItemProps | null>(
		null
	)
	const [selectedFamilia, setSelectedFamilia] =
		useState<SelectItemProps | null>(null)
	const [selectedStatus, setSelectedStatus] =
		useState<SelectItemProps | null>(null)

	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getAtivos } = useAtivoService()
	const { getFamilias } = useFamiliaService()

	useEffect(() => {
		const loadSelectFilial = async () => {
			setSelectedFilial(null)

			setFiliais(await getFiliais())
		}

		loadSelectFilial()
	}, [])

	useEffect(() => {
		const loadSelectFamilia = async () => {
			setSelectedFamilia(null)

			setFamilias(await getFamilias())
		}

		loadSelectFamilia()
	}, [])

	useEffect(() => {
		const loadSelectSetor = async () => {
			setSelectedSetor(null)

			if (selectedFilial) {
				setSetores(await getSetores(selectedFilial.value))
			}
		}

		loadSelectSetor()
	}, [selectedFilial])

	useEffect(() => {
		const loadSelectAtivo = async () => {
			setSelectedAtivo(null)

			setAtivos(
				await getAtivos(
					selectedFilial?.value,
					selectedSetor?.value,
					selectedFamilia?.value,
					selectedStatus?.value,
					pesquisa
				)
			)
		}

		loadSelectAtivo()
	}, [
		selectedFilial,
		selectedSetor,
		selectedFamilia,
		selectedStatus,
		pesquisa,
	])

	return {
		data: {
			filiais,
			setores,
			ativos,
			familias,
			status,
			selectedFilial,
			selectedSetor,
			selectedAtivo,
			selectedFamilia,
			selectedStatus,
			pesquisa,
		},
		handles: {
			setSelectedFilial,
			setSelectedSetor,
			setSelectedAtivo,
			setSelectedFamilia,
			setSelectedStatus,
			setPesquisa,
		},
	}
}

export default useSearchEquipmentManuallyHook
