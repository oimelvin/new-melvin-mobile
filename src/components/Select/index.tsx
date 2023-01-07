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
import Modal from '@components/Modal'
import Icon from '@components/Icon'
import Input from '@components/Input'
import Button from '@components/Button'
import { SelectEmptyList, SelectItem } from './styles'
import { i18n } from '@languages/index'

export type SelectItemProps = {
	value: string
	label: string
}

type SelectProps = {
	items: SelectItemProps[]
	selectedValue: string | undefined
	onSelect(item: string | undefined): void
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
	translucentBackground,
}: SelectProps) => {
	const [opened, setOpened] = useState(false)
	const [search, setSearch] = useState('')

	const handlePress = () => {
		onPress && onPress()
		!disabled && setOpened(true)
	}

	const handleSelect = (item: string | undefined) => {
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
			onPress={() => handleSelect(item.value)}
			style={{ borderRadius: 16 }}
			underlayColor={colors.gray100}
		>
			<SelectItem selected={item.value === selectedValue}>
				<Text>{item.label}</Text>
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
										item => item.value === selectedValue
								  )?.label
								: placeholder ||
								  i18n.t('components.select.select')
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
						translucentBackground={translucentBackground}
						readOnly
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal opened={opened} onClose={() => handleCloseSelect()} padding>
				<Input
					value={search}
					placeholder={
						placeholderSearch ||
						i18n.t('components.select.typeForSearch')
					}
					onChangeText={text => setSearch(text)}
					translucentBackground={translucentBackground}
				/>
				<FlatList
					keyExtractor={({ value }) => value}
					data={items?.filter(item =>
						item.label?.toUpperCase().includes(search.toUpperCase())
					)}
					renderItem={({ item }) => renderItem(item)}
					ListEmptyComponent={renderEmptyList}
					showsVerticalScrollIndicator={false}
					overScrollMode="never"
				/>
				<Button
					variant="outline"
					onPress={() => handleSelect(undefined)}
				>
					{i18n.t('components.select.clean')}
				</Button>
			</Modal>
		</View>
	)
}

export default Select
