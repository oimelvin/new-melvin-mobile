import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface PlanejamentoOrdemServicoHookDataProps {}

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

		return {
			data: {},
			handles: {},
		}
	}

export default usePlanejamentoOrdemServicoHook
