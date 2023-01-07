import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { i18n } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useState } from 'react'

interface AcoesOrdemServicoHookDataProps {
	loading: boolean
}

interface AcoesOrdemServicoHandlesProps {}

export interface AcoesOrdemServicoHookProps {
	data: AcoesOrdemServicoHookDataProps
	handles: AcoesOrdemServicoHandlesProps
}

type AcoesOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'AcoesOrdemServicoPage'
>

type AcoesOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'AcoesOrdemServicoPage'
>

const useAcoesOrdemServicoHook = (): AcoesOrdemServicoHookProps => {
	const { navigate } = useNavigation<AcoesOrdemServicoNavigatorProp>()
	const { params } = useRoute<AcoesOrdemServicoRouteProp>()

	const [loading, setLoading] = useState(false)

	return {
		data: { loading },
		handles: {},
	}
}

export default useAcoesOrdemServicoHook
