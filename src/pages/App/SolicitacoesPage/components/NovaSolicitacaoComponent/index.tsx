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

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const NovaSolicitacaoComponent: React.FC = (
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
			paddingRight: 42
		}}>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
			/>
			<Input
				placeholderTextColor={colors.gray100}
				placeholder={i18n.t(
					'searchEquipmentManually.searchEquipment'
				)}
				selectionColor={colors.gray500}
				color={colors.white}
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
