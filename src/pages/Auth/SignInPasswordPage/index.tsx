import React from 'react'
import { Alert } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import {
	BottomContent,
	MarginTop,
	PageContainer,
	Text,
} from '@styles/global.style'
import StatusBar from '@components/StatusBar'

import useAuth from '@contexts/auth.context'
import SignInPasswordForm, {
	SignInPasswordFormValues,
} from './components/SignInPasswordForm'
import { i18n } from '@languages/index'
import colors from '@styles/colors.style'

type SignInPasswordRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'SignInPasswordPage'
>

const SignInPasswordPage: React.FC = () => {
	const { params } = useRoute<SignInPasswordRouteProp>()

	const { signIn } = useAuth()

	const handleSubmit = async (values: SignInPasswordFormValues) => {
		try {
			await signIn(params.usernameOrEmail, values.password)
		} catch (err) {
			console.error(err)
			Alert.alert(i18n.t('signInPassword.attention'), (err as Error).message)
		}
	}

	return (
		<PageContainer>
			<StatusBar />
			<BottomContent>
				<Text align="center" color={colors.white}>
					{params.usernameOrEmail}
				</Text>
				<MarginTop value={15} />
				<SignInPasswordForm onSubmit={handleSubmit} />
			</BottomContent>
		</PageContainer>
	)
}

export default SignInPasswordPage
