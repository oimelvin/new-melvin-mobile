import { Alert, View } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'
import { i18n } from '@languages/index'

interface ListaOrdemServicoHeaderProps {}

const ListaSolicitacaoServicoHeader: React.FC<ListaOrdemServicoHeaderProps> = () => (
	<>
	
		<MarginTop value={16} />
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Title>{i18n.t('workOrders.serviceRequest')}</Title>
			<IconButton
				provider="materialCommunityIcons"
				iconName="filter"
				onPress={() =>
					Alert.alert(
						'Filtrar solicitações de serviços',
						'Funcionalidade não implementada.'
					)
				}
			/>
		</View>
		<MarginTop value={16} />
	</>
)

export default ListaSolicitacaoServicoHeader
