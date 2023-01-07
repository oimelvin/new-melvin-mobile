import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SelectItemProps } from '@components/Select'

import { Status } from '@models/Status'
import { Oficina } from '@models/Oficina'
import { TipoManutencao } from '@models/TipoManutencao'
import { Condicao } from '@models/Condicao'
import { Prioridade } from '@models/Prioridade'
import { Executante } from '@models/Executante'

import useOficinaService from '@services/useOficinaService.hook'
import useTipoManutencaoService from '@services/useTipoManutencaoService.hook'
import usePrioridadeService from '@services/usePrioridadeService.hook'
import useExecutanteService from '@services/useExecutanteService.hook'
import { FiltrosCarteiraServicos } from '@models/FiltrosCarteiraServicos'

interface FiltroCarteiraServicosHookDataProps {
	status: Status[]
	oficinas: Oficina[]
	tiposManutencao: TipoManutencao[]
	condicoes: Condicao[]
	prioridades: Prioridade[]
	executantes: Executante[]
	filtros: FiltrosCarteiraServicos
}

interface FiltroCarteiraServicosHandlesProps {
	setSelectedStatus: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedOficina: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedTipoManutencao: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedCondicao: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedPrioridade: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedExecutante: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedDataAbertura: Dispatch<SetStateAction<Date | null>>
	setSelectedDataEncerramento: Dispatch<SetStateAction<Date | null>>
	setSelectedDataProgramada: Dispatch<SetStateAction<Date | null>>
	setPesquisa: Dispatch<SetStateAction<string>>
}

export interface FiltroCarteiraServicosHookProps {
	data: FiltroCarteiraServicosHookDataProps
	handles: FiltroCarteiraServicosHandlesProps
}

const useFiltroCarteiraServicosHook = (): FiltroCarteiraServicosHookProps => {
	const [status, setStatus] = useState<Status[]>([])
	const [oficinas, setOficinas] = useState<Oficina[]>([])
	const [tiposManutencao, setTiposManutencao] = useState<TipoManutencao[]>([])
	const [condicoes, setCondicoes] = useState<Condicao[]>([])
	const [prioridades, setPrioridades] = useState<Prioridade[]>([])
	const [executantes, setExecutantes] = useState<Executante[]>([])

	const [selectedStatus, setSelectedStatus] =
		useState<SelectItemProps | null>(null)
	const [selectedOficina, setSelectedOficina] =
		useState<SelectItemProps | null>(null)
	const [selectedTipoManutencao, setSelectedTipoManutencao] =
		useState<SelectItemProps | null>(null)
	const [selectedCondicao, setSelectedCondicao] =
		useState<SelectItemProps | null>(null)
	const [selectedPrioridade, setSelectedPrioridade] =
		useState<SelectItemProps | null>(null)
	const [selectedExecutante, setSelectedExecutante] =
		useState<SelectItemProps | null>(null)
	const [selectedDataAbertura, setSelectedDataAbertura] =
		useState<Date | null>(null)
	const [selectedDataEncerramento, setSelectedDataEncerramento] =
		useState<Date | null>(null)
	const [selectedDataProgramada, setSelectedDataProgramada] =
		useState<Date | null>(null)
	const [pesquisa, setPesquisa] = useState('')

	const { getOficinas } = useOficinaService()
	const { getTiposManutencao } = useTipoManutencaoService()
	const { getPrioridades } = usePrioridadeService()
	const { getExecutantes } = useExecutanteService()

	useEffect(() => {
		const loadSelectOficina = async () => {
			setSelectedOficina(null)

			setOficinas(await getOficinas())
		}

		loadSelectOficina()
	}, [])

	useEffect(() => {
		const loadSelectTipoManutencao = async () => {
			setSelectedTipoManutencao(null)

			setTiposManutencao(await getTiposManutencao(false))
		}

		loadSelectTipoManutencao()
	}, [])

	useEffect(() => {
		const loadSelectPrioridade = async () => {
			setSelectedPrioridade(null)

			setPrioridades(await getPrioridades())
		}

		loadSelectPrioridade()
	}, [])

	useEffect(() => {
		const loadSelectExecutantes = async () => {
			setSelectedExecutante(null)

			setExecutantes(await getExecutantes())
		}

		loadSelectExecutantes()
	}, [])

	return {
		data: {
			status,
			oficinas,
			tiposManutencao,
			condicoes,
			prioridades,
			executantes,
			filtros: {
				selectedStatus,
				selectedOficina,
				selectedTipoManutencao,
				selectedCondicao,
				selectedPrioridade,
				selectedExecutante,
				selectedDataAbertura,
				selectedDataEncerramento,
				selectedDataProgramada,
				pesquisa,
			},
		},
		handles: {
			setSelectedStatus,
			setSelectedOficina,
			setSelectedTipoManutencao,
			setSelectedCondicao,
			setSelectedPrioridade,
			setSelectedExecutante,
			setSelectedDataAbertura,
			setSelectedDataEncerramento,
			setSelectedDataProgramada,
			setPesquisa,
		},
	}
}

export default useFiltroCarteiraServicosHook
