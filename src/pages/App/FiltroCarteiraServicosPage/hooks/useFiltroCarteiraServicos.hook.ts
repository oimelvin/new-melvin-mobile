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
	setSelectedStatus: Dispatch<SetStateAction<string | undefined>>
	setSelectedOficina: Dispatch<SetStateAction<string | undefined>>
	setSelectedTipoManutencao: Dispatch<SetStateAction<string | undefined>>
	setSelectedCondicao: Dispatch<SetStateAction<string | undefined>>
	setSelectedPrioridade: Dispatch<SetStateAction<string | undefined>>
	setSelectedExecutante: Dispatch<SetStateAction<string | undefined>>
	setSelectedDataAbertura: Dispatch<SetStateAction<Date | undefined>>
	setSelectedDataEncerramento: Dispatch<SetStateAction<Date | undefined>>
	setSelectedDataProgramada: Dispatch<SetStateAction<Date | undefined>>
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
	const [condicoes] = useState<Condicao[]>([
		{
			id: '0',
			descricao: 'Parado',
		},
		{
			id: '1',
			descricao: 'Funcionando',
		},
	])
	const [prioridades, setPrioridades] = useState<Prioridade[]>([])
	const [executantes, setExecutantes] = useState<Executante[]>([])

	const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
		undefined
	)
	const [selectedOficina, setSelectedOficina] = useState<string | undefined>(
		undefined
	)
	const [selectedTipoManutencao, setSelectedTipoManutencao] = useState<
		string | undefined
	>(undefined)
	const [selectedCondicao, setSelectedCondicao] = useState<
		string | undefined
	>(undefined)
	const [selectedPrioridade, setSelectedPrioridade] = useState<
		string | undefined
	>(undefined)
	const [selectedExecutante, setSelectedExecutante] = useState<
		string | undefined
	>(undefined)
	const [selectedDataAbertura, setSelectedDataAbertura] = useState<
		Date | undefined
	>(undefined)
	const [selectedDataEncerramento, setSelectedDataEncerramento] = useState<
		Date | undefined
	>(undefined)
	const [selectedDataProgramada, setSelectedDataProgramada] = useState<
		Date | undefined
	>(undefined)
	const [pesquisa, setPesquisa] = useState('')

	const { getOficinas } = useOficinaService()
	const { getTiposManutencao } = useTipoManutencaoService()
	const { getPrioridades } = usePrioridadeService()
	const { getExecutantes } = useExecutanteService()

	useEffect(() => {
		const loadSelectOficina = async () => {
			setSelectedOficina(undefined)

			setOficinas(await getOficinas())
		}

		loadSelectOficina()
	}, [])

	useEffect(() => {
		const loadSelectTipoManutencao = async () => {
			setSelectedTipoManutencao(undefined)

			setTiposManutencao(await getTiposManutencao(false))
		}

		loadSelectTipoManutencao()
	}, [])

	useEffect(() => {
		const loadSelectPrioridade = async () => {
			setSelectedPrioridade(undefined)

			setPrioridades(await getPrioridades())
		}

		loadSelectPrioridade()
	}, [])

	useEffect(() => {
		const loadSelectExecutantes = async () => {
			setSelectedExecutante(undefined)

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
