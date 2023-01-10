import { Dispatch, SetStateAction, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface HistoricoOrdemServicoHookDataProps {
	historico: string
}

interface HistoricoOrdemServicoHandlesProps {
	setHistorico: Dispatch<SetStateAction<string>>
	onSalvarHistorico: () => Promise<void>
}

export interface HistoricoOrdemServicoHookProps {
	loading: boolean
	saving: boolean
	data: HistoricoOrdemServicoHookDataProps
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

	const [loading, setLoading] = useState(false)
	const [saving, setSaving] = useState(false)
	const [historico, setHistorico] = useState('')

	const onSalvarHistorico = async () => {}

	return {
		loading,
		saving,
		data: {
			historico,
		},
		handles: {
			setHistorico,
			onSalvarHistorico,
		},
	}
}

export default useHistoricoOrdemServicoHook
