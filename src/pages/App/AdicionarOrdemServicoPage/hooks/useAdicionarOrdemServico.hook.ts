import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

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
import useOrdemServicoService from '@services/useOrdemServicoService.hook'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface AdicionarOrdemServico {
	descricao: string
	selectedTipoManutencao: SelectItemProps | null
	selectedPrioridade: SelectItemProps | null
	selectedOficina: SelectItemProps | null
	selectedCondicao: SelectItemProps | null
	numeroPessoas: string
	tempoExecucao: string
	homemHora: string
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
	setNumeroPessoas: Dispatch<SetStateAction<string>>
	setTempoExecucao: Dispatch<SetStateAction<string>>
	setHomemHora: Dispatch<SetStateAction<string>>
	setSelectedFilial: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedSetor: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedEquipamento: Dispatch<SetStateAction<SelectItemProps | null>>
	setSelectedConjunto: Dispatch<SetStateAction<SelectItemProps | null>>
	addOrdemServico: () => Promise<void>
}

export interface AdicionarOrdemServicoHookProps {
	loading: boolean
	edicao: boolean
	data: AdicionarOrdemServicoHookDataProps
	handles: AdicionarOrdemServicoHandlesProps
}

type AdicionarOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AdicionarOrdemServicoPage'
>

const useAdicionarOrdemServicoHook = (): AdicionarOrdemServicoHookProps => {
	const { params } = useRoute<AdicionarOrdemServicoRouteProp>()

	const [loading, setLoading] = useState(false)
	const [edicao, setEdicao] = useState(false)

	const [tiposManutencao, setTiposManutencao] = useState<TipoManutencao[]>([])
	const [prioridades, setPrioridades] = useState<Prioridade[]>([])
	const [oficinas, setOficinas] = useState<Oficina[]>([])
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
	const [numeroPessoas, setNumeroPessoas] = useState('0')
	const [tempoExecucao, setTempoExecucao] = useState('0')
	const [homemHora, setHomemHora] = useState('0')
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
	const { getOrdemServico, postOrdemServico } = useOrdemServicoService()

	useEffect(() => {
		const loadSelects = async () => {
			setTiposManutencao(await getTiposManutencao(false))
			setPrioridades(await getPrioridades())
			setOficinas(await getOficinas())
			setFiliais(await getFiliais())
		}

		loadSelects()
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
		const homemHora = Number(numeroPessoas) * Number(tempoExecucao)
		setHomemHora(homemHora.toFixed(2))
	}, [numeroPessoas, tempoExecucao])

	useEffect(() => {
		const carregarEdicao = async () => {
			if (params.id) {
				setEdicao(true)

				const ordemServico = await getOrdemServico(params.id)

				setDescricao(ordemServico.descricao)
				setSelectedTipoManutencao({
					label: ordemServico.tipoManutencao.descricao,
					value: ordemServico.tipoManutencao.id,
				})
				setSelectedPrioridade({
					label: ordemServico.prioridade.descricao,
					value: ordemServico.prioridade.id,
				})
				setSelectedOficina({
					label: ordemServico.oficina.descricao,
					value: ordemServico.oficina.id,
				})
				setSelectedCondicao({
					label: '',
					value: ordemServico.condicao,
				})
				setNumeroPessoas(ordemServico.homem.toFixed())
				setTempoExecucao(ordemServico.hora.toFixed(2))
				setHomemHora(
					(ordemServico.homem * ordemServico.hora).toFixed(2)
				)
			}
		}

		carregarEdicao()
	}, [])

	const addOrdemServico = async () => {
		try {
			setLoading(true)

			await postOrdemServico({
				descricao,
				idTipoManutencao: selectedTipoManutencao?.value,
				idPrioridade: selectedPrioridade?.value,
				idOficina: selectedOficina?.value,
				condicao: selectedCondicao?.value,
				idSolicitacao: null,
				homem: Number(numeroPessoas),
				hora: Number(tempoExecucao),
				ordemEquipamento: {
					idFilial: selectedFilial!.value,
					idSetor: selectedSetor!.value,
					idEquipamento: selectedEquipamento!.value,
				},
			})
		} catch (err) {
			Alert.alert('Erro', 'Erro ao criar ordem de serviço.')
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		edicao,
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
			addOrdemServico,
		},
	}
}

export default useAdicionarOrdemServicoHook
