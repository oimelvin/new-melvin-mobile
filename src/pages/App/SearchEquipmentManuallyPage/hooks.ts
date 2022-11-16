import { useEffect, useState } from 'react'

import { SelectItemProps } from '@components/Select'

import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Ativo } from '@models/Ativo'
import { Familia } from '@models/Familia'
import { Status } from '@models/Status'
import { Oficina } from '@models/Oficina'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useAtivoService from '@services/useAtivoService.hook'
import useFamiliaService from '@services/useFamiliaService.hook'
import useOficinaService from '@services/useOficinaService.hook'

interface SearchEquipmentHookDataProps {
  filiais: Filial[]
  setores: Setor[]
  ativos: Ativo[]
  familias: Familia[]
  status: Status[]
  oficinas: Oficina[]
  selectedFilial: SelectItemProps | null
  selectedSetor: SelectItemProps | null
  selectedAtivo: SelectItemProps | null
  selectedFamilia: SelectItemProps | null
  selectedStatus: SelectItemProps | null
  selectedOficina: SelectItemProps | null
  pesquisa: string
}

interface SearchEquipmentHookHandlesProps {
  setSelectedFilial(value: string): void
  setSelectedSetor(value: string): void
  setSelectedAtivo(value: string): void
  setSelectedFamilia(value: string): void
  setSelectedStatus(value: string): void
  setSelectedOficina(value: string): void
  setPesquisa(value: string): void
  submitSearch(value: string): void
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
	const [status, setStatus] = useState<Status[]>([])
	const [oficinas, setOficinas] = useState<Oficina[]>([])
	const [pesquisa, setPesquisa] = useState<string>()

	const [selectedFilial, setSelectedFilial] = useState<SelectItemProps | null>(
		null
	)
	const [selectedSetor, setSelectedSetor] = useState<SelectItemProps | null>(
		null
	)
	const [selectedAtivo, setSelectedAtivo] = useState<SelectItemProps | null>(
		null
	)
	const [selectedFamilia, setSelectedFamilia] =
    useState<SelectItemProps | null>(null)
	const [selectedStatus, setSelectedStatus] = useState<SelectItemProps | null>(
		null
	)
	const [selectedOficina, setSelectedOficina] =
    useState<SelectItemProps | null>(null)

	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getAtivos } = useAtivoService()
	const { getFamilias } = useFamiliaService()
	const { getOficinas } = useOficinaService()

	useEffect(() => {
		const loadSelectFilial = async () => {
			setSelectedFilial(null)
			setSelectedSetor(null)

			setFiliais(await getFiliais())
		}

		loadSelectFilial()
	}, [])

	useEffect(() => {
		const loadSelectFamilia = async () => {
			setSelectedFamilia(null)
			setSelectedAtivo(null)

			setFamilias(await getFamilias())
		}

		loadSelectFamilia()
	}, [])

	useEffect(() => {
		const loadSelectOficina = async () => {
			setOficinas(await getOficinas())
		}

		loadSelectOficina()
	}, [])

	useEffect(() => {
		const loadSelectSetor = async () => {
			setSelectedSetor(null)
			setSelectedAtivo(null)

			if (selectedFilial) {
				setSetores(await getSetores(selectedFilial.value))
			}
		}

		loadSelectSetor()
	}, [selectedFilial])

	useEffect(() => {
		const loadSelectAtivo = async () => {
			setSelectedAtivo(null)

			setAtivos(await getAtivos(selectedSetor?.value, selectedFamilia?.value))
		}

		loadSelectAtivo()
	}, [selectedSetor, selectedFamilia])

	const submitSearch = async () => {}

	return {
		data: {
			filiais,
			setores,
			ativos,
			familias,
			status,
			oficinas,
			selectedFilial,
			selectedSetor,
			selectedAtivo,
			selectedFamilia,
			selectedStatus,
			selectedOficina,
			pesquisa,
		},
		handles: {
			setSelectedFilial,
			setSelectedSetor,
			setSelectedAtivo,
			setSelectedFamilia,
			setSelectedStatus,
			setSelectedOficina,
			setPesquisa,
			submitSearch,
		},
	}
}

export default useSearchEquipmentManuallyHook
