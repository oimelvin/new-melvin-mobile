import { View } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'
import { i18n } from '@languages/index'

interface ListaOrdemServicoHeaderProps {
	onFilterClick(): void
}

const ListaOrdemServicoHeader: React.FC<ListaOrdemServicoHeaderProps> = ({
	onFilterClick,
}) => (
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
				onPress={onFilterClick}
			/>
		</View>
		<MarginTop value={16} />
	</>
)

export default ListaOrdemServicoHeader
