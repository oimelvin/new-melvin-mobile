import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface ApontamentosOrdemServicoHandlesProps {}

export interface ApontamentosOrdemServicoHookProps {
	handles: ApontamentosOrdemServicoHandlesProps
}

type ApontamentosOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'ApontamentosOrdemServicoPage'
>

type ApontamentosOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'ApontamentosOrdemServicoPage'
>

const useApontamentosOrdemServicoHook =
	(): ApontamentosOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<ApontamentosOrdemServicoNavigatorProp>()
		const { params } = useRoute<ApontamentosOrdemServicoRouteProp>()

		return {
			handles: {},
		}
	}

export default useApontamentosOrdemServicoHook
