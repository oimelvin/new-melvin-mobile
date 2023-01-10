import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { IndisponibilidadeOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer, Text, Title } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import FAB from '@components/FAB'
import IndisponibilidadeComponent from './components/IndisponibilidadeComponent'

import useIndisponibilidadeOrdemServicoHook from './hooks/useIndisponibilidadeOrdemServico.hook'
import { i18n } from '@languages/index'
import { OrdemServicoIndisponibilidade } from '@models/OrdemServicoIndisponibilidade'

const IndisponibilidadeOrdemServicoPage: React.FC = () => {
	const { loading, refreshing, data, handles } =
		useIndisponibilidadeOrdemServicoHook()

	if (loading) {
		return (
			<IndisponibilidadeOrdemServicoPageContainer>
				<Loading />
			</IndisponibilidadeOrdemServicoPageContainer>
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
					{i18n.t('workOrderUnavailability.noUnavailabilityFound')}
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
	}: ListRenderItemInfo<OrdemServicoIndisponibilidade>) => (
		<IndisponibilidadeComponent
			key={item.id}
			indisponibilidade={item}
			onEditarIndisponibilidade={
				handles.onEditarIndisponibilidadeOrdemServico
			}
			onExcluirIndisponibilidade={
				handles.onExcluirIndisponibilidadeOrdemServico
			}
		/>
	)

	const refreshControl = (
		<RefreshControl
			refreshing={refreshing}
			onRefresh={handles.onEndReachedOrdensServicosIndisponibilidade}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<IndisponibilidadeOrdemServicoPageContainer>
			<PageContainer>
				<Title color={colors.black}>
					{i18n.t('workOrderUnavailability.unavailability')}
				</Title>
				<MarginTop value={15} />
				<FlatList<OrdemServicoIndisponibilidade>
					style={{ paddingHorizontal: 16 }}
					data={data.indisponibilidade}
					ItemSeparatorComponent={() => <MarginTop value={16} />}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={renderItem}
					refreshControl={refreshControl}
					onEndReachedThreshold={0.1}
					onEndReached={
						handles.onEndReachedOrdensServicosIndisponibilidade
					}
				/>
			</PageContainer>
			<FAB
				provider="materialIcons"
				iconName="add"
				onPress={handles.onAdicionarIndisponibilidadeOrdemServico}
			/>
		</IndisponibilidadeOrdemServicoPageContainer>
	)
}

export default IndisponibilidadeOrdemServicoPage
