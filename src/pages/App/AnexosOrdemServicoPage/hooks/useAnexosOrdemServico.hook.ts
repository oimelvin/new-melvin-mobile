import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useState } from 'react'

interface AnexosOrdemServicoHookDataProps {
	loading: boolean
}

interface AnexosOrdemServicoHandlesProps {}

export interface AnexosOrdemServicoHookProps {
	data: AnexosOrdemServicoHookDataProps
	handles: AnexosOrdemServicoHandlesProps
}

type AnexosOrdemServicosNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AnexosOrdemServicoPage'
>

type AnexosOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AnexosOrdemServicoPage'
>

const useAnexosOrdemServicoHook = (): AnexosOrdemServicoHookProps => {
	const { navigate } = useNavigation<AnexosOrdemServicosNavigatorProp>()
	const { params } = useRoute<AnexosOrdemServicoRouteProp>()

	const [loading, setLoading] = useState(false)

	return {
		data: { loading },
		handles: {},
	}
}

export default useAnexosOrdemServicoHook
