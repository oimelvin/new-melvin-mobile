import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { OrdemServico } from '@models/OrdemServico'
import useOrdemServicoProgramacaoService from '@services/useOrdemServicoProgramacaoService.hook'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import useAuth from '@contexts/auth.context'

interface ProgramacaoHookDataProps {
	selectedDate: Date | undefined
	loading: boolean
	refreshing: boolean
	ordensServicos: OrdemServico[]
}

interface ProgramacaoHandlesProps {
	setSelectedDate: Dispatch<SetStateAction<Date | undefined>>
	onCarregarOrdensServicos(): void
	onRefreshOrdensServicos(): void
	onPressFilter(): void
	onPressOrdemServico(id: string): void
}

export interface ProgramacaoHookProps {
	data: ProgramacaoHookDataProps
	handles: ProgramacaoHandlesProps
}

type ProgramacaoPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'ProgramacaoPage'
>

const useProgramacaoHook = (): ProgramacaoHookProps => {
	const { navigate } = useNavigation<ProgramacaoPageProp>()

	const { user } = useAuth()

	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	)
	const [loading, setLoading] = useState(false)
	const [refreshing, setRefreshing] = useState(false)
	const [ordensServicos, setOrdensServicos] = useState<OrdemServico[]>([])

	const { getOrdensServicosProgramacao } = useOrdemServicoProgramacaoService()

	useEffect(() => {
		setLoading(true)
		onCarregarOrdensServicos()
	}, [selectedDate])

	const onCarregarOrdensServicos = async () => {
		try {
			const { items } = await getOrdensServicosProgramacao(selectedDate, [
				user!.idExecutante,
			])

			if (refreshing) {
				setOrdensServicos(items)
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

	const onRefreshOrdensServicos = async () => {
		setRefreshing(true)
		onCarregarOrdensServicos()
	}

	const onPressFilter = async () => {
		navigate('FiltroProgramacaoPage')
	}

	const onPressOrdemServico = async (id: string) => {
		navigate('DetalhesOrdemServicoPage', {
			id,
		})
	}

	return {
		data: {
			selectedDate,
			loading,
			ordensServicos,
			refreshing,
		},
		handles: {
			setSelectedDate,
			onCarregarOrdensServicos,
			onRefreshOrdensServicos,
			onPressFilter,
			onPressOrdemServico,
		},
	}
}

export default useProgramacaoHook
