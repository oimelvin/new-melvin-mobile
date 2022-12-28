import { memo, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Avatar, ProgressBar } from 'react-native-paper'

import Icon from '@components/Icon'
import colors from '@styles/colors.style'
import {
	ButtonOpacity,
	Container,
	MarginRight,
	MarginTop,
	Text,
} from '@styles/global.style'
import { SolicitacaoServico } from '@models/SolicitacaoServico'
import useSolicitacaoServicoService from '@services/useSolicitacaoServicoService.hook'
import { i18n } from '@languages/index'
import SolicitacaoDetalheHeaderComponent from '../SolicitacaoDetalheHeaderComponent'
import Input from '@components/Input'
import SolicitacaoAcoesComponent from '../SolicitacaoAcoesComponent'
import Select from '@components/Select'

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const NovaSolicitacaoComponent: React.FC = (
	{ route, navigation }
) => {
	const { getSolicitacao } = useSolicitacaoServicoService()
	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [solicitacoesServicos, setSolicitacoesServicos] = useState<SolicitacaoServico>()

	const carregarSolicitacoesServicos = async () => {
		try {
			if(route.params?.id){
				const solicitacao = await getSolicitacao(route.params?.id)
				console.log(solicitacao)
				setSolicitacoesServicos(solicitacao)
			}
			
			
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
		carregarSolicitacoesServicos()
	}, [])

	return (
		<View
		style={{
			backgroundColor: 'white',
			paddingLeft: 42,
			paddingRight: 42
		}}>
			<SolicitacaoAcoesComponent></SolicitacaoAcoesComponent>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder='Solicitante'
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				items={data.executantes.map(({ id, nome }) => ({
					value: id,
					label: nome,
				}))}
				selectedValue={data.filtros.selectedExecutante}
				onSelect={item => handles.setSelectedExecutante(item)}
				color={colors.black}
				placeholder={i18n.t(
					'filterServicePortfolio.selectAnExecutor'
				)}
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				items={data.executantes.map(({ id, nome }) => ({
					value: id,
					label: nome,
				}))}
				selectedValue={data.filtros.selectedExecutante}
				onSelect={item => handles.setSelectedExecutante(item)}
				color={colors.black}
				placeholder={i18n.t(
					'filterServicePortfolio.selectAnExecutor'
				)}
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				items={data.executantes.map(({ id, nome }) => ({
					value: id,
					label: nome,
				}))}
				selectedValue={data.filtros.selectedExecutante}
				onSelect={item => handles.setSelectedExecutante(item)}
				color={colors.black}
				placeholder={i18n.t(
					'filterServicePortfolio.selectAnExecutor'
				)}
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				items={data.executantes.map(({ id, nome }) => ({
					value: id,
					label: nome,
				}))}
				selectedValue={data.filtros.selectedExecutante}
				onSelect={item => handles.setSelectedExecutante(item)}
				color={colors.black}
				placeholder={i18n.t(
					'filterServicePortfolio.selectAnExecutor'
				)}
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				color={colors.black}
				placeholder={i18n.t(
					'filterServicePortfolio.selectAnExecutor'
				)}
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
		</View>
	)
}

export default memo(NovaSolicitacaoComponent)
