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

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const SolicitacaoDetalheComponent: React.FC = ({ route, navigation }) => {
	const { id } = route.params
	const { getSolicitacao } = useSolicitacaoServicoService()
	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [solicitacoesServicos, setSolicitacoesServicos] =
		useState<SolicitacaoServico>()

	const carregarSolicitacoesServicos = async () => {
		try {
			const solicitacao = await getSolicitacao(id)
			console.log(solicitacao)
			setSolicitacoesServicos(solicitacao)
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
				paddingRight: 42,
			}}
		>
			<SolicitacaoDetalheHeaderComponent></SolicitacaoDetalheHeaderComponent>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: 16,
				}}
			>
				<View>
					<Text>Nº SS</Text>
					<Text>{solicitacoesServicos?.codigo}</Text>
				</View>
				<View>
					<Text>Data</Text>
					<Text>18/01/2022</Text>
				</View>
				<View>
					<Text>Canal</Text>
					<Text>3219</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: 20,
				}}
			>
				<View>
					<Text>Solicitante</Text>
					<Text>{solicitacoesServicos?.solicitante}</Text>
				</View>
				<View>
					<Text>Status</Text>
					<Text>{solicitacoesServicos?.statusTexto}</Text>
				</View>
				<View>
					<Text>Prioridade</Text>
					<Text>3219</Text>
				</View>
			</View>
			<View
				style={{
					marginTop: 20,
				}}
			>
				<Text>Ativo</Text>
				<Text>O.S. Criada</Text>
			</View>
			<View
				style={{
					marginTop: 20,
				}}
			>
				<Text>Solicitação</Text>
				<Text>O.S. Criada</Text>
			</View>
		</View>
	)
}

export default memo(SolicitacaoDetalheComponent)
