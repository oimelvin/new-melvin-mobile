import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface HistoricoOrdemServicoHandlesProps {}

export interface HistoricoOrdemServicoHookProps {
	handles: HistoricoOrdemServicoHandlesProps
}

type HistoricoOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'HistoricoOrdemServicoPage'
>

type HistoricoOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'HistoricoOrdemServicoPage'
>

const useHistoricoOrdemServicoHook = (): HistoricoOrdemServicoHookProps => {
	const { navigate } = useNavigation<HistoricoOrdemServicoNavigatorProp>()
	const { params } = useRoute<HistoricoOrdemServicoRouteProp>()

	return {
		handles: {},
	}
}

export default useHistoricoOrdemServicoHook
