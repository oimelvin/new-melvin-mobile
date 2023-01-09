import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface AlterarStatusOrdemServicoHandlesProps {}

export interface AlterarStatusOrdemServicoHookProps {
	handles: AlterarStatusOrdemServicoHandlesProps
}

type AlterarStatusOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AlterarStatusOrdemServicoPage'
>

type AlterarStatusOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AlterarStatusOrdemServicoPage'
>

const useAlterarStatusOrdemServicoHook =
	(): AlterarStatusOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<AlterarStatusOrdemServicoNavigatorProp>()
		const { params } = useRoute<AlterarStatusOrdemServicoRouteProp>()

		return {
			handles: {},
		}
	}

export default useAlterarStatusOrdemServicoHook
