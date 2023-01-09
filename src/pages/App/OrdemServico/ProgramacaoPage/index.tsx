import React from 'react'
import {
	FlatList,
	ListRenderItemInfo,
	RefreshControl,
	View,
} from 'react-native'

import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'
import { ProgramacaoPageContainer } from './styles'
import Loading from '@components/Loading'
import OrdemServicoComponent from './components/OrdemServicoComponent'
import ListaProgramacaoHeader from './components/ListaProgramacaoHeader'

import { OrdemServico } from '@models/OrdemServico'

import { i18n, moment } from '@languages/index'
import useProgramacaoHook from './hooks/useProgramacao.hook'

const ProgramacaoPage: React.FC = () => {
	const { data, handles } = useProgramacaoHook()

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
					{i18n.t('schedule.noWorkOrderFound')}
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
		<ListaProgramacaoHeader
			onFilterClick={handles.onPressFilter}
			selectedDate={data.selectedDate}
			onChangeDate={date => handles.setSelectedDate(date)}
			onPreviousDate={() =>
				handles.setSelectedDate(
					moment(data.selectedDate).add(-1, 'days').toDate()
				)
			}
			onNextDate={() =>
				handles.setSelectedDate(
					moment(data.selectedDate).add(1, 'days').toDate()
				)
			}
		/>
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
		<ProgramacaoPageContainer>
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
			/>
		</ProgramacaoPageContainer>
	)
}

export default ProgramacaoPage
