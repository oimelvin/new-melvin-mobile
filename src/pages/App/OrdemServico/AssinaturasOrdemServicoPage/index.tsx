import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { AssinaturaOrdemServicoPageContainer } from './styles'
import { MarginTop, PageContainer, Text, Title } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import FAB from '@components/FAB'
import AssinaturaComponent from './components/AssinaturaComponent'

import useAssinaturaOrdemServicoHook from './hooks/useAssinaturasOrdemServico.hook'
import { i18n } from '@languages/index'
import { OrdemServicoAssinatura } from '@models/OrdemServicoAssinatura'

const AssinaturaOrdemServicoPage: React.FC = () => {
	const { loading, refreshing, data, handles } =
		useAssinaturaOrdemServicoHook()

	if (loading) {
		return (
			<AssinaturaOrdemServicoPageContainer>
				<Loading />
			</AssinaturaOrdemServicoPageContainer>
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
					{i18n.t('workOrderSignatures.noSignaturesFound')}
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
	}: ListRenderItemInfo<OrdemServicoAssinatura>) => (
		<AssinaturaComponent
			key={item.id}
			assinatura={item}
			onExcluirAssinatura={handles.onExcluirAssinaturasOrdemServico}
		/>
	)

	const refreshControl = (
		<RefreshControl
			refreshing={refreshing}
			onRefresh={handles.onEndReachedOrdensServicosAssinaturas}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<AssinaturaOrdemServicoPageContainer>
			<PageContainer>
				<Title color={colors.black}>
					{i18n.t('workOrderSignatures.signatures')}
				</Title>
				<MarginTop value={15} />
				<FlatList<OrdemServicoAssinatura>
					style={{ paddingHorizontal: 16 }}
					data={data.assinaturas}
					ItemSeparatorComponent={() => <MarginTop value={16} />}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={renderItem}
					refreshControl={refreshControl}
					onEndReachedThreshold={0.1}
					onEndReached={handles.onEndReachedOrdensServicosAssinaturas}
				/>
			</PageContainer>
			<FAB
				provider="materialIcons"
				iconName="add"
				onPress={handles.onAdicionarAssinaturasOrdemServico}
			/>
		</AssinaturaOrdemServicoPageContainer>
	)
}

export default AssinaturaOrdemServicoPage
