import { memo, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Avatar, FAB, ProgressBar } from 'react-native-paper'

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
import { CanalSolicitacao } from '@models/CanalSolicitacao'

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const NovaSolicitacaoComponent: React.FC = (
	{ route, navigation }
) => {
	const { getSolicitacao, createSolicitacao } = useSolicitacaoServicoService()
	const { data, handles } = useFiltroSolicitacaoServicosHook();
	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [solicitacoesServicos, setSolicitacoesServicos] = useState<SolicitacaoServico>()
	const [createSolicitacaoDto, setcreateSolicitacaoDto] = useState<CreateSolicitacaoServicoDto>({})
	const canais = [
		{ id: 1, nome: 'Telefone' },
		{ id: 2, nome: 'Email' },
		{ id: 3, nome: 'Sistema' },
		{ id: 4, nome: 'Pessoalmente' },
	]

	const canalPorId = (id) =>{
		return canais.filter(x => x.id == id);
	}
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


	const salvarSolicitacao = async () => {
		try {
			createSolicitacaoDto.dataAbertura = new Date();
			createSolicitacaoDto.idEquipamento = data.filtros.selectedEquipamento ?? ""
			createSolicitacaoDto.idFilial = data.filtros.selectedFilial ?? "";
			createSolicitacaoDto.idSetor = data.filtros.selectedSetor ?? "";
			createSolicitacaoDto.idPrioridade = data.filtros.selectedPrioridade ?? "";
			createSolicitacaoDto.horaAbertura = new Date().toTimeString().split(' ')[0];
			createSolicitacaoDto.condicaoEquipamento = true
			console.log(createSolicitacaoDto);
			await createSolicitacao(createSolicitacaoDto);
			
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
				onChangeText={value => {
					createSolicitacaoDto.solicitante = value
					setcreateSolicitacaoDto(createSolicitacaoDto)
				} }
			/>
			<Select
				label='Canal'
				items={canais.map(({ id, nome }) => ({
					value: id.toString(),
					label: nome,
				}))}
				selectedValue={data.filtros.selectedCanal}
				onSelect={value => { 
					console.log(value)
					createSolicitacaoDto.canal = Number(value)
					setcreateSolicitacaoDto(createSolicitacaoDto)
					handles.setSelectedCanal(value)
				} }
				color={colors.black}
				placeholder='Canal'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label='Filial'
				items={data.filiais.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.filtros.selectedFilial}
				onSelect={item => handles.setSelectedFilial(item)}
				color={colors.black}
				placeholder='Filial'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label='Setor'
				items={data.setores.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.filtros.selectedSetor}
				onSelect={item => handles.setSelectedSetor(item)}
				color={colors.black}
				placeholder='Setor'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground
			/>
			<Select
				label='Ativo'
				items={data.equipamentos.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.filtros.selectedEquipamento}
				onSelect={item => handles.setSelectedEquipamento(item)}
				color={colors.black}
				placeholder='Ativo'
				emptyListText='Não foi possível encontrar equipamentos'
				translucentBackground
			/>
			<Select
				label='Prioridade'
				color={colors.black}
				placeholder='Prioridade'
				emptyListText={i18n.t(
					'filterServicePortfolio.noExecutorsFound'
				)}
				translucentBackground items={data.prioridades.map(({ id, descricao }) => ({
					value: id,
					label: descricao,
				}))}
				selectedValue={data.filtros.selectedPrioridade}
				onSelect={item => handles.setSelectedPrioridade(item)}		/>
			<Input
				placeholder='Solicitação'
				translucentBackground	
				color={colors.black}
				multiline={true}
				numberOfLines={4}
				value={createSolicitacaoDto?.solicitacao}
				onChangeText={value => {
					createSolicitacaoDto.solicitacao = value
					setcreateSolicitacaoDto(createSolicitacaoDto)
				} }
			/>
			<FAB
				icon={{uri: 'https://cdn-icons-png.flaticon.com/512/32/32339.png'}}
				style={{position: 'absolute',
				margin: 16,
				right: 0,
				bottom: 0}}
				onPress={() => salvarSolicitacao()}
			/>
		</View>
	)
}

export default memo(NovaSolicitacaoComponent)
