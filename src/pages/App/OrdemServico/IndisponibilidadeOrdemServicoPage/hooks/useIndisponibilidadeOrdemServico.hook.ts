import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface IndisponibilidadeOrdemServicoHandlesProps {}

export interface IndisponibilidadeOrdemServicoHookProps {
	handles: IndisponibilidadeOrdemServicoHandlesProps
}

type IndisponibilidadeOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'IndisponibilidadeOrdemServicoPage'
>

type IndisponibilidadeOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'IndisponibilidadeOrdemServicoPage'
>

const useIndisponibilidadeOrdemServicoHook =
	(): IndisponibilidadeOrdemServicoHookProps => {
		const { navigate } =
			useNavigation<IndisponibilidadeOrdemServicoNavigatorProp>()
		const { params } = useRoute<IndisponibilidadeOrdemServicoRouteProp>()

		return {
			handles: {},
		}
	}

export default useIndisponibilidadeOrdemServicoHook
