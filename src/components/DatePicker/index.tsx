import React, { useEffect, useState } from 'react'
import { ColorValue, TouchableWithoutFeedback, View } from 'react-native'

import colors from '@styles/colors.style'
import Icon from '@components/Icon'
import Input from '@components/Input'
import DatePickerSelect from '@components/DatePickerSelect'

type DatePickerProps = {
	value: Date | undefined
	onDateChange(date: Date | undefined): void
	onPress?(): void
	onCloseSelect?(): void
	label?: string
	placeholder?: string
	placeholderSearch?: string
	emptyListText?: string
	errorText?: string
	color?: ColorValue
	disabled?: boolean
	translucentBackground?: boolean
}

const DatePicker: React.FC<DatePickerProps> = ({
	label,
	value,
	onDateChange,
	onPress,
	onCloseSelect,
	placeholder,
	errorText,
	color,
	disabled,
	translucentBackground,
}: DatePickerProps) => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [opened, setOpened] = useState(false)

	useEffect(() => {
		const setValue = async () => {
			if (value) {
				setSelectedDate(value)
			}
		}

		setValue()
	}, [])

	const handlePress = () => {
		onPress && onPress()
		!disabled && setOpened(true)
	}

	const handleDateChange = (date: Date | undefined) => {
		if (date) {
			setSelectedDate(date)
		}
	}

	const handleCloseDatePicker = () => {
		onDateChange(selectedDate || new Date())
		setOpened(false)
		onCloseSelect && onCloseSelect()
	}

	const handleCleanDatePicker = () => {
		setSelectedDate(new Date())
		onDateChange(undefined)
		setOpened(false)
		onCloseSelect && onCloseSelect()
	}

	return (
		<View>
			<TouchableWithoutFeedback onPress={() => handlePress()}>
				<View>
					<Input
						label={label}
						value={
							value?.toLocaleDateString() ||
							placeholder ||
							'Selecione:'
						}
						rightComponent={
							<Icon
								provider="materialCommunityIcons"
								iconName="calendar-blank"
								size={20}
								color="gray"
							/>
						}
						placeholderTextColor={colors.gray100}
						selectionColor={colors.gray500}
						color={color || colors.gray100}
						errorText={errorText}
						disabled={disabled}
						translucentBackground={translucentBackground}
						readOnly
					/>
				</View>
			</TouchableWithoutFeedback>
			{opened ? (
				<DatePickerSelect
					opened={opened}
					selectedDate={selectedDate}
					onDateChange={(_, date) => handleDateChange(date)}
					onCloseSelect={() => handleCloseDatePicker()}
					onClearDate={() => handleCleanDatePicker()}
				/>
			) : null}
		</View>
	)
}

export default DatePicker
