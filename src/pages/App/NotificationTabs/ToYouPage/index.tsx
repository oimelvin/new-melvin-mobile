import React, { useEffect, useState } from 'react'
import { Alert, FlatList, RefreshControl, View } from 'react-native'

import StatusBar from '@components/StatusBar'
import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'
import { NotificacaoDto } from '@models/NotificacaoDto'
import useNotificacaoService from '@services/useNotificacao.hook'
import { i18n } from '@languages/index'
import useUser from '@contexts/hooks/useUser.hook'
import Loading from '@components/Loading'
import NotificationComponent from '../NotificationElement'

const ToYouPage: React.FC = () => {
	const { getNotificacoes } = useNotificacaoService();
	const { userId, getUser, setUserId, clearUserId } = useUser()
	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [notificacoesState, setNotificacoes] = useState<NotificacaoDto[]>([])

	const carregarNotificacoes = async () => {
		try {
			var teste: NotificacaoDto = {titulo: "teste", descricao: "Ordem: 3640 - Tag: UR01-BEN-ec15 - elevador de caçambas 15 - Título: TROCAR RETENTOR DO EIXO DE ENTRADA DO REDUTOR, favor dar prioridade.", id: "1", data: new Date(), lida: false, idIOS: "", idAndroid: "", idUsuarioNotificador: "", idUsuarioRecebedor: "", erro: ""}
			const notificacoes = await getNotificacoes(userId)

			setNotificacoes(notificacoes)
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
		carregarNotificacoes()
	}, [])

	const onRefreshNotificacoes = async () => {
		setRefreshing(false)
	}

	const onEndReachedNotificacoes = async () => {
		if (!loading) {
			setLoading(false)
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
		<View style={{ flex: 1 }}>
			<StatusBar />
			<FlatList<NotificacaoDto>
				style={{ paddingHorizontal: 16 }}
				data={notificacoesState}
				keyExtractor={({ id }) => id}
				overScrollMode="never"
				ListEmptyComponent={emptyComponent}
				ListFooterComponent={footerComponent}
				renderItem={({ item }) => (
					<NotificationComponent notificacao={item} />
				)}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefreshNotificacoes}
						tintColor={colors.cyan}
						colors={[colors.cyan]}
					/>
				}
				onEndReachedThreshold={0.1}
				onEndReached={onEndReachedNotificacoes}
			/>
		</View>
	)
}

export default ToYouPage
