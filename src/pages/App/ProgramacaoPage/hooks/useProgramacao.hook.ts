import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { OrdemServico } from '@models/OrdemServico'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface ProgramacaoHookDataProps {
	loading: boolean
	refreshing: boolean
	ordensServicos: OrdemServico[]
}

interface ProgramacaoHandlesProps {
	onCarregarOrdensServicos(): void
	onRefreshOrdensServicos(): void
	onEndReachedOrdensServicos(): void
	onPressFilter(): void
	onPressOrdemServico(id: string): void
}

export interface ProgramacaoHookProps {
	data: ProgramacaoHookDataProps
	handles: ProgramacaoHandlesProps
}

type ProgramacaoPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'ProgramacaoPage'
>

const useProgramacaoHook = (): ProgramacaoHookProps => {
	const { navigate } = useNavigation<ProgramacaoPageProp>()

	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [pagina, setPagina] = useState(0)
	const [qtdPaginas, setQtdPaginas] = useState(1)
	const [ordensServicos, setOrdensServicos] = useState<OrdemServico[]>([])

	const { getOrdensServicos } = useOrdemServicoService()

	useEffect(() => {
		setLoading(true)
		onCarregarOrdensServicos()
	}, [pagina])

	const onCarregarOrdensServicos = async () => {
		try {
			const { items, totalCount } = await getOrdensServicos(
				pagina * itensPorPagina,
				itensPorPagina
			)

			if (refreshing) {
				setOrdensServicos(items)
			} else {
				setOrdensServicos([...ordensServicos, ...items])
			}

			setQtdPaginas(Math.ceil(totalCount / itensPorPagina))
		} catch (error) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setRefreshing(false)
			setLoading(false)
		}
	}

	const onRefreshOrdensServicos = async () => {
		if (pagina !== 0) {
			setRefreshing(true)
			setQtdPaginas(0)
			setPagina(0)
		}
	}

	const onEndReachedOrdensServicos = async () => {
		if (!loading && pagina <= qtdPaginas) {
			setLoading(true)
			setPagina(pagina + 1)
		}
	}

	const onPressFilter = async () => {
		navigate('FiltroCarteiraServicosPage')
	}

	const onPressOrdemServico = async (id: string) => {
		navigate('DetalhesOrdemServicoPage', {
			id,
		})
	}

	return {
		data: {
			loading,
			ordensServicos,
			refreshing,
		},
		handles: {
			onCarregarOrdensServicos,
			onRefreshOrdensServicos,
			onEndReachedOrdensServicos,
			onPressFilter,
			onPressOrdemServico,
		},
	}
}

export default useProgramacaoHook
