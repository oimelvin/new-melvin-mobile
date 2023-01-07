import { View } from 'react-native'

import { Divider, MarginTop, Text, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'

import { i18n } from '@languages/index'
import useAuth from '@contexts/auth.context'
import colors from '@styles/colors.style'
import DatePicker from '@components/DatePicker'

interface ListaProgramacaoHeaderProps {
	onFilterClick(): void
}

const ListaProgramacaoHeader: React.FC<ListaProgramacaoHeaderProps> = ({
	onFilterClick,
}) => {
	const { user } = useAuth()

	return (
		<>
			<MarginTop value={16} />
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Title>{i18n.t('schedule.schedule')}</Title>
				<IconButton
					provider="materialCommunityIcons"
					iconName="filter"
					onPress={onFilterClick}
				/>
			</View>
			<Text>{user?.name}</Text>
			<MarginTop value={16} />
			<View>
				<DatePicker
					value={new Date()}
					onDateChange={() => {}}
					translucentBackground
				/>
			</View>
			<Divider color={colors.gray100} style={{ width: '100%' }} />
		</>
	)
}

export default ListaProgramacaoHeader
