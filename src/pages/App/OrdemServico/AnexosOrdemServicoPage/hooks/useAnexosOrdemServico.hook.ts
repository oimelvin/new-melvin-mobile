import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface AnexosOrdemServicoHookDataProps {}

interface AnexosOrdemServicoHandlesProps {}

export interface AnexosOrdemServicoHookProps {
	data: AnexosOrdemServicoHookDataProps
	handles: AnexosOrdemServicoHandlesProps
}

type AnexosOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AnexosOrdemServicoPage'
>

type AnexosOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AnexosOrdemServicoPage'
>

const useAnexosOrdemServicoHook = (): AnexosOrdemServicoHookProps => {
	const { navigate } = useNavigation<AnexosOrdemServicoNavigatorProp>()
	const { params } = useRoute<AnexosOrdemServicoRouteProp>()

	return {
		data: {},
		handles: {},
	}
}

export default useAnexosOrdemServicoHook
