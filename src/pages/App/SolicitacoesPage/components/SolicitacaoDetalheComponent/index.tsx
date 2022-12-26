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

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const SolicitacaoDetalheComponent: React.FC = (
	{ route, navigation }
) => {
	const { id } = route.params;
	const { getSolicitacao } = useSolicitacaoServicoService()
	const itensPorPagina = 10

	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [solicitacoesServicos, setSolicitacoesServicos] = useState<SolicitacaoServico>()

	const carregarSolicitacoesServicos = async () => {
		try {
			const solicitacao = await getSolicitacao(id)

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
			backgroundColor: 'white'
		}}>
			<View>
				<View>
					<Text>Nº SS</Text>
					<Text>{id}</Text>
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
			<View>
				<View>
					<Text>Solicitante</Text>
					<Text>Igor</Text>
				</View>
				<View>
					<Text>Status</Text>
					<Text>O.S. Criada</Text>
				</View>
				<View>
					<Text>Prioridade</Text>
					<Text>3219</Text>
				</View>
			</View>
		</View>
	)
}

export default memo(SolicitacaoDetalheComponent)
