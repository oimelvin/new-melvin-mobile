import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'
import useOrdemServicoAcoesService from '@services/useOrdemServicoAcoesService.hook'
import { AcoesOrdemServicoTopTabNavigatorParamList } from '@routes/AcoesOrdemServicoTopTabNavigator'

interface ChecklistOrdemServicoHookDataProps {
	acoes: OrdemServicoAcoes[]
}

interface ChecklistOrdemServicoHandlesProps {
	onRefreshOrdensServicosAcoes: () => Promise<void>
	onEndReachedOrdensServicosAcoes: () => Promise<void>
	onRemoverChecklistPadrao: () => Promise<void>
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

	const removerChecklistPadrao = async () => {
		try {
			setSaving(true)

			// await deleteChecklistPadrao()
		} catch (err) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setSaving(false)
		}
	}

	const onRemoverChecklistPadrao = async () => {
		Alert.alert(
			i18n.t('common.warning'),
			i18n.t('common.irreversibleAction'),
			[
				{
					text: i18n.t('common.cancel'),
					onPress: () => {},
					style: 'cancel',
				},
				{
					text: i18n.t('common.remove'),
					onPress: () => removerChecklistPadrao(),
					style: 'destructive',
				},
			]
		)
	}

	return {
		loading,
		refreshing,
		saving,
		data: { acoes },
		handles: {
			onRefreshOrdensServicosAcoes,
			onEndReachedOrdensServicosAcoes,
			onRemoverChecklistPadrao,
		},
	}
}

export default useAcoesOrdemServicoHook
