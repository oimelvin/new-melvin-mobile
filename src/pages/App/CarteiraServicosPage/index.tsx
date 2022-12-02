import React, { useEffect, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

import colors from '@styles/colors.style'
import { MarginTop, ScrollView, Title } from '@styles/global.style'
import { i18n } from '@languages/index'
import OrdemServicoComponent from './components/OrdemServicoComponent'
import IconButton from '@components/IconButton'
import useOrdemServicoService from '@services/useOrdemServicoService.hook'
import { OrdemServico } from '@models/OrdemServico'

type CarteiraServicosPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'CarteiraServicosPage'
>

const CarteiraServicosPage: React.FC = () => {
	const { navigate } = useNavigation<CarteiraServicosPageProp>()

	const { getOrdensServicos } = useOrdemServicoService()

	const [ordensServicos, setOrdensServicos] = useState<OrdemServico[] | null>(
		null
	)

	useEffect(() => {
		const carregarOrdensServicos = async () => {
			const ordensServicosApi = await getOrdensServicos(1, 10)
			setOrdensServicos(ordensServicosApi)
		}

		carregarOrdensServicos()
	}, [])

	return (
		<View style={{ flex: 1, backgroundColor: colors.white }}>
			<MarginTop value={16} />
			<View
				style={{
					paddingHorizontal: 16,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Title>Carteira de serviços</Title>
				<IconButton
					provider="materialCommunityIcons"
					iconName="filter"
					onPress={() =>
						Alert.alert(
							'Filtrar carteira de serviços',
							'Funcionalidade não implementada.'
						)
					}
				/>
			</View>
			<MarginTop value={16} />
			<FlatList<OrdemServico>
				style={{ paddingHorizontal: 16 }}
				data={ordensServicos}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => (
					<OrdemServicoComponent ordemServico={item} />
				)}
			/>
		</View>
	)
}

export default CarteiraServicosPage
