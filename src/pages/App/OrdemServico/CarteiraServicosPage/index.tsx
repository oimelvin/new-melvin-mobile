import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { PageContainer, Text } from '@styles/global.style'
import { CarteiraServicosPageContainer } from './styles'
import Loading from '@components/Loading'

import ListaOrdemServicoHeader from './components/ListaOrdemServicoHeader'
import { OrdemServico } from '@models/OrdemServico'

import { i18n } from '@languages/index'
import useCarteiraServicosHook from './hooks/useCarteiraServicos.hook'
import FAB from '@components/FAB'
import colors from '@styles/colors.style'
import OrdemServicoComponent from './components/OrdemServicoComponent'

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

	const listHeaderComponent = () => (
		<ListaOrdemServicoHeader onFilterClick={handles.onPressFilter} />
	)

	const renderItem = ({ item }: ListRenderItemInfo<OrdemServico>) => (
		<OrdemServicoComponent
			ordemServico={item}
			onPressOrdemServico={handles.onPressOrdemServico}
		/>
	)

	const refreshControl = (
		<RefreshControl
			refreshing={data.refreshing}
			onRefresh={handles.onRefreshOrdensServicos}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<CarteiraServicosPageContainer>
			<PageContainer>
				<FlatList<OrdemServico>
					style={{ paddingHorizontal: 16 }}
					data={data.ordensServicos}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListHeaderComponent={listHeaderComponent}
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={renderItem}
					refreshControl={refreshControl}
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
