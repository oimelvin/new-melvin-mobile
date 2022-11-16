import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { AppStackNavigatorParamList } from '@routes/AppRoutes'

import colors from '@styles/colors.style'
import { HeaderTabNavigationContainer } from './styles'
import IconButton from '../IconButton'

type AppTabBarNavigatorProp = NativeStackNavigationProp<
  AppStackNavigatorParamList,
  'BottomTabNavigator'
>

const HeaderTabNavigation: React.FC<BottomTabHeaderProps> = () => {
	const { navigate } = useNavigation<AppTabBarNavigatorProp>()

	return (
		<HeaderTabNavigationContainer>
			<IconButton
				provider="materialCommunityIcons"
				iconName="account"
				color={colors.white}
				onPress={() => navigate('AccountPage')}
			/>
			<IconButton
				provider="ionicons"
				iconName="notifications"
				color={colors.white}
				onPress={() => navigate('NotificationTopTabNavigator')}
			/>
		</HeaderTabNavigationContainer>
	)
}

export default HeaderTabNavigation
