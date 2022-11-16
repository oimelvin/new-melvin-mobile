import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import { TabBarContainer, TabButtonCenter, TabSelected } from './styles'
import { ButtonOpacity } from '@styles/global.style'

const TabBar: React.FC<BottomTabBarProps> = ({
	state,
	descriptors,
	navigation,
}) => {
	const { colors } = useTheme()

	return (
		<TabBarContainer>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]

				const isFocused = state.index === index

				let centerButton = -1

				if (state.routes.length % 2 == 1) {
					centerButton = Math.ceil(state.routes.length / 2) - 1
				}

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, { merge: true })
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				return index == centerButton ? (
					<TabButtonCenter
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}
					>
						{options.tabBarIcon &&
							options.tabBarIcon({
								focused: isFocused,
								color: colors.title,
								size: 24,
							})}
					</TabButtonCenter>
				) : (
					<ButtonOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}
					>
						{options.tabBarIcon &&
							options.tabBarIcon({
								focused: isFocused,
								color: colors.title,
								size: 24,
							})}
						{isFocused && <TabSelected />}
					</ButtonOpacity>
				)
			})}
		</TabBarContainer>
	)
}

export default TabBar
