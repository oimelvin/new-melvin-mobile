import React from 'react'
import { FlatList, RefreshControl, View } from 'react-native'

import colors from '@styles/colors.style'
import { PageContainer, Text } from '@styles/global.style'
import { CarteiraServicosPageContainer } from './styles'
import Loading from '@components/Loading'
import OrdemServicoComponent from './components/OrdemServicoComponent'
import ListaOrdemServicoHeader from './components/ListaOrdemServicoHeader'

import { OrdemServico } from '@models/OrdemServico'

import { i18n } from '@languages/index'
import useCarteiraServicosHook from './hooks/useCarteiraServicos.hook'
import FAB from '@components/FAB'

const CarteiraServicosPage: React.FC = () => {
	const { data, handles } = useCarteiraServicosHook()

	const emptyComponent = () =>
		!data.loading ? (
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
		data.loading ? (
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
		<CarteiraServicosPageContainer>
			<PageContainer>
				<FlatList<OrdemServico>
					style={{ paddingHorizontal: 16 }}
					data={data.ordensServicos}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListHeaderComponent={() => (
						<ListaOrdemServicoHeader
							onFilterClick={handles.onPressFilter}
						/>
					)}
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={({ item }) => (
						<OrdemServicoComponent
							ordemServico={item}
							onPressOrdemServico={handles.onPressOrdemServico}
						/>
					)}
					refreshControl={
						<RefreshControl
							refreshing={data.refreshing}
							onRefresh={handles.onRefreshOrdensServicos}
							tintColor={colors.cyan}
							colors={[colors.cyan]}
						/>
					}
					onEndReachedThreshold={0.1}
					onEndReached={handles.onEndReachedOrdensServicos}
				/>
				<FAB
					provider="materialIcons"
					iconName="add"
					onPress={handles.onPressAdicionarOrdemServico}
				/>
			</PageContainer>
		</CarteiraServicosPageContainer>
	)
}

export default CarteiraServicosPage
