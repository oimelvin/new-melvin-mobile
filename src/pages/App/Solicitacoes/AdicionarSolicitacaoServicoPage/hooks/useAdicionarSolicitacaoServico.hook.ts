import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { Canal } from '@models/Canal'
import { Filial } from '@models/Filial'
import { Setor } from '@models/Setor'
import { Equipamento } from '@models/Equipamento'
import { Prioridade } from '@models/Prioridade'
import { SolicitacaoServico } from '@models/SolicitacaoServico'

import useFilialService from '@services/useFilialService.hook'
import useSetorService from '@services/useSetorService.hook'
import useEquipamentoService from '@services/useEquipamentoService.hook'
import usePrioridadeService from '@services/usePrioridadeService.hook'
import useSolicitacaoServicoService from '@services/useSolicitacaoServicoService.hook'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { i18n } from '@languages/index'

interface AdicionarSolicitacaoServico {
	solicitante: string
	selectedCanal?: string
	selectedFilial?: string
	selectedSetor?: string
	selectedEquipamento?: string
	selectedPrioridade?: string
	solicitacao: string
}

interface AdicionarSolicitacaoServicoHookDataProps {
	canais: Canal[]
	filiais: Filial[]
	setores: Setor[]
	equipamentos: Equipamento[]
	prioridades: Prioridade[]
	valores: AdicionarSolicitacaoServico
}

interface AdicionarSolicitacaoServicoHandlesProps {
	setSolicitante: Dispatch<SetStateAction<string>>
	setSelectedCanal: Dispatch<SetStateAction<string | undefined>>
	setSelectedFilial: Dispatch<SetStateAction<string | undefined>>
	setSelectedSetor: Dispatch<SetStateAction<string | undefined>>
	setSelectedEquipamento: Dispatch<SetStateAction<string | undefined>>
	setSelectedPrioridade: Dispatch<SetStateAction<string | undefined>>
	setSolicitacao: Dispatch<SetStateAction<string>>
	salvarSolicitacaoServico: () => Promise<void>
}

export interface AdicionarSolicitacaoServicoHookProps {
	loading: boolean
	saving: boolean
	edicao: boolean
	data: AdicionarSolicitacaoServicoHookDataProps
	handles: AdicionarSolicitacaoServicoHandlesProps
}

type AdicionarSolicitacaoServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AdicionarSolicitacaoServicoPage'
>

const useAdicionarSolicitacaoServicoHook =
	(): AdicionarSolicitacaoServicoHookProps => {
		const { params } = useRoute<AdicionarSolicitacaoServicoRouteProp>()

		const [loading, setLoading] = useState(false)
		const [saving, setSaving] = useState(false)
		const [edicao, setEdicao] = useState(false)
		const [solicitacaoServicoEdicao, setSolicitacaoServicoEdicao] =
			useState<SolicitacaoServico>({} as SolicitacaoServico)

		const [canais] = useState<Canal[]>([
			{
				id: '1',
				descricao: 'Telefone',
			},
			{
				id: '2',
				descricao: 'Email',
			},
			{
				id: '3',
				descricao: 'Sistema',
			},
			{
				id: '4',
				descricao: 'Pessoalmente',
			},
		])
		const [filiais, setFiliais] = useState<Filial[]>([])
		const [setores, setSetores] = useState<Setor[]>([])
		const [equipamentos, setEquipamentos] = useState<Equipamento[]>([])
		const [prioridades, setPrioridades] = useState<Prioridade[]>([])

		const [solicitante, setSolicitante] = useState('')
		const [selectedCanal, setSelectedCanal] = useState<string | undefined>(
			undefined
		)
		const [selectedFilial, setSelectedFilial] = useState<
			string | undefined
		>(undefined)
		const [selectedSetor, setSelectedSetor] = useState<string | undefined>(
			undefined
		)
		const [selectedEquipamento, setSelectedEquipamento] = useState<
			string | undefined
		>(undefined)
		const [selectedPrioridade, setSelectedPrioridade] = useState<
			string | undefined
		>(undefined)
		const [solicitacao, setSolicitacao] = useState('')

		const { getFiliais } = useFilialService()
		const { getSetores } = useSetorService()
		const { getEquipamentosBySetor } = useEquipamentoService()
		const { getPrioridades } = usePrioridadeService()
		const {
			getSolicitacoesServico,
			getSolicitacaoServico,
			postSolicitacaoServico,
		} = useSolicitacaoServicoService()

		useEffect(() => {
			const loadSelects = async () => {
				setPrioridades(await getPrioridades())
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
			const carregarEdicao = async () => {
				try {
					if (params.id) {
						setEdicao(true)
						setLoading(true)

						const solicitacaoServico = await getSolicitacaoServico(
							params.id
						)

						setSolicitacaoServicoEdicao(solicitacaoServico)

						setSolicitante(solicitacaoServico.solicitante)
						setSelectedCanal(solicitacaoServico.canal)
						setSelectedFilial(solicitacaoServico.idFilial)
						setSelectedSetor(solicitacaoServico.idSetor)
						setSelectedEquipamento(solicitacaoServico.idEquipamento)
						setSelectedPrioridade(solicitacaoServico.idPrioridade)
						setSolicitante(solicitacaoServico.solicitacao)
					}
				} catch (err) {
					Alert.alert(
						i18n.t('common.error'),
						i18n.t('common.anErrorHasOccuredPleaseTryAgain')
					)
				} finally {
					setLoading(false)
				}
			}

			carregarEdicao()
		}, [])

		const addSolicitacaoServico = async () => {
			if (
				selectedCanal &&
				selectedPrioridade &&
				selectedFilial &&
				selectedSetor &&
				selectedEquipamento
			) {
				await postSolicitacaoServico({
					solicitante,
					canal: selectedCanal,
					idFilial: selectedFilial,
					idSetor: selectedSetor,
					idEquipamento: selectedEquipamento,
					idPrioridade: selectedPrioridade,
					solicitacao,
				})
			}
		}

		const editarSolicitacaoServico = async () => {
			if (
				selectedCanal &&
				selectedPrioridade &&
				selectedFilial &&
				selectedSetor &&
				selectedEquipamento
			) {
				await postSolicitacaoServico({
					...solicitacaoServicoEdicao,
					id: params.id,
					solicitante,
					canal: selectedCanal,
					idFilial: selectedFilial,
					idSetor: selectedSetor,
					idEquipamento: selectedEquipamento,
					idPrioridade: selectedPrioridade,
					solicitacao,
				})
			}
		}

		const salvarSolicitacaoServico = async () => {
			try {
				if (edicao) {
					return editarSolicitacaoServico()
				}

				return addSolicitacaoServico()
			} catch (err) {
				Alert.alert(
					i18n.t('common.error'),
					i18n.t('common.anErrorHasOccuredPleaseTryAgain')
				)
			} finally {
				setSaving(false)
			}
		}

		return {
			loading,
			saving,
			edicao,
			data: {
				canais,
				filiais,
				setores,
				equipamentos,
				prioridades,
				valores: {
					solicitante,
					selectedCanal,
					selectedFilial,
					selectedSetor,
					selectedEquipamento,
					selectedPrioridade,
					solicitacao,
				},
			},
			handles: {
				setSolicitante,
				setSelectedCanal,
				setSelectedFilial,
				setSelectedSetor,
				setSelectedEquipamento,
				setSelectedPrioridade,
				setSolicitacao,
				salvarSolicitacaoServico,
			},
		}
	}

export default useAdicionarSolicitacaoServicoHook
