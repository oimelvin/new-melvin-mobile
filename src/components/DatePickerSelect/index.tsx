import React from 'react'
import { Platform, TouchableWithoutFeedback } from 'react-native'
import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

import colors from '@styles/colors.style'
import { MarginTop } from '@styles/global.style'
import {
	DatePickerModalContainer,
	DatePickerModalOverlay,
	DatePickerModal,
} from './styles'
import { i18n } from '@languages/index'
import Button from '@components/Button'

type DatePickerSelectProps = {
	opened: boolean
	selectedDate: Date | undefined
	onDateChange(dateEvent: DateTimePickerEvent, date?: Date): void
	onCloseSelect?: () => void
	onClearDate?: () => void
}

const DatePickerSelect: React.FC<DatePickerSelectProps> = ({
	opened,
	selectedDate,
	onDateChange,
	onCloseSelect,
	onClearDate,
}) => {
	return (
		<DatePickerModalContainer
			visible={opened}
			onRequestClose={onCloseSelect}
		>
			<TouchableWithoutFeedback onPress={onCloseSelect}>
				<DatePickerModalOverlay>
					<DatePickerModal>
						<DateTimePicker
							value={selectedDate || new Date()}
							onChange={onDateChange}
							display={
								Platform.OS === 'ios' ? 'spinner' : 'calendar'
							}
							textColor={colors.white}
						/>
						<MarginTop value={16} />
						<Button
							label={i18n.t('components.datePicker.select')}
							onPress={onCloseSelect}
						/>
						<MarginTop value={16} />
						<Button
							label={i18n.t('components.datePicker.clean')}
							onPress={onClearDate}
						/>
					</DatePickerModal>
				</DatePickerModalOverlay>
			</TouchableWithoutFeedback>
		</DatePickerModalContainer>
	)
}

export default DatePickerSelect
