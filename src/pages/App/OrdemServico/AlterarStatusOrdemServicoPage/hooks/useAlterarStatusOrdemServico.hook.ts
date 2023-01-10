import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface AlterarStatusOrdemServicoHandlesProps {
	onAprovarOrdemServico: () => Promise<void>
	onFinalizarOrdemServico: () => Promise<void>
	onReabrirOrdemServico: () => Promise<void>
	onCancelarOrdemServico: () => Promise<void>
}

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

		const onAprovarOrdemServico = async () => {}

		const onFinalizarOrdemServico = async () => {}

		const onReabrirOrdemServico = async () => {}

		const onCancelarOrdemServico = async () => {}

		return {
			handles: {
				onAprovarOrdemServico,
				onFinalizarOrdemServico,
				onReabrirOrdemServico,
				onCancelarOrdemServico,
			},
		}
	}

export default useAlterarStatusOrdemServicoHook
