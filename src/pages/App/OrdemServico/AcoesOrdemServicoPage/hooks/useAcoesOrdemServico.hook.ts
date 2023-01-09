import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AcoesOrdemServicoTopTabNavigatorParamList } from '@routes/AcoesOrdemServicoTopTabNavigator'
import { i18n } from '@languages/index'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'
import { Alert } from 'react-native'

interface AcoesOrdemServicoHookDataProps {
	orientacao: string
	observacoes: string
}

interface AcoesOrdemServicoHandlesProps {
	setOrientacao: Dispatch<SetStateAction<string>>
	setObservacoes: Dispatch<SetStateAction<string>>
	onSalvarAcoes: () => Promise<void>
}

export interface AcoesOrdemServicoHookProps {
	loading: boolean
	saving: boolean
	data: AcoesOrdemServicoHookDataProps
	handles: AcoesOrdemServicoHandlesProps
}

type AcoesOrdemServicoNavigatorProp = NativeStackNavigationProp<
	AcoesOrdemServicoTopTabNavigatorParamList,
	'AcoesOrdemServicoPage'
>

type AcoesOrdemServicoRouteProp = RouteProp<
	AcoesOrdemServicoTopTabNavigatorParamList,
	'AcoesOrdemServicoPage'
>

const useAcoesOrdemServicoHook = (): AcoesOrdemServicoHookProps => {
	const { navigate } = useNavigation<AcoesOrdemServicoNavigatorProp>()
	const { params } = useRoute<AcoesOrdemServicoRouteProp>()

	const [loading, setLoading] = useState(false)
	const [saving, setSaving] = useState(false)

	const [orientacao, setOrientacao] = useState('')
	const [observacoes, setObservacoes] = useState('')

	const { getOrdemServico, putObservacaoOrdemServico } =
		useOrdemServicoService()

	useEffect(() => {
		onCarregarOrdemServico()
	}, [])

	const onCarregarOrdemServico = async () => {
		try {
			setLoading(true)
			const ordemServicoApi = await getOrdemServico(params.id)

			setObservacoes(ordemServicoApi.observacao)
			setOrientacao(ordemServicoApi.orientacao)
		} catch (error) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setLoading(false)
		}
	}

	const onSalvarAcoes = async () => {
		try {
			setSaving(true)

			await putObservacaoOrdemServico(params.id, observacoes, orientacao)
		} catch (error) {
			Alert.alert(
				i18n.t('common.error'),
				i18n.t('common.anErrorHasOccuredPleaseTryAgain')
			)
		} finally {
			setSaving(false)
		}
	}

	return {
		loading,
		saving,
		data: { orientacao, observacoes },
		handles: {
			setOrientacao,
			setObservacoes,
			onSalvarAcoes,
		},
	}
}

export default useAcoesOrdemServicoHook
