import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { OrdemServico } from '@models/OrdemServico'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface DetalhesOrdemServicoHookDataProps {
	loading: boolean
	ordemServico: OrdemServico | null
}

interface DetalhesOrdemServicoHandlesProps {
	onEditOrdemServico: () => void
}

export interface DetalhesOrdemServicoHookProps {
	data: DetalhesOrdemServicoHookDataProps
	handles: DetalhesOrdemServicoHandlesProps
}

type EquipamentoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'DetalhesOrdemServicoPage'
>

type EquipmentRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'DetalhesOrdemServicoPage'
>

const useDetalhesOrdemServicoHook = (): DetalhesOrdemServicoHookProps => {
	const { navigate } = useNavigation<EquipamentoNavigatorProp>()
	const { params } = useRoute<EquipmentRouteProp>()

	const [loading, setLoading] = useState(false)
	const [ordemServico, setOrdemServico] = useState<OrdemServico | null>(null)

	const { getOrdemServico } = useOrdemServicoService()

	useEffect(() => {
		setLoading(true)
		onCarregarOrdemServico()
	}, [])

	const onCarregarOrdemServico = async () => {
		try {
			const ordemServicoApi = await getOrdemServico(params.id)

			setOrdemServico(ordemServicoApi)
		} catch (error) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setLoading(false)
		}
	}

	const onEditOrdemServico = () => {
		navigate('AdicionarOrdemServicoPage', {
			id: ordemServico?.id,
		})
	}

	return {
		data: {
			loading,
			ordemServico,
		},
		handles: {
			onEditOrdemServico,
		},
	}
}

export default useDetalhesOrdemServicoHook
