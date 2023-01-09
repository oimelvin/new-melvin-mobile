import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AcoesOrdemServicoTopTabNavigatorParamList } from '@routes/AcoesOrdemServicoTopTabNavigator'
import { i18n } from '@languages/index'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'
import useOrdemServicoAcoesService from '@services/useOrdemServicoAcoesService.hook'

interface ChecklistOrdemServicoHookDataProps {
	acoes: OrdemServicoAcoes[]
}

interface ChecklistOrdemServicoHandlesProps {
	onRefreshOrdensServicosAcoes: () => Promise<void>
	onEndReachedOrdensServicosAcoes: () => Promise<void>
	onSalvarAcoes: () => Promise<void>
}

export interface AcoesOrdemServicoHookProps {
	loading: boolean
	refreshing: boolean
	saving: boolean
	data: ChecklistOrdemServicoHookDataProps
	handles: ChecklistOrdemServicoHandlesProps
}

type ChecklistOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AcoesOrdemServicoTopTabNavigatorParamList,
	'ChecklistOrdemServicoPage'
>

type ChecklistOrdemServicoRouteProp = RouteProp<
	AcoesOrdemServicoTopTabNavigatorParamList,
	'ChecklistOrdemServicoPage'
>

const useAcoesOrdemServicoHook = (): AcoesOrdemServicoHookProps => {
	const { navigate } = useNavigation<ChecklistOrdemServicoNavigatorProp>()
	const { params } = useRoute<ChecklistOrdemServicoRouteProp>()

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

			console.log(params)
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
			console.log(err)
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
		data: { acoes },
		handles: {
			onRefreshOrdensServicosAcoes,
			onEndReachedOrdensServicosAcoes,
			onSalvarAcoes,
		},
	}
}

export default useAcoesOrdemServicoHook
