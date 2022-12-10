import { Alert, View } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'
import { i18n } from '@languages/index'

interface ListaOrdemServicoHeaderProps {}

const ListaOrdemServicoHeader: React.FC<ListaOrdemServicoHeaderProps> = () => (
	<>
		<MarginTop value={16} />
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Title>{i18n.t('workOrders.servicesPortfolio')}</Title>
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
	</>
)

export default ListaOrdemServicoHeader
