import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SelectItemProps } from '@components/Select'

import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Equipamento } from '@models/Equipamento'
import { ConjuntoEquipamento } from '@models/ConjuntoEquipamento'
import { Status } from '@models/Status'
import { Oficina } from '@models/Oficina'
import { TipoManutencao } from '@models/TipoManutencao'
import { Condicao } from '@models/Condicao'
import { Prioridade } from '@models/Prioridade'
import { Executante } from '@models/Executante'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useEquipamentoService from '@services/useEquipamentoService.hook'
import useConjuntoEquipamentoService from '@services/useConjuntoEquipamentoService.hook'
import useOficinaService from '@services/useOficinaService.hook'
import useTipoManutencaoService from '@services/useTipoManutencaoService.hook'
import usePrioridadeService from '@services/usePrioridadeService.hook'
import useExecutanteService from '@services/useExecutanteService.hook'
import { FiltrosCarteiraServicos } from '@models/FiltrosCarteiraServicos'
import { CreateSolicitacaoServicoDto } from '@models/CreateSolicitacaoServico'

interface FiltroSolicitacaoServicosHookDataProps {
	filiais: Filial[]
	setores: Setor[]
	equipamentos: Equipamento[]
	conjuntos: ConjuntoEquipamento[]
	status: Status[]
	oficinas: Oficina[]
	tiposManutencao: TipoManutencao[]
	condicoes: Condicao[]
	prioridades: Prioridade[]
	executantes: Executante[]
	filtros: CreateSolicitacaoServicoDto
}

interface FiltroSolicitacaoServicosHandlesProps {
	setSelectedFilial: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedSetor: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedEquipamento: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedConjunto: Dispatch<SetStateAction<SelectItemProps | null>>
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
	setFiltros(filtros: FiltrosCarteiraServicos): void
	setSelectedCanal: Dispatch<SetStateAction<SelectItemProps | null>>
}

export interface FiltroSolicitacaoServicosHookProps {
	data: FiltroSolicitacaoServicosHookDataProps
	handles: FiltroSolicitacaoServicosHandlesProps
}

const useFiltroSolicitacaoServicosHook = (): FiltroSolicitacaoServicosHookProps => {
	const [filiais, setFiliais] = useState<Filial[]>([])
	const [setores, setSetores] = useState<Setor[]>([])
	const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
	const [conjuntos, setConjuntos] = useState<ConjuntoEquipamento[]>([])
	const [status, setStatus] = useState<Status[]>([])
	const [oficinas, setOficinas] = useState<Oficina[]>([])
	const [tiposManutencao, setTiposManutencao] = useState<TipoManutencao[]>([])
	const [condicoes, setCondicoes] = useState<Condicao[]>([])
	const [prioridades, setPrioridades] = useState<Prioridade[]>([])
	const [executantes, setExecutantes] = useState<Executante[]>([])

	const [selectedFilial, setSelectedFilial] =
		useState<SelectItemProps | null>(null)
	const [selectedSetor, setSelectedSetor] = useState<SelectItemProps | null>(
		null
	)
	const [selectedEquipamento, setSelectedEquipamento] =
		useState<SelectItemProps | null>(null)
	const [selectedConjunto, setSelectedConjunto] =
		useState<SelectItemProps | null>(null)
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
	const [selectedCanal, setSelectedCanal] =
		useState<SelectItemProps | null>(null)
	const [pesquisa, setPesquisa] = useState('')

	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getEquipamentosBySetor } = useEquipamentoService()
	const { getConjuntosEquipamentoById } = useConjuntoEquipamentoService()
	const { getOficinas } = useOficinaService()
	const { getTiposManutencao } = useTipoManutencaoService()
	const { getPrioridades } = usePrioridadeService()
	const { getExecutantes } = useExecutanteService()

	useEffect(() => {
		const loadSelectFilial = async () => {
			setSelectedFilial(null)

			setFiliais(await getFiliais())
		}

		loadSelectFilial()
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
		const loadSelectEquipamento = async () => {
			setSelectedEquipamento(null)

			if (selectedSetor) {
				setEquipamentos(
					await getEquipamentosBySetor(selectedSetor.value)
				)
			}
		}

		loadSelectEquipamento()
	}, [selectedSetor])

	useEffect(() => {
		const loadSelectConjunto = async () => {
			setSelectedConjunto(null)

			if (selectedEquipamento) {
				setConjuntos(
					await getConjuntosEquipamentoById(selectedEquipamento.value)
				)
			}
		}

		loadSelectConjunto()
	}, [selectedEquipamento])

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

	const setFiltros = ({
		selectedFilial,
		selectedSetor,
		selectedEquipamento,
		selectedConjunto,
		selectedStatus,
		selectedOficina,
		selectedTipoManutencao,
		selectedCondicao,
		selectedPrioridade,
		selectedExecutante,
		selectedDataAbertura,
		selectedDataEncerramento,
		selectedDataProgramada,
		selectedCanal,
		pesquisa,
	}: CreateSolicitacaoServicoDto) => {
		setSelectedFilial(selectedFilial)
		setSelectedSetor(selectedSetor)
		setSelectedEquipamento(selectedEquipamento)
		setSelectedConjunto(selectedConjunto)
		setSelectedStatus(selectedStatus)
		setSelectedOficina(selectedOficina)
		setSelectedTipoManutencao(selectedTipoManutencao)
		setSelectedCondicao(selectedCondicao)
		setSelectedPrioridade(selectedPrioridade)
		setSelectedExecutante(selectedExecutante)
		setSelectedDataAbertura(selectedDataAbertura)
		setSelectedDataEncerramento(selectedDataEncerramento)
		setSelectedDataProgramada(selectedDataProgramada)
		setSelectedCanal(selectedCanal)
		setPesquisa(pesquisa)
		
	}

	return {
		data: {
			filiais,
			setores,
			equipamentos,
			conjuntos,
			status,
			oficinas,
			tiposManutencao,
			condicoes,
			prioridades,
			executantes,
			filtros: {
				selectedFilial,
				selectedSetor,
				selectedEquipamento,
				selectedConjunto,
				selectedStatus,
				selectedOficina,
				selectedTipoManutencao,
				selectedCondicao,
				selectedPrioridade,
				selectedExecutante,
				selectedDataAbertura,
				selectedDataEncerramento,
				selectedDataProgramada,
				selectedCanal,
				pesquisa,
			},
		},
		handles: {
			setSelectedFilial,
			setSelectedSetor,
			setSelectedEquipamento,
			setSelectedConjunto,
			setSelectedStatus,
			setSelectedOficina,
			setSelectedTipoManutencao,
			setSelectedCondicao,
			setSelectedPrioridade,
			setSelectedExecutante,
			setSelectedDataAbertura,
			setSelectedDataEncerramento,
			setSelectedDataProgramada,
			setSelectedCanal,
			setPesquisa,
			setFiltros,
		},
	}
}

export default useFiltroSolicitacaoServicosHook
