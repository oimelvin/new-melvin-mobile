import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { OrdemServico } from '@models/OrdemServico'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'

import { i18n, moment } from '@languages/index'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { OrdemServicoStatus } from '@models/OrdemServicoStatus'

interface DetalhesOrdemServicoHookDataProps {
	loading: boolean
	ordemServico: OrdemServico | null
	statusOrdemServico: OrdemServicoStatus
}

interface DetalhesOrdemServicoHandlesProps {
	convertDate: (date: Date | undefined) => string
	calcularHomemHora: () => number
	onEditOrdemServico: () => void
	onPressAcoes: () => void
	onPressPlanejamento: () => void
	onPressControle: () => void
	onPressAnexos: () => void
	onPressRastreabilidade: () => void
}

export interface DetalhesOrdemServicoHookProps {
	data: DetalhesOrdemServicoHookDataProps
	handles: DetalhesOrdemServicoHandlesProps
}

type DetalhesOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AppStackNavigatorParamList,
	'DetalhesOrdemServicoPage'
>

type DetalhesOrdemServicoRouteProp = RouteProp<
	AppStackNavigatorParamList,
	'DetalhesOrdemServicoPage'
>

const useDetalhesOrdemServicoHook = (): DetalhesOrdemServicoHookProps => {
	const { navigate } = useNavigation<DetalhesOrdemServicoNavigatorProp>()
	const { params } = useRoute<DetalhesOrdemServicoRouteProp>()

	const [loading, setLoading] = useState(false)
	const [ordemServico, setOrdemServico] = useState<OrdemServico | null>(null)

	const { getOrdemServico } = useOrdemServicoService()

	useEffect(() => {
		setLoading(true)
		onCarregarOrdemServico()
	}, [])

	const statusOrdemServico = ordemServico?.status || 0

	const convertDate = (date: Date | undefined): string => {
		if (!date) {
			return i18n.t('common.noData')
		}

		return moment(date).format('L')
	}

	const calcularHomemHora = (): number => {
		const homem = ordemServico?.homem || 0
		const hora = ordemServico?.hora || 0

		return homem * hora
	}

	const onCarregarOrdemServico = async () => {
		try {
			const ordemServicoApi = await getOrdemServico(params.id)

			setOrdemServico(ordemServicoApi)
		} catch (error) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setLoading(false)
		}
	}

	const onEditOrdemServico = () => {
		navigate('AdicionarOrdemServicoPage', {
			id: ordemServico?.id,
		})
	}

	const onPressAcoes = () => {
		if (ordemServico) {
			console.log(ordemServico.id)
			navigate('AcoesOrdemServicoTopTabNavigator', {
				id: ordemServico.id,
			})
		}
	}

	const onPressPlanejamento = () => {
		if (ordemServico) {
			navigate('PlanejamentoOrdemServicoPage', {
				id: ordemServico.id,
			})
		}
	}

	const onPressControle = () => {
		if (ordemServico) {
			navigate('ControleOrdemServicoPage', {
				id: ordemServico.id,
			})
		}
	}

	const onPressAnexos = () => {
		if (ordemServico) {
			navigate('AnexosOrdemServicoPage', {
				id: ordemServico.id,
			})
		}
	}

	const onPressRastreabilidade = () => {
		if (ordemServico) {
			navigate('RastreabilidadeOrdemServicoPage', {
				id: ordemServico.id,
			})
		}
	}

	return {
		data: {
			loading,
			ordemServico,
			statusOrdemServico,
		},
		handles: {
			onEditOrdemServico,
			convertDate,
			calcularHomemHora,
			onPressAcoes,
			onPressPlanejamento,
			onPressControle,
			onPressAnexos,
			onPressRastreabilidade,
		},
	}
}

export default useDetalhesOrdemServicoHook
