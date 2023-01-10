import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { OrdemServicoIndisponibilidade } from '@models/OrdemServicoIndisponibilidade'
import useOrdemServicoIndisponibilidadeService from '@services/useOrdemServicoIndisponibilidadeService.hook'

interface IndisponibilidadeOrdemServicoHookDataProps {
	indisponibilidade: OrdemServicoIndisponibilidade[]
}

interface IndisponibilidadeOrdemServicoHandlesProps {
	onRefreshOrdensServicosIndisponibilidade: () => Promise<void>
	onEndReachedOrdensServicosIndisponibilidade: () => Promise<void>
	onAdicionarIndisponibilidadeOrdemServico: () => Promise<void>
	onEditarIndisponibilidadeOrdemServico: () => Promise<void>
	onExcluirIndisponibilidadeOrdemServico: () => Promise<void>
}

export interface IndisponibilidadeOrdemServicoHookProps {
	loading: boolean
	refreshing: boolean
	data: IndisponibilidadeOrdemServicoHookDataProps
	handles: IndisponibilidadeOrdemServicoHandlesProps
}

type IndisponibilidadeOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'IndisponibilidadeOrdemServicoPage'
>

type IndisponibilidadeOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'IndisponibilidadeOrdemServicoPage'
>

const useIndisponibilidadeOrdemServicoHook =
	(): IndisponibilidadeOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<IndisponibilidadeOrdemServicoNavigatorProp>()
		const { params } = useRoute<IndisponibilidadeOrdemServicoRouteProp>()

		const itensPorPagina = 10

		const [loading, setLoading] = useState(false)
		const [refreshing, setRefreshing] = useState(false)
		const [pagina, setPagina] = useState(0)
		const [qtdPaginas, setQtdPaginas] = useState(1)

		const [indisponibilidade, setIndisponibilidade] = useState<
			OrdemServicoIndisponibilidade[]
		>([])

		const { getOrdensServicosIndisponibilidade } =
			useOrdemServicoIndisponibilidadeService()

		useEffect(() => {
			onCarregarIndisponibilidade()
		}, [])

		const onCarregarIndisponibilidade = async () => {
			try {
				setLoading(true)

				const { items, totalCount } =
					await getOrdensServicosIndisponibilidade(
						pagina * itensPorPagina,
						itensPorPagina,
						params.id
					)

				if (refreshing) {
					setIndisponibilidade(items)
				} else {
					setIndisponibilidade([...indisponibilidade, ...items])
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

		const onRefreshOrdensServicosIndisponibilidade = async () => {
			if (pagina !== 0) {
				setRefreshing(true)
				setQtdPaginas(0)
				setPagina(0)
			}
		}

		const onEndReachedOrdensServicosIndisponibilidade = async () => {
			if (!loading && pagina <= qtdPaginas) {
				setLoading(true)
				setPagina(pagina + 1)
			}
		}

		const onAdicionarIndisponibilidadeOrdemServico = async () => {}

		const onEditarIndisponibilidadeOrdemServico = async () => {}

		const onExcluirIndisponibilidadeOrdemServico = async () => {}

		return {
			loading,
			refreshing,
			data: {
				indisponibilidade,
			},
			handles: {
				onRefreshOrdensServicosIndisponibilidade,
				onEndReachedOrdensServicosIndisponibilidade,
				onAdicionarIndisponibilidadeOrdemServico,
				onEditarIndisponibilidadeOrdemServico,
				onExcluirIndisponibilidadeOrdemServico,
			},
		}
	}

export default useIndisponibilidadeOrdemServicoHook
