import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { OrdemServico } from '@models/OrdemServico'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface DetalhesOrdemServicoHookDataProps {
	loading: boolean
	ordemServico: OrdemServico | null
}

interface DetalhesOrdemServicoHandlesProps {}

export interface DetalhesOrdemServicoHookProps {
	data: DetalhesOrdemServicoHookDataProps
	handles: DetalhesOrdemServicoHandlesProps
}

type EquipmentRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'DetalhesOrdemServicoPage'
>

const useDetalhesOrdemServicoHook = (): DetalhesOrdemServicoHookProps => {
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

	return {
		data: {
			loading,
			ordemServico,
		},
		handles: {},
	}
}

export default useDetalhesOrdemServicoHook
