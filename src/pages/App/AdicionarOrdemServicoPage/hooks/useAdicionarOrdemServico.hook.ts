import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

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
import { Status } from '@models/Status'
import { OrdemServico } from '@models/OrdemServico'

interface AdicionarOrdemServico {
	descricao: string
	selectedTipoManutencao?: string
	selectedPrioridade?: string
	selectedOficina?: string
	selectedCondicao?: string
	numeroPessoas: string
	tempoExecucao: string
	homemHora: string
	selectedFilial?: string
	selectedSetor?: string
	selectedEquipamento?: string
	selectedConjunto?: string
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
	setSelectedTipoManutencao: Dispatch<SetStateAction<string | undefined>>
	setSelectedPrioridade: Dispatch<SetStateAction<string | undefined>>
	setSelectedOficina: Dispatch<SetStateAction<string | undefined>>
	setSelectedCondicao: Dispatch<SetStateAction<string | undefined>>
	setNumeroPessoas: Dispatch<SetStateAction<string>>
	setTempoExecucao: Dispatch<SetStateAction<string>>
	setHomemHora: Dispatch<SetStateAction<string>>
	setSelectedFilial: Dispatch<SetStateAction<string | undefined>>
	setSelectedSetor: Dispatch<SetStateAction<string | undefined>>
	setSelectedEquipamento: Dispatch<SetStateAction<string | undefined>>
	setSelectedConjunto: Dispatch<SetStateAction<string | undefined>>
	salvarOrdemServico: () => Promise<void>
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
	const [ordemServicoEdicao, setOrdemServicoEdicao] = useState<OrdemServico>(
		{} as OrdemServico
	)

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
	const [selectedTipoManutencao, setSelectedTipoManutencao] = useState<
		string | undefined
	>(undefined)
	const [selectedPrioridade, setSelectedPrioridade] = useState<
		string | undefined
	>(undefined)
	const [selectedOficina, setSelectedOficina] = useState<string | undefined>(
		undefined
	)
	const [selectedCondicao, setSelectedCondicao] = useState<
		string | undefined
	>(undefined)
	const [numeroPessoas, setNumeroPessoas] = useState('0')
	const [tempoExecucao, setTempoExecucao] = useState('0')
	const [homemHora, setHomemHora] = useState('0')
	const [selectedFilial, setSelectedFilial] = useState<string | undefined>(
		undefined
	)
	const [selectedSetor, setSelectedSetor] = useState<string | undefined>(
		undefined
	)
	const [selectedEquipamento, setSelectedEquipamento] = useState<
		string | undefined
	>(undefined)
	const [selectedConjunto, setSelectedConjunto] = useState<
		string | undefined
	>(undefined)

	const { getTiposManutencao } = useTipoManutencaoService()
	const { getPrioridades } = usePrioridadeService()
	const { getOficinas } = useOficinaService()
	const { getFiliais } = useFilialService()
	const { getSetores } = useSetorService()
	const { getEquipamentosBySetor } = useEquipamentoService()
	const { getConjuntosEquipamentoById } = useConjuntoEquipamentoService()
	const { getOrdemServico, postOrdemServico, putOrdemServico } =
		useOrdemServicoService()

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
			if (selectedFilial) {
				setSetores(await getSetores(selectedFilial))
			}
		}

		loadSelectSetor()
	}, [selectedFilial])

	useEffect(() => {
		const loadSelectEquipamento = async () => {
			if (selectedSetor) {
				setEquipamentos(await getEquipamentosBySetor(selectedSetor))
			}
		}

		loadSelectEquipamento()
	}, [selectedSetor])

	useEffect(() => {
		const loadSelectConjunto = async () => {
			if (selectedEquipamento) {
				setConjuntos(
					await getConjuntosEquipamentoById(selectedEquipamento)
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

				setOrdemServicoEdicao(ordemServico)

				setDescricao(ordemServico.descricao)
				setSelectedTipoManutencao(ordemServico.idTipoManutencao)
				setSelectedPrioridade(ordemServico.idPrioridade)
				setSelectedOficina(ordemServico.idOficina)
				setSelectedCondicao(ordemServico.condicao)
				setNumeroPessoas(ordemServico.homem.toFixed())
				setTempoExecucao(ordemServico.hora.toFixed(2))
				setHomemHora(
					(ordemServico.homem * ordemServico.hora).toFixed(2)
				)
				setSelectedFilial(ordemServico.ordemEquipamentos[0].idFilial)
				setSelectedSetor(ordemServico.ordemEquipamentos[0].idSetor)
				setSelectedEquipamento(
					ordemServico.ordemEquipamentos[0].idEquipamento
				)
				setSelectedConjunto(
					ordemServico.ordemEquipamentos[0].idSubConjuntoEquipamento
				)
			}
		}

		carregarEdicao()
	}, [])

	const addOrdemServico = async () => {
		try {
			setLoading(true)

			if (selectedFilial && selectedSetor && selectedEquipamento) {
				await postOrdemServico({
					descricao,
					idTipoManutencao: selectedTipoManutencao,
					idPrioridade: selectedPrioridade,
					idOficina: selectedOficina,
					condicao: selectedCondicao,
					homem: Number(numeroPessoas),
					hora: Number(tempoExecucao),
					ordemEquipamento: {
						idFilial: selectedFilial,
						idSetor: selectedSetor,
						idEquipamento: selectedEquipamento,
					},
				})
			}
		} catch (err) {
			Alert.alert('Erro', 'Erro ao criar ordem de serviço.')
		} finally {
			setLoading(false)
		}
	}

	const editarOrdemServico = async () => {
		try {
			setLoading(true)

			if (selectedFilial && selectedSetor && selectedEquipamento) {
				await putOrdemServico({
					id: params.id,
					codOrdem: ordemServicoEdicao.codOrdem,
					dataAbertura: ordemServicoEdicao.dataAbertura,
					descricao,
					idTipoManutencao: selectedTipoManutencao,
					idPrioridade: selectedPrioridade,
					idOficina: selectedOficina,
					condicao: selectedCondicao,
					status: ordemServicoEdicao.status,
					homem: Number(numeroPessoas),
					hora: Number(tempoExecucao),
					ordemEquipamentos: [
						{
							id: ordemServicoEdicao.ordemEquipamentos[0].id,
							idOrdemServico: ordemServicoEdicao.id,
							idFilial: selectedFilial,
							idSetor: selectedSetor,
							idEquipamento: selectedEquipamento,
						},
					],
				})
			}
		} catch (err) {
			Alert.alert('Erro', 'Erro ao editar ordem de serviço.')
		} finally {
			setLoading(false)
		}
	}

	const salvarOrdemServico = async () => {
		if (edicao) {
			return editarOrdemServico()
		}

		return addOrdemServico()
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
			salvarOrdemServico,
		},
	}
}

export default useAdicionarOrdemServicoHook
