import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { OrdemServicoApontamento } from '@models/OrdemServicoApontamento'
import useOrdemServicoApontamentosService from '@services/useOrdemServicoApontamentosService.hook'

interface ApontamentosOrdemServicoHookDataProps {
	apontamentos: OrdemServicoApontamento[]
}

interface ApontamentosOrdemServicoHandlesProps {
	onRefreshOrdensServicosApontamentos: () => Promise<void>
	onEndReachedOrdensServicosApontamentos: () => Promise<void>
	onAdicionarApontamentoOrdemServico: () => Promise<void>
	onEditarApontamentoOrdemServico: () => Promise<void>
	onExcluirApontamentoOrdemServico: () => Promise<void>
}

export interface ApontamentosOrdemServicoHookProps {
	loading: boolean
	refreshing: boolean
	data: ApontamentosOrdemServicoHookDataProps
	handles: ApontamentosOrdemServicoHandlesProps
}

type ApontamentosOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'ApontamentosOrdemServicoPage'
>

type ApontamentosOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'ApontamentosOrdemServicoPage'
>

const useApontamentosOrdemServicoHook =
	(): ApontamentosOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<ApontamentosOrdemServicoNavigatorProp>()
		const { params } = useRoute<ApontamentosOrdemServicoRouteProp>()

		const itensPorPagina = 10

		const [loading, setLoading] = useState(false)
		const [refreshing, setRefreshing] = useState(false)
		const [pagina, setPagina] = useState(0)
		const [qtdPaginas, setQtdPaginas] = useState(1)

		const [apontamentos, setApontamentos] = useState<
			OrdemServicoApontamento[]
		>([])

		const { getOrdensServicosApontamentos } =
			useOrdemServicoApontamentosService()

		useEffect(() => {
			onCarregarApontamentos()
		}, [])

		const onCarregarApontamentos = async () => {
			try {
				setLoading(true)

				const { items, totalCount } =
					await getOrdensServicosApontamentos(
						pagina * itensPorPagina,
						itensPorPagina,
						params.id
					)

				if (refreshing) {
					setApontamentos(items)
				} else {
					setApontamentos([...apontamentos, ...items])
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

		const onRefreshOrdensServicosApontamentos = async () => {
			if (pagina !== 0) {
				setRefreshing(true)
				setQtdPaginas(0)
				setPagina(0)
			}
		}

		const onEndReachedOrdensServicosApontamentos = async () => {
			if (!loading && pagina <= qtdPaginas) {
				setLoading(true)
				setPagina(pagina + 1)
			}
		}

		const onAdicionarApontamentoOrdemServico = async () => {}

		const onEditarApontamentoOrdemServico = async () => {}

		const onExcluirApontamentoOrdemServico = async () => {}

		return {
			loading,
			refreshing,
			data: {
				apontamentos,
			},
			handles: {
				onRefreshOrdensServicosApontamentos,
				onEndReachedOrdensServicosApontamentos,
				onAdicionarApontamentoOrdemServico,
				onEditarApontamentoOrdemServico,
				onExcluirApontamentoOrdemServico,
			},
		}
	}

export default useApontamentosOrdemServicoHook
