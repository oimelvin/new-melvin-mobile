import { useEffect, useState } from 'react'

import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Equipamento } from '@models/Equipamento'
import { Familia } from '@models/Familia'
import { Status } from '@models/Status'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useEquipamentoService from '@services/useEquipamentoService.hook'
import useFamiliaService from '@services/useFamiliaService.hook'

interface SearchEquipmentHookDataProps {
	filiais: Filial[]
	setores: Setor[]
	equipamentos: Equipamento[]
	familias: Familia[]
	status: Status[]
	selectedFilial?: string
	selectedSetor?: string
	selectedEquipamento?: string
	selectedFamilia?: string
	selectedStatus?: string
	pesquisa: string
	dirtyEquipamento: boolean
}

interface SearchEquipmentHookHandlesProps {
	setSelectedFilial(value: string): void
	setSelectedSetor(value: string): void
	setSelectedEquipamento(value: string): void
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
	const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
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

	const [selectedFilial, setSelectedFilial] = useState<string | undefined>(
		undefined
	)
	const [selectedSetor, setSelectedSetor] = useState<string | undefined>(
		undefined
	)
	const [selectedEquipamento, setSelectedEquipamento] = useState<
		string | undefined
	>(undefined)
	const [selectedFamilia, setSelectedFamilia] = useState<string | undefined>(
		undefined
	)
	const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
		undefined
	)

	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getEquipamentos } = useEquipamentoService()
	const { getFamilias } = useFamiliaService()

	useEffect(() => {
		const loadSelectFilial = async () => {
			setSelectedFilial(undefined)

			setFiliais(await getFiliais())
		}

		loadSelectFilial()
	}, [])

	useEffect(() => {
		const loadSelectFamilia = async () => {
			setSelectedFamilia(undefined)

			setFamilias(await getFamilias())
		}

		loadSelectFamilia()
	}, [])

	useEffect(() => {
		const loadSelectSetor = async () => {
			setSelectedSetor(undefined)

			if (selectedFilial) {
				setSetores(await getSetores(selectedFilial))
			}
		}

		loadSelectSetor()
	}, [selectedFilial])

	useEffect(() => {
		const loadSelectEquipamento = async () => {
			setSelectedEquipamento(undefined)

			setEquipamentos(
				await getEquipamentos(
					selectedFilial,
					selectedSetor,
					selectedFamilia,
					selectedStatus,
					pesquisa
				)
			)
		}

		loadSelectEquipamento()
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
			equipamentos,
			familias,
			status,
			selectedFilial,
			selectedSetor,
			selectedEquipamento,
			selectedFamilia,
			selectedStatus,
			pesquisa,
		},
		handles: {
			setSelectedFilial,
			setSelectedSetor,
			setSelectedEquipamento,
			setSelectedFamilia,
			setSelectedStatus,
			setPesquisa,
		},
	}
}

export default useSearchEquipmentManuallyHook
