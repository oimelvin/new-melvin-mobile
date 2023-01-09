import React, { useEffect, useState } from 'react'
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
const ChecklistOrdemServicoPage: React.FC = ({
	route
}) => {
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
				<Button disabled={saving}>
					{i18n.t(
						'workOrderActions.checklist.selectDefaultChecklist'
					)}
				</Button>
				<MarginTop value={16} />
				<Button
					variant="outline"
					color={colors.red}
					textColor={colors.red}
					onPress={handles.onRemoverChecklistPadrao}
					disabled={true || saving}
				>
					{i18n.t(
						'workOrderActions.checklist.removeDefaultChecklist'
					)}
				</Button>
				<Divider style={{ width: '100%' }} color={colors.gray100} />
				<Button disabled={saving}>
					{i18n.t('workOrderActions.checklist.addManualChecklist')}
				</Button>
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
