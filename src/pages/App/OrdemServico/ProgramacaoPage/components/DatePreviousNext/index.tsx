import { ButtonOpacity, MarginTop, Text } from '@styles/global.style'
import IconButton from '@components/IconButton'

import { moment } from '@languages/index'
import { useState } from 'react'
import DatePickerSelect from '@components/DatePickerSelect'
import { DateContainer, DatePreviousNextContainer, DayText } from './styles'

interface DatePreviousNextProps {
	selectedDate: Date | undefined
	onChangeDate: (date: Date | undefined) => void
	onPreviousDate: () => void
	onNextDate: () => void
}

const DatePreviousNext: React.FC<DatePreviousNextProps> = ({
	selectedDate,
	onChangeDate,
	onPreviousDate,
	onNextDate,
}) => {
	const [openedDatePicker, setOpenedDatePicker] = useState(false)

	return (
		<DatePreviousNextContainer>
			<IconButton
				provider="materialIcons"
				iconName="chevron-left"
				onPress={onPreviousDate}
			/>
			<ButtonOpacity onPress={() => setOpenedDatePicker(true)}>
				<DateContainer>
					<DayText>{moment(selectedDate).format('dddd')}</DayText>
					<MarginTop value={5} />
					<Text>{moment(selectedDate).format('L')}</Text>
				</DateContainer>
			</ButtonOpacity>
			{openedDatePicker ? (
				<DatePickerSelect
					opened={openedDatePicker}
					selectedDate={selectedDate}
					onDateChange={(_, date) => onChangeDate(date)}
					onCloseSelect={() => setOpenedDatePicker(false)}
					onClearDate={() => onChangeDate(undefined)}
				/>
			) : null}
			<IconButton
				provider="materialIcons"
				iconName="chevron-right"
				onPress={onNextDate}
			/>
		</DatePreviousNextContainer>
	)
}

export default DatePreviousNext
