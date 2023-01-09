import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface AssinaturasOrdemServicoHandlesProps {}

export interface AssinaturasOrdemServicoHookProps {
	handles: AssinaturasOrdemServicoHandlesProps
}

type AssinaturasOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AssinaturasOrdemServicoPage'
>

type AssinaturasOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AssinaturasOrdemServicoPage'
>

const useAssinaturasOrdemServicoHook = (): AssinaturasOrdemServicoHookProps => {
	const { navigate } = useNavigation<AssinaturasOrdemServicoNavigatorProp>()
	const { params } = useRoute<AssinaturasOrdemServicoRouteProp>()

	return {
		handles: {},
	}
}

export default useAssinaturasOrdemServicoHook
