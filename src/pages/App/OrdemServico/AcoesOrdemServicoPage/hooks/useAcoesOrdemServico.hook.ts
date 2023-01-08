import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { i18n } from '@languages/index'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'
import useOrdemServicoAcoesService from '@services/useOrdemServicoAcoesService.hook'

interface AcoesOrdemServicoHookDataProps {
	orientacao: string
	acoes: OrdemServicoAcoes[]
	observacoes: string
}

interface AcoesOrdemServicoHandlesProps {
	setOrientacao: Dispatch<SetStateAction<string>>
	setObservacoes: Dispatch<SetStateAction<string>>
	onRefreshOrdensServicosAcoes: () => Promise<void>
	onEndReachedOrdensServicosAcoes: () => Promise<void>
	onSalvarAcoes: () => Promise<void>
}

export interface AcoesOrdemServicoHookProps {
	loading: boolean
	refreshing: boolean
	saving: boolean
	data: AcoesOrdemServicoHookDataProps
	handles: AcoesOrdemServicoHandlesProps
}

type AcoesOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AcoesOrdemServicoPage'
>

type AcoesOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AcoesOrdemServicoPage'
>

const useAcoesOrdemServicoHook = (): AcoesOrdemServicoHookProps => {
	const { navigate } = useNavigation<AcoesOrdemServicoNavigatorProp>()
	const { params } = useRoute<AcoesOrdemServicoRouteProp>()

	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [pagina, setPagina] = useState(0)
	const [qtdPaginas, setQtdPaginas] = useState(1)
	const [saving, setSaving] = useState(false)

	const [acoes, setAcoes] = useState<OrdemServicoAcoes[]>([])
	const [orientacao, setOrientacao] = useState('')
	const [observacoes, setObservacoes] = useState('')

	const { getOrdensServicosAcoes } = useOrdemServicoAcoesService()

	useEffect(() => {
		onCarregarAcoes()
	}, [])

	const onCarregarAcoes = async () => {
		try {
			setLoading(true)

			const { items, totalCount } = await getOrdensServicosAcoes(
				pagina * itensPorPagina,
				itensPorPagina,
				params.id
			)

			console.log(items)

			if (refreshing) {
				setAcoes(items)
			} else {
				setAcoes([...acoes, ...items])
			}

			setQtdPaginas(Math.ceil(totalCount / itensPorPagina))
		} catch (err) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setLoading(false)
		}
	}

	const onRefreshOrdensServicosAcoes = async () => {
		if (pagina !== 0) {
			setRefreshing(true)
			setQtdPaginas(0)
			setPagina(0)
		}
	}

	const onEndReachedOrdensServicosAcoes = async () => {
		if (!loading && pagina <= qtdPaginas) {
			setLoading(true)
			setPagina(pagina + 1)
		}
	}

	const onSalvarAcoes = async () => {
		try {
			setSaving(true)
			Alert.alert('Salvar ações', 'Funcionalidade não implementada.')
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
		refreshing,
		saving,
		data: { orientacao, acoes, observacoes },
		handles: {
			setOrientacao,
			setObservacoes,
			onRefreshOrdensServicosAcoes,
			onEndReachedOrdensServicosAcoes,
			onSalvarAcoes,
		},
	}
}

export default useAcoesOrdemServicoHook
