import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

interface ControleOrdemServicoHandlesProps {
	onPressApontamento: () => void
	onPressIndisponibilidade: () => void
	onPressAssinaturas: () => void
	onPressHistorico: () => void
	onPressAlterarStatusOrdemServico: () => void
}

export interface ControleOrdemServicoHookProps {
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

	const onPressApontamento = () => {
		navigate('ApontamentosOrdemServicoPage', {
			id: params.id,
		})
	}

	const onPressIndisponibilidade = () => {
		navigate('IndisponibilidadeOrdemServicoPage', {
			id: params.id,
		})
	}

	const onPressAssinaturas = () => {
		navigate('AssinaturasOrdemServicoPage', {
			id: params.id,
		})
	}

	const onPressHistorico = () => {
		navigate('HistoricoOrdemServicoPage', {
			id: params.id,
		})
	}

	const onPressAlterarStatusOrdemServico = () => {
		navigate('AlterarStatusOrdemServicoPage', {
			id: params.id,
		})
	}

	return {
		handles: {
			onPressApontamento,
			onPressIndisponibilidade,
			onPressAssinaturas,
			onPressHistorico,
			onPressAlterarStatusOrdemServico,
		},
	}
}

export default useControleOrdemServicoHook
