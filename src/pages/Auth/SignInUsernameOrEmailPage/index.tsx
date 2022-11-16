import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import { BottomContent, PageContainer } from '@styles/global.style'
import StatusBar from '@components/StatusBar'
import SignInUsernameOrEmailForm, {
	SignInUsernameOrEmailFormValues,
} from './components/SignInUsernameOrEmailForm'

type SignInUsernameOrEmailPageProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SignInUsernameOrEmailPage'
>

const SignInUsernameOrEmailPage: React.FC = () => {
	const { navigate } = useNavigation<SignInUsernameOrEmailPageProp>()

	const handleSubmit = async (values: SignInUsernameOrEmailFormValues) =>
		navigate('SignInPasswordPage', { usernameOrEmail: values.usernameOrEmail })

	return (
		<PageContainer>
			<StatusBar />
			<BottomContent>
				<SignInUsernameOrEmailForm onSubmit={handleSubmit} />
			</BottomContent>
		</PageContainer>
	)
}

export default SignInUsernameOrEmailPage
