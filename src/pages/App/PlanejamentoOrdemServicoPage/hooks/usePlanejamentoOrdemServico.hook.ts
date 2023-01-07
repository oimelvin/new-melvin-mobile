import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useState } from 'react'

interface PlanejamentoOrdemServicoHookDataProps {
	loading: boolean
}

interface PlanejamentoOrdemServicoHandlesProps {}

export interface PlanejamentoOrdemServicoHookProps {
	data: PlanejamentoOrdemServicoHookDataProps
	handles: PlanejamentoOrdemServicoHandlesProps
}

type PlanejamentoOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'PlanejamentoOrdemServicoPage'
>

type PlanejamentoOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'PlanejamentoOrdemServicoPage'
>

const usePlanejamentoOrdemServicoHook =
	(): PlanejamentoOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<PlanejamentoOrdemServicoNavigatorProp>()
		const { params } = useRoute<PlanejamentoOrdemServicoRouteProp>()

		const [loading, setLoading] = useState(false)

		return {
			data: { loading },
			handles: {},
		}
	}

export default usePlanejamentoOrdemServicoHook
