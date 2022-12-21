import React, { useEffect, useState } from 'react'
import { Alert, FlatList, RefreshControl, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'
import { i18n } from '@languages/index'
import SolicitacaoServicoComponent from './components/SolicitacaoComponent'
import Loading from '@components/Loading'
import ListaSolicitacaoServicoHeader from './components/ListaSolicitacaoServicoHeader'
import { SolicitacaoServico } from '@models/SolicitacaoServico'
import useSolicitacaoServicoService from '@services/useSolicitacaoServicoService.hook'

type CarteiraServicosPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'CarteiraServicosPage'
>

const SolicitacaoServicosPage: React.FC = () => {
	const { navigate } = useNavigation<CarteiraServicosPageProp>()

	const { getSolicitacoes } = useSolicitacaoServicoService()
	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [pagina, setPagina] = useState(0)
	const [qtdPaginas, setQtdPaginas] = useState(1)
	const [solicitacoesServicos, setSolicitacoesServicos] = useState<SolicitacaoServico[]>([])

	const carregarSolicitacoesServicos = async () => {
		try {
			const { items, totalCount } = await getSolicitacoes(
				pagina * itensPorPagina,
				itensPorPagina, undefined, undefined, undefined
			)

			if (refreshing) {
				setSolicitacoesServicos(items)
			} else {
				setSolicitacoesServicos([...solicitacoesServicos, ...items])
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

	useEffect(() => {
		carregarSolicitacoesServicos()
	}, [pagina])

	const onRefreshSolicitacoaoServicos = async () => {
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

	const emptyComponent = () =>
		!loading ? (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text align="center">
					{i18n.t('workOrders.noWorkOrderFound')}
				</Text>
			</View>
		) : null

	const footerComponent = () =>
		loading ? (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 16,
				}}
			>
				<Loading />
			</View>
		) : null

	return (
		<View style={{ flex: 1, backgroundColor: colors.white }}>
			<FlatList<SolicitacaoServico>
				style={{ paddingHorizontal: 16 }}
				data={solicitacoesServicos}
				keyExtractor={({ id }) => id}
				overScrollMode="never"
				ListHeaderComponent={() => <ListaSolicitacaoServicoHeader />}
				ListEmptyComponent={emptyComponent}
				ListFooterComponent={footerComponent}
				renderItem={({ item }) => (
					<SolicitacaoServicoComponent solicitacao={item} />
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefreshSolicitacoaoServicos}
						tintColor={colors.cyan}
						colors={[colors.cyan]}
					/>
				}
				onEndReachedThreshold={0.1}
				onEndReached={onEndReachedOrdensServicos}
			/>
		</View>
	)
}

export default SolicitacaoServicosPage
