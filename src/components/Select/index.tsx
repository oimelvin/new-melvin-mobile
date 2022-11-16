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

export type SelectItemProps = {
	value: string
	label: string
}

type SelectProps = {
	items: SelectItemProps[]
	selectedValue: SelectItemProps | null
	onSelect(item: SelectItemProps | null): void
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
	placeholder,
	placeholderSearch,
	emptyListText,
	errorText,
	color,
	disabled,
}: SelectProps) => {
	const [opened, setOpened] = useState(false)
	const [search, setSearch] = useState('')

	const handleSelect = (item: SelectItemProps | null) => {
		onSelect(item)
		setOpened(false)
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
				{emptyListText || 'Nenhum item encontrado.'}
			</Text>
		</SelectEmptyList>
	)

	return (
		<View>
			<TouchableWithoutFeedback
				onPress={() => !disabled && setOpened(true)}
			>
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
				onRequestClose={() => setOpened(false)}
			>
				<TouchableWithoutFeedback onPress={() => setOpened(false)}>
					<SelectModalOverlay>
						<SelectModal>
							<Input
								color={colors.white}
								value={search}
								placeholder={
									placeholderSearch || 'Digite para buscar'
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
								Limpar
							</Button>
						</SelectModal>
					</SelectModalOverlay>
				</TouchableWithoutFeedback>
			</SelectModalContainer>
		</View>
	)
}

export default Select
