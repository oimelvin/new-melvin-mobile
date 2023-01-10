import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { ApontamentosOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer, Text, Title } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import FAB from '@components/FAB'
import ApontamentoComponent from './components/ApontamentoComponent'

import useApontamentosOrdemServicoHook from './hooks/useApontamentosOrdemServico.hook'
import { i18n } from '@languages/index'
import { OrdemServicoApontamento } from '@models/OrdemServicoApontamento'

const ApontamentosOrdemServicoPage: React.FC = () => {
	const { loading, refreshing, data, handles } =
		useApontamentosOrdemServicoHook()

	if (loading) {
		return (
			<ApontamentosOrdemServicoPageContainer>
				<Loading />
			</ApontamentosOrdemServicoPageContainer>
		)
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
					{i18n.t('workOrderEntries.noEntriesFound')}
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

	const renderItem = ({
		item,
	}: ListRenderItemInfo<OrdemServicoApontamento>) => (
		<ApontamentoComponent
			key={item.id}
			apontamento={item}
			onEditarApontamento={handles.onEditarApontamentoOrdemServico}
			onExcluirApontamento={handles.onExcluirApontamentoOrdemServico}
		/>
	)

	const refreshControl = (
		<RefreshControl
			refreshing={refreshing}
			onRefresh={handles.onEndReachedOrdensServicosApontamentos}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<ApontamentosOrdemServicoPageContainer>
			<PageContainer>
				<Title color={colors.black}>
					{i18n.t('workOrderEntries.entries')}
				</Title>
				<MarginTop value={15} />
				<FlatList<OrdemServicoApontamento>
					style={{ paddingHorizontal: 16 }}
					data={data.apontamentos}
					ItemSeparatorComponent={() => <MarginTop value={16} />}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={renderItem}
					refreshControl={refreshControl}
					onEndReachedThreshold={0.1}
					onEndReached={
						handles.onEndReachedOrdensServicosApontamentos
					}
				/>
			</PageContainer>
			<FAB
				provider="materialIcons"
				iconName="add"
				onPress={handles.onAdicionarApontamentoOrdemServico}
			/>
		</ApontamentosOrdemServicoPageContainer>
	)
}

export default ApontamentosOrdemServicoPage
