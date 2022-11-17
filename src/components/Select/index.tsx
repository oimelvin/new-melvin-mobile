import React, { useState } from 'react'
import {
	ColorValue,
	FlatList,
	TouchableHighlight,
	TouchableWithoutFeedback,
	View,
} from 'react-native'

import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'
import Icon from '@components/Icon'
import Input from '@components/Input'
import {
	SelectModalContainer,
	SelectModalOverlay,
	SelectModal,
	SelectEmptyList,
	SelectItem,
} from './styles'
import Button from '@components/Button'
import { i18n } from '@languages/index'

export type SelectItemProps = {
	value: string
	label: string
}

type SelectProps = {
	items: SelectItemProps[]
	selectedValue: SelectItemProps | null
	onSelect(item: SelectItemProps | null): void
	onPress?(): void
	onCloseSelect?(): void
	label?: string
	placeholder?: string
	placeholderSearch?: string
	emptyListText?: string
	errorText?: string
	color?: ColorValue
	disabled?: boolean
}

const Select: React.FC<SelectProps> = ({
	label,
	items,
	selectedValue,
	onSelect,
	onPress,
	onCloseSelect,
	placeholder,
	placeholderSearch,
	emptyListText,
	errorText,
	color,
	disabled,
}: SelectProps) => {
	const [opened, setOpened] = useState(false)
	const [search, setSearch] = useState('')

	const handlePress = () => {
		onPress && onPress()
		!disabled && setOpened(true)
	}

	const handleSelect = (item: SelectItemProps | null) => {
		onSelect(item)
		setOpened(false)
		onCloseSelect && onCloseSelect()
	}

	const handleCloseSelect = () => {
		setOpened(false)
		onCloseSelect && onCloseSelect()
	}

	const renderItem = (item: SelectItemProps) => (
		<TouchableHighlight
			onPress={() => handleSelect(item)}
			style={{ borderRadius: 16 }}
			underlayColor={colors.gray500}
		>
			<SelectItem selected={item.value === selectedValue?.value}>
				<Text color={colors.white}>{item.label}</Text>
			</SelectItem>
		</TouchableHighlight>
	)

	const renderEmptyList = () => (
		<SelectEmptyList>
			<Text color={colors.gray100}>
				{emptyListText || i18n.t('components.select.noItemsFound')}
			</Text>
		</SelectEmptyList>
	)

	return (
		<View>
			<TouchableWithoutFeedback onPress={() => handlePress()}>
				<View>
					<Input
						label={label}
						value={
							selectedValue
								? items.find(
										item =>
											item.value === selectedValue.value
								  )?.label
								: placeholder || 'Selecione:'
						}
						rightComponent={
							<Icon
								provider="materialCommunityIcons"
								iconName={
									opened ? 'chevron-up' : 'chevron-down'
								}
								size={20}
								color="gray"
							/>
						}
						placeholderTextColor={colors.gray100}
						selectionColor={colors.gray500}
						color={color || colors.gray100}
						errorText={errorText}
						disabled={disabled}
						readOnly
					/>
				</View>
			</TouchableWithoutFeedback>
			<SelectModalContainer
				visible={opened}
				onRequestClose={() => handleCloseSelect()}
			>
				<TouchableWithoutFeedback onPress={() => handleCloseSelect()}>
					<SelectModalOverlay>
						<SelectModal>
							<Input
								color={colors.white}
								value={search}
								placeholder={
									placeholderSearch ||
									i18n.t('components.select.typeForSearch')
								}
								placeholderTextColor={colors.gray100}
								onChangeText={text => setSearch(text)}
							/>
							<FlatList
								keyExtractor={({ value }) => value}
								data={items?.filter(item =>
									item.label
										?.toUpperCase()
										.includes(search.toUpperCase())
								)}
								renderItem={({ item }) => renderItem(item)}
								ListEmptyComponent={renderEmptyList}
								showsVerticalScrollIndicator={false}
								overScrollMode="never"
							/>
							<Button
								variant="outline"
								onPress={() => handleSelect(null)}
							>
								{i18n.t('components.select.clean')}
							</Button>
						</SelectModal>
					</SelectModalOverlay>
				</TouchableWithoutFeedback>
			</SelectModalContainer>
		</View>
	)
}

export default Select
