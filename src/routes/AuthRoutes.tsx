import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '@pages/Auth/HomePage'
import SignInUsernameOrEmailPage from '@pages/Auth/SignInUsernameOrEmailPage'
import SignInPasswordPage from '@pages/Auth/SignInPasswordPage'
import { BackgroundImage, WhiteLogoMelvin } from '@styles/global.style'
import colors from '@styles/colors.style'

export type AuthStackNavigatorParamList = {
	HomePage: undefined
	SignInUsernameOrEmailPage: undefined
	SignInPasswordPage: { usernameOrEmail: string }
}

const NativeStack = createNativeStackNavigator<AuthStackNavigatorParamList>()

const AuthStackNavigator: React.FC = () => (
	<NativeStack.Navigator
		screenOptions={{
			contentStyle: {
				backgroundColor: colors.black,
			},
			animation: 'slide_from_right',
			headerTransparent: true,
			headerTintColor: colors.white,
			headerTitle: () => <WhiteLogoMelvin />,
			headerTitleAlign: 'center',
			headerBackTitleVisible: false,
		}}
		initialRouteName="HomePage"
	>
		<NativeStack.Screen name="HomePage" component={HomePage} />
		<NativeStack.Screen
			name="SignInUsernameOrEmailPage"
			component={SignInUsernameOrEmailPage}
		/>
		<NativeStack.Screen
			name="SignInPasswordPage"
			component={SignInPasswordPage}
		/>
	</NativeStack.Navigator>
)

export default AuthStackNavigator
