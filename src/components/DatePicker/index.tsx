import React, { useEffect, useState } from 'react'
import {
	ColorValue,
	Platform,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import colors from '@styles/colors.style'
import Icon from '@components/Icon'
import Input from '@components/Input'
import {
	DatePickerModalContainer,
	DatePickerModalOverlay,
	DatePickerModal,
} from './styles'
import { i18n } from '@languages/index'
import Button from '@components/Button'
import { MarginTop } from '@styles/global.style'

export type DatePickerItemProps = {
	value: string
	label: string
}

type DatePickerProps = {
	value: Date | null
	onDateChange(date: Date | null): void
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
		onDateChange(null)
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
				<DatePickerModalContainer
					visible={opened}
					onRequestClose={() => handleCloseDatePicker()}
				>
					<TouchableWithoutFeedback
						onPress={() => handleCloseDatePicker()}
					>
						<DatePickerModalOverlay>
							<DatePickerModal>
								<DateTimePicker
									value={selectedDate || new Date()}
									onChange={(_, date) =>
										handleDateChange(date)
									}
									display={
										Platform.OS === 'ios'
											? 'spinner'
											: 'calendar'
									}
									textColor={colors.white}
								/>
								<MarginTop value={16} />
								<Button onPress={() => handleCloseDatePicker()}>
									{i18n.t('components.datePicker.select')}
								</Button>
								<MarginTop value={16} />
								<Button
									variant="outline"
									onPress={() => handleCleanDatePicker()}
								>
									{i18n.t('components.datePicker.clean')}
								</Button>
							</DatePickerModal>
						</DatePickerModalOverlay>
					</TouchableWithoutFeedback>
				</DatePickerModalContainer>
			) : null}
		</View>
	)
}

export default DatePicker
