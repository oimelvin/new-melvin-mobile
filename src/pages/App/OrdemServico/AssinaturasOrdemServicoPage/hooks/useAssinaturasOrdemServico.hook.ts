import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { OrdemServicoAssinatura } from '@models/OrdemServicoAssinatura'
import useOrdemServicoAssinaturasService from '@services/useOrdemServicoAssinaturaService.hook'

interface AssinaturasOrdemServicoHookDataProps {
	assinaturas: OrdemServicoAssinatura[]
}

interface AssinaturasOrdemServicoHandlesProps {
	onRefreshOrdensServicosAssinaturas: () => Promise<void>
	onEndReachedOrdensServicosAssinaturas: () => Promise<void>
	onAdicionarAssinaturasOrdemServico: () => Promise<void>
	onExcluirAssinaturasOrdemServico: () => Promise<void>
}

export interface AssinaturasOrdemServicoHookProps {
	loading: boolean
	refreshing: boolean
	data: AssinaturasOrdemServicoHookDataProps
	handles: AssinaturasOrdemServicoHandlesProps
}

type AssinaturasOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AssinaturasOrdemServicoPage'
>

type AssinaturasOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AssinaturasOrdemServicoPage'
>

const useAssinaturasOrdemServicoHook = (): AssinaturasOrdemServicoHookProps => {
	const { navigate } = useNavigation<AssinaturasOrdemServicoNavigatorProp>()
	const { params } = useRoute<AssinaturasOrdemServicoRouteProp>()

	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [pagina, setPagina] = useState(0)
	const [qtdPaginas, setQtdPaginas] = useState(1)

	const [assinaturas, setAssinaturas] = useState<OrdemServicoAssinatura[]>([])

	const { getOrdensServicosAssinatura } = useOrdemServicoAssinaturasService()

	useEffect(() => {
		onCarregarAssinaturas()
	}, [])

	const onCarregarAssinaturas = async () => {
		try {
			setLoading(true)

			const { items, totalCount } = await getOrdensServicosAssinatura(
				pagina * itensPorPagina,
				itensPorPagina,
				params.id
			)

			if (refreshing) {
				setAssinaturas(items)
			} else {
				setAssinaturas([...assinaturas, ...items])
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

	const onRefreshOrdensServicosAssinaturas = async () => {
		if (pagina !== 0) {
			setRefreshing(true)
			setQtdPaginas(0)
			setPagina(0)
		}
	}

	const onEndReachedOrdensServicosAssinaturas = async () => {
		if (!loading && pagina <= qtdPaginas) {
			setLoading(true)
			setPagina(pagina + 1)
		}
	}

	const onAdicionarAssinaturasOrdemServico = async () => {}

	const onExcluirAssinaturasOrdemServico = async () => {}

	return {
		loading,
		refreshing,
		data: {
			assinaturas,
		},
		handles: {
			onRefreshOrdensServicosAssinaturas,
			onEndReachedOrdensServicosAssinaturas,
			onAdicionarAssinaturasOrdemServico,
			onExcluirAssinaturasOrdemServico,
		},
	}
}

export default useAssinaturasOrdemServicoHook
