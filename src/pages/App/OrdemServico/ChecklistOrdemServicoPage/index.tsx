import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { ChecklistOrdemServicoPageContainer } from './styles'
import useChecklistOrdemServicoHook from './hooks/useChecklistOrdemServico.hook'
import { Divider, MarginTop, PageContainer, Text } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import AcaoComponent from './components/AcaoComponent'
import Button from '@components/Button'

import { i18n } from '@languages/index'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'

export type ChecklistOrdemServicoPageParamList = {
	id: string
}
const ChecklistOrdemServicoPage: React.FC = () => {
	const { loading, refreshing, saving, data, handles } =
		useChecklistOrdemServicoHook()

	if (loading) {
		return (
			<ChecklistOrdemServicoPageContainer>
				<Loading />
			</ChecklistOrdemServicoPageContainer>
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
					{i18n.t('workOrderActions.checklist.noActionsFound')}
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

	const renderItem = ({ item }: ListRenderItemInfo<OrdemServicoAcoes>) => (
		<AcaoComponent key={item.id} acao={item} />
	)

	const refreshControl = (
		<RefreshControl
			refreshing={refreshing}
			onRefresh={handles.onEndReachedOrdensServicosAcoes}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<ChecklistOrdemServicoPageContainer>
			<PageContainer>
				<Button
					label={i18n.t(
						'workOrderActions.checklist.selectDefaultChecklist'
					)}
					disabled={saving}
				/>
				<MarginTop value={16} />
				<Button
					label={i18n.t(
						'workOrderActions.checklist.removeDefaultChecklist'
					)}
					color={colors.red}
					onPress={handles.onRemoverChecklistPadrao}
					disabled={true || saving}
				/>
				<Divider style={{ width: '100%' }} color={colors.gray300} />
				<Button
					label={i18n.t(
						'workOrderActions.checklist.addManualChecklist'
					)}
					disabled={saving}
				/>
				<MarginTop value={16} />
				<FlatList<OrdemServicoAcoes>
					style={{ paddingHorizontal: 16 }}
					data={data.acoes}
					ItemSeparatorComponent={() => <MarginTop value={16} />}
					keyExtractor={({ id }) => id}
					overScrollMode="never"
					ListEmptyComponent={emptyComponent}
					ListFooterComponent={footerComponent}
					renderItem={renderItem}
					refreshControl={refreshControl}
					onEndReachedThreshold={0.1}
					onEndReached={handles.onEndReachedOrdensServicosAcoes}
				/>
			</PageContainer>
		</ChecklistOrdemServicoPageContainer>
	)
}

export default ChecklistOrdemServicoPage
