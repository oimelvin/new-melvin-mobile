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
import Select, { SelectItemProps } from '@components/Select'
import useFiltroSolicitacaoServicosHook from './hooks'
import { CreateSolicitacaoServicoDto } from '@models/CreateSolicitacaoServico'

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const NovaSolicitacaoComponent: React.FC = (
	{ route, navigation }
) => {
	const { getSolicitacao } = useSolicitacaoServicoService()
	const itensPorPagina = 10
	const { data, handles } = useFiltroSolicitacaoServicosHook();
	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [solicitacoesServicos, setSolicitacoesServicos] = useState<SolicitacaoServico>()
	const [createSolicitacaoDto, setcreateSolicitacaoDto] = useState<CreateSolicitacaoServicoDto>()
	const canais = [
		{ id: 1, nome: 'Telefone' },
		{ id: 2, nome: 'Email' },
		{ id: 3, nome: 'Sistema' },
		{ id: 4, nome: 'Pessoalmente' },
	]

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
				placeholder='Solicitante'
				translucentBackground	
				color={colors.black}
				value={createSolicitacaoDto?.solicitante}
				onChangeText={value => handles.setPesquisa(value)}
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				items={canais.map(({ id, nome }) => ({
					value: id.toString(),
					label: nome,
				}))}
				selectedValue={data.filtros.selectedExecutante}
				onSelect={item => handles.setSelectedExecutante(item)}
				color={colors.black}
				placeholder='Canal'
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
				placeholder='Filial'
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
				placeholder='Setor'
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
				placeholder='Ativo'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label={i18n.t('filterServicePortfolio.executor')}
				color={colors.black}
				placeholder='Prioridade'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground items={[]} selectedValue={null} onSelect={function (item: SelectItemProps | null): void {
					throw new Error('Function not implemented.')
				} }			/>
			<Input
				placeholder='Solicitação'
				translucentBackground	
				color={colors.black}
				multiline={true}
				numberOfLines={4}
			/>
		</View>
	)
}

export default memo(NovaSolicitacaoComponent)
