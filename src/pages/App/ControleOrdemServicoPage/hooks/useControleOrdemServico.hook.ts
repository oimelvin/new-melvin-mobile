import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useState } from 'react'

interface ControleOrdemServicoHookDataProps {
	loading: boolean
}

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

	const [loading, setLoading] = useState(false)

	return {
		data: { loading },
		handles: {},
	}
}

export default useControleOrdemServicoHook
