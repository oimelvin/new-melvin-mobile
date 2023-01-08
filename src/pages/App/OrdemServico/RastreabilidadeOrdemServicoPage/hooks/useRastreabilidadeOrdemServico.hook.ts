import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface RastreabilidadeOrdemServicoHookDataProps {}

interface RastreabilidadeOrdemServicoHandlesProps {}

export interface RastreabilidadeOrdemServicoHookProps {
	data: RastreabilidadeOrdemServicoHookDataProps
	handles: RastreabilidadeOrdemServicoHandlesProps
}

type RastreabilidadeOrdemServicoNavigatorProp = NativeStackNavigationProp<
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
			useNavigation<RastreabilidadeOrdemServicoNavigatorProp>()
		const { params } = useRoute<RastreabilidadeOrdemServicoRouteProp>()

		return {
			data: {},
			handles: {},
		}
	}

export default useRastreabilidadeOrdemServicoHook
