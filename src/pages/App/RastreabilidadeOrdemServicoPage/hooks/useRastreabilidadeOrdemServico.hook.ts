import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useState } from 'react'

interface RastreabilidadeOrdemServicoHookDataProps {
	loading: boolean
}

interface RastreabilidadeOrdemServicoHandlesProps {}

export interface RastreabilidadeOrdemServicoHookProps {
	data: RastreabilidadeOrdemServicoHookDataProps
	handles: RastreabilidadeOrdemServicoHandlesProps
}

type RastreabilidadeOrdemServicosNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'RastreabilidadeOrdemServicoPage'
>

type RastreabilidadeOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'RastreabilidadeOrdemServicoPage'
>

const useRastreabilidadeOrdemServicoHook =
	(): RastreabilidadeOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<RastreabilidadeOrdemServicosNavigatorProp>()
		const { params } = useRoute<RastreabilidadeOrdemServicoRouteProp>()

		const [loading, setLoading] = useState(false)

		return {
			data: { loading },
			handles: {},
		}
	}

export default useRastreabilidadeOrdemServicoHook
