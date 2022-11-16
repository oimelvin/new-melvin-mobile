import React, { useEffect } from 'react'
import { RouteProp, useIsFocused, useRoute } from '@react-navigation/native'
import { BottomTabNavigatorParamList } from '@routes/BottomTabNavigator'

import { SearchEquipmentContainer } from './styles'

import { MarginTop } from '@styles/global.style'

import SearchEquipment from './components/SearchEquipment'
import SearchEquipmentTitle from './components/SearchEquipmentTitle'
import CardEquipment from './components/CardEquipment'
import useAtivoService from '@services/useAtivoService.hook'
import useAtivo from './ativo.context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type EquipmentRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'EquipmentPage'
>

const EquipmentPage: React.FC = () => {
	const { params } = useRoute<EquipmentRouteProp>()

	const { getAtivoById } = useAtivoService()

	const { ativo, setAtivo } = useAtivo()

	const isFocused = useIsFocused()

	const carregarAtivo = async () => {
		if (params?.id) {
			const ativoApi = await getAtivoById(params?.id)
			setAtivo(ativoApi)
		}
	}

	useEffect(() => {
		if (isFocused) {
			carregarAtivo()
		}
	}, [isFocused])

	return (
		<>
			<SearchEquipmentContainer>
				<SearchEquipmentTitle />
				<MarginTop value={16} />
				<SearchEquipment />
				<MarginTop value={32} />
			</SearchEquipmentContainer>
			{ativo && <CardEquipment />}
		</>
	)
}

export default EquipmentPage
