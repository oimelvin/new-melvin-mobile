import { View } from 'react-native'

import { MarginTop, Text, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'

import { i18n } from '@languages/index'
import useAuth from '@contexts/auth.context'
import DatePreviousNext from '../DatePreviousNext'

interface ListaProgramacaoHeaderProps {
	onFilterClick: () => void
	selectedDate: Date | undefined
	onChangeDate: (date: Date | undefined) => void
	onPreviousDate: () => void
	onNextDate: () => void
}

const ListaProgramacaoHeader: React.FC<ListaProgramacaoHeaderProps> = ({
	onFilterClick,
	selectedDate,
	onChangeDate,
	onPreviousDate,
	onNextDate,
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
			<Text>{`${i18n.t('schedule.executor')} ${user?.name}`}</Text>
			<MarginTop value={16} />
			<DatePreviousNext
				selectedDate={selectedDate}
				onChangeDate={onChangeDate}
				onPreviousDate={onPreviousDate}
				onNextDate={onNextDate}
			/>
			<MarginTop value={16} />
		</>
	)
}

export default ListaProgramacaoHeader
