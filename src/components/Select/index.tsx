import React, { useState } from 'react'
import {
	ColorValue,
	FlatList,
	ListRenderItemInfo,
	TouchableHighlight,
	TouchableWithoutFeedback,
	View,
} from 'react-native'

import colors from '@styles/colors.style'
import { MarginTop, Text } from '@styles/global.style'
import Icon from '@components/Icon'
import Input from '@components/Input'
import Button from '@components/Button'
import {
	SelectEmptyList,
	SelectItem,
	SelectModal,
	SelectModalContainer,
	SelectModalOverlay,
} from './styles'
import { i18n } from '@languages/index'

export type SelectItemProps = {
	value: string
	label: string
}

type SelectProps = {
	items: SelectItemProps[]
	selectedValue?: string
	onSelect(item?: string): void
	onPress?(): void
	onCloseSelect?(): void
	label?: string
	placeholder?: string
	placeholderSearch?: string
	emptyListText?: string
	errorText?: string
	color?: ColorValue
	disabled?: boolean
	required?: boolean
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
	required,
}: SelectProps) => {
	const [opened, setOpened] = useState(false)
	const [search, setSearch] = useState('')

	const getColor = (): string => {
		if (errorText) {
			return colors.red
		} else if (disabled) {
			return colors.gray300
		} else if (!selectedValue) {
			return colors.gray500
		}

		return color ? color.toString() : colors.black
	}

	const handlePress = () => {
		onPress && onPress()
		!disabled && setOpened(true)
	}

	const handleSelect = (item: string | undefined) => {
		onSelect(item)
		setOpened(false)
		onCloseSelect && onCloseSelect()
	}

	const renderItem = ({ item }: ListRenderItemInfo<SelectItemProps>) => (
		<TouchableHighlight
			onPress={() => handleSelect(item.value)}
			style={{ borderRadius: 16 }}
			underlayColor={colors.gray300}
		>
			<SelectItem selected={item.value === selectedValue}>
				<Text>{item.label}</Text>
			</SelectItem>
		</TouchableHighlight>
	)

	const renderEmptyList = () => (
		<SelectEmptyList>
			<Text color={colors.black}>
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
								: ''
						}
						rightComponent={
							<Icon
								provider="materialCommunityIcons"
								iconName={
									opened ? 'chevron-up' : 'chevron-down'
								}
								size={20}
								color={getColor()}
							/>
						}
						placeholder={
							placeholder || i18n.t('components.select.select')
						}
						errorText={errorText}
						disabled={disabled}
						required={required}
						readOnly
					/>
				</View>
			</TouchableWithoutFeedback>
			<SelectModalContainer
				visible={opened}
				onRequestClose={onCloseSelect}
			>
				<TouchableWithoutFeedback onPress={onCloseSelect}>
					<SelectModalOverlay>
						<SelectModal>
							<Input
								label={i18n.t('common.search')}
								value={search}
								placeholder={
									placeholderSearch ||
									i18n.t('components.select.typeForSearch')
								}
								onChangeText={text => setSearch(text)}
							/>
							<MarginTop value={16} />
							<FlatList
								style={{ maxHeight: 300 }}
								keyExtractor={({ value }) => value}
								data={items?.filter(item =>
									item.label
										?.toUpperCase()
										.includes(search.toUpperCase())
								)}
								ItemSeparatorComponent={() => (
									<MarginTop value={5} />
								)}
								renderItem={renderItem}
								ListEmptyComponent={renderEmptyList}
								showsVerticalScrollIndicator={false}
								overScrollMode="never"
							/>
							<MarginTop value={16} />
							<Button
								label={i18n.t('components.select.clean')}
								onPress={() => handleSelect(undefined)}
							/>
						</SelectModal>
					</SelectModalOverlay>
				</TouchableWithoutFeedback>
			</SelectModalContainer>
		</View>
	)
}

export default Select
