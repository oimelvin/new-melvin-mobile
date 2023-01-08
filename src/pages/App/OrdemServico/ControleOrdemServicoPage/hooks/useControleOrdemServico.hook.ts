import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface ControleOrdemServicoHookDataProps {}

interface ControleOrdemServicoHandlesProps {}

export interface ControleOrdemServicoHookProps {
	data: ControleOrdemServicoHookDataProps
	handles: ControleOrdemServicoHandlesProps
}

type ControleOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'ControleOrdemServicoPage'
>

type ControleOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'ControleOrdemServicoPage'
>

const useControleOrdemServicoHook = (): ControleOrdemServicoHookProps => {
	const { navigate } = useNavigation<ControleOrdemServicoNavigatorProp>()
	const { params } = useRoute<ControleOrdemServicoRouteProp>()

	return {
		data: {},
		handles: {},
	}
}

export default useControleOrdemServicoHook
