import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import { AcoesOrdemServicoPageContainer } from './styles'
import useAcoesOrdemServicoHook from './hooks/useAcoesOrdemServico.hook'
import {
	Divider,
	MarginTop,
	PageContainer,
	Text,
	Title,
} from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import Button from '@components/Button'
import Input from '@components/Input'
import AcaoComponent from './components/AcaoComponent'

import { i18n } from '@languages/index'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'

const AcoesOrdemServicoPage: React.FC = () => {
	const { loading, refreshing, saving, data, handles } =
		useAcoesOrdemServicoHook()

	if (loading) {
		return (
			<AcoesOrdemServicoPageContainer>
				<Loading />
			</AcoesOrdemServicoPageContainer>
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
					{i18n.t('workOrderActions.noActionsFound')}
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
			onRefresh={handles.onRefreshOrdensServicosAcoes}
			tintColor={colors.cyan}
			colors={[colors.cyan]}
		/>
	)

	return (
		<AcoesOrdemServicoPageContainer>
			<PageContainer>
				<Input
					label={i18n.t('workOrderActions.guidance')}
					value={data.orientacao}
					onChangeText={value => handles.setOrientacao(value)}
					placeholder={i18n.t('workOrderActions.informAGuidance')}
					color={colors.black}
					numberOfLines={4}
					multiline
					translucentBackground
				/>
				<MarginTop value={15} />
				<Input
					label={i18n.t('workOrderActions.notes')}
					value={data.observacoes}
					onChangeText={value => handles.setObservacoes(value)}
					placeholder={i18n.t('workOrderActions.informANotes')}
					color={colors.black}
					numberOfLines={4}
					multiline
					translucentBackground
				/>
				<MarginTop value={15} />
				<Button onPress={handles.onSalvarAcoes} disabled={loading}>
					{i18n.t('workOrderActions.save')}
				</Button>
				<MarginTop value={15} />
				<Divider style={{ width: '100%' }} color={colors.gray100} />
				<Title>{i18n.t('workOrderActions.actions')}</Title>
				<MarginTop value={15} />
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
		</AcoesOrdemServicoPageContainer>
	)
}

export default AcoesOrdemServicoPage
