import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { SelectItemProps } from '@components/Select'

import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Equipamento } from '@models/Equipamento'
import { ConjuntoEquipamento } from '@models/ConjuntoEquipamento'
import { Oficina } from '@models/Oficina'
import { TipoManutencao } from '@models/TipoManutencao'
import { Condicao } from '@models/Condicao'
import { Prioridade } from '@models/Prioridade'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useEquipamentoService from '@services/useEquipamentoService.hook'
import useConjuntoEquipamentoService from '@services/useConjuntoEquipamentoService.hook'
import useOficinaService from '@services/useOficinaService.hook'
import useTipoManutencaoService from '@services/useTipoManutencaoService.hook'
import usePrioridadeService from '@services/usePrioridadeService.hook'

interface AdicionarOrdemServico {
	descricao: string
	selectedTipoManutencao: SelectItemProps | null
	selectedPrioridade: SelectItemProps | null
	selectedOficina: SelectItemProps | null
	selectedCondicao: SelectItemProps | null
	numeroPessoas: number
	tempoExecucao: number
	homemHora: number
	selectedFilial: SelectItemProps | null
	selectedSetor: SelectItemProps | null
	selectedEquipamento: SelectItemProps | null
	selectedConjunto: SelectItemProps | null
}

interface AdicionarOrdemServicoHookDataProps {
	tiposManutencao: TipoManutencao[]
	prioridades: Prioridade[]
	oficinas: Oficina[]
	condicoes: Condicao[]
	filiais: Filial[]
	setores: Setor[]
	equipamentos: Equipamento[]
	conjuntos: ConjuntoEquipamento[]
	valores: AdicionarOrdemServico
}

interface AdicionarOrdemServicoHandlesProps {
	setDescricao: Dispatch<SetStateAction<string>>
	setSelectedTipoManutencao: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedPrioridade: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedOficina: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedCondicao: Dispatch<SetStateAction<SelectItemProps | null>>
	setNumeroPessoas: Dispatch<SetStateAction<number>>
	setTempoExecucao: Dispatch<SetStateAction<number>>
	setHomemHora: Dispatch<SetStateAction<number>>
	setSelectedFilial: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedSetor: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedEquipamento: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedConjunto: Dispatch<SetStateAction<SelectItemProps | null>>
}

export interface AdicionarOrdemServicoHookProps {
	data: AdicionarOrdemServicoHookDataProps
	handles: AdicionarOrdemServicoHandlesProps
}

const useAdicionarOrdemServicoHook = (): AdicionarOrdemServicoHookProps => {
	const [tiposManutencao, setTiposManutencao] = useState<TipoManutencao[]>([])
	const [prioridades, setPrioridades] = useState<Prioridade[]>([])
	const [oficinas, setOficinas] = useState<Oficina[]>([])
	const [condicoes, setCondicoes] = useState<Condicao[]>([])
	const [filiais, setFiliais] = useState<Filial[]>([])
	const [setores, setSetores] = useState<Setor[]>([])
	const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
	const [conjuntos, setConjuntos] = useState<ConjuntoEquipamento[]>([])

	const [descricao, setDescricao] = useState('')
	const [selectedTipoManutencao, setSelectedTipoManutencao] =
		useState<SelectItemProps | null>(null)
	const [selectedPrioridade, setSelectedPrioridade] =
		useState<SelectItemProps | null>(null)
	const [selectedOficina, setSelectedOficina] =
		useState<SelectItemProps | null>(null)
	const [selectedCondicao, setSelectedCondicao] =
		useState<SelectItemProps | null>(null)
	const [numeroPessoas, setNumeroPessoas] = useState(0)
	const [tempoExecucao, setTempoExecucao] = useState(0)
	const [homemHora, setHomemHora] = useState(0)
	const [selectedFilial, setSelectedFilial] =
		useState<SelectItemProps | null>(null)
	const [selectedSetor, setSelectedSetor] = useState<SelectItemProps | null>(
		null
	)
	const [selectedEquipamento, setSelectedEquipamento] =
		useState<SelectItemProps | null>(null)
	const [selectedConjunto, setSelectedConjunto] =
		useState<SelectItemProps | null>(null)

	const { getTiposManutencao } = useTipoManutencaoService()
	const { getPrioridades } = usePrioridadeService()
	const { getOficinas } = useOficinaService()
	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getEquipamentosBySetor } = useEquipamentoService()
	const { getConjuntosEquipamentoById } = useConjuntoEquipamentoService()

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
		const loadSelectOficina = async () => {
			setSelectedOficina(null)

			setOficinas(await getOficinas())
		}

		loadSelectOficina()
	}, [])

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
		setHomemHora(numeroPessoas * tempoExecucao)
	}, [numeroPessoas, tempoExecucao])

	return {
		data: {
			tiposManutencao,
			prioridades,
			oficinas,
			condicoes,
			filiais,
			setores,
			equipamentos,
			conjuntos,
			valores: {
				descricao,
				selectedTipoManutencao,
				selectedPrioridade,
				selectedOficina,
				selectedCondicao,
				numeroPessoas,
				tempoExecucao,
				homemHora,
				selectedFilial,
				selectedSetor,
				selectedEquipamento,
				selectedConjunto,
			},
		},
		handles: {
			setDescricao,
			setSelectedTipoManutencao,
			setSelectedPrioridade,
			setSelectedOficina,
			setSelectedCondicao,
			setNumeroPessoas,
			setTempoExecucao,
			setHomemHora,
			setSelectedFilial,
			setSelectedSetor,
			setSelectedEquipamento,
			setSelectedConjunto,
		},
	}
}

export default useAdicionarOrdemServicoHook
