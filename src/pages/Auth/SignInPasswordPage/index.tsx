import React, { useState } from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import {
	BackgroundImage,
	BottomContent,
	KeyboardAvoidingView,
	MarginTop,
	PageContainer,
	Text,
} from '@styles/global.style'
import StatusBar from '@components/StatusBar'
import PasswordInput from '@components/PasswordInput'
import Button from '@components/Button'
import useAuth from '@contexts/auth.context'
import colors from '@styles/colors.style'

import { i18n } from '@languages/index'

type SignInPasswordRouteProp = RouteProp<
	AuthStackNavigatorParamList,
	'SignInPasswordPage'
>

const SignInPasswordPage: React.FC = () => {
	const { params } = useRoute<SignInPasswordRouteProp>()

	const { signIn } = useAuth()

	const [dirtyPassword, setDirtyPassword] = useState(false)
	const [validPassword, setValidPassword] = useState(false)
	const [password, setPassword] = useState('')

	const handleChangeText = async (value: string) => {
		setDirtyPassword(true)
		setPassword(value)
		await validatePassword(value)
	}

	const validatePassword = async (value: string) => {
		if (!value) {
			setValidPassword(false)
		} else {
			setValidPassword(true)
		}
	}

	const errorText =
		dirtyPassword && !validPassword
			? i18n.t('signInPassword.requiredPassword')
			: undefined

	const handleBlur = async () => setDirtyPassword(true)

	const handleSubmit = async () => {
		if (dirtyPassword && validPassword) {
			try {
				await signIn(params.usernameOrEmail, password)
			} catch (err) {
				console.error(err)
				Alert.alert(i18n.t('account.attention'), (err as Error).message)
			}
		}
	}

	return (
		<BackgroundImage>
			<KeyboardAvoidingView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<PageContainer>
						<StatusBar />
						<BottomContent>
							<Text align="center" color={colors.white}>
								{params.usernameOrEmail}
							</Text>
							<MarginTop value={15} />
							<PasswordInput
								value={password}
								onChangeText={handleChangeText}
								onBlur={handleBlur}
								placeholder={i18n.t(
									'signInPassword.typePassword'
								)}
								placeholderTextColor={colors.gray300}
								selectionColor={colors.gray500}
								color={colors.white}
								returnKeyType="go"
								returnKeyLabel={i18n.t(
									'signInUsernameOrEmail.next'
								)}
								onSubmitEditing={() => handleSubmit()}
								errorText={errorText}
							/>
							<MarginTop value={15} />
							<Button
								label={i18n.t('signInPassword.signIn')}
								onPress={() => handleSubmit()}
								disabled={!dirtyPassword || !password}
							/>
							<MarginTop value={15} />
						</BottomContent>
					</PageContainer>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</BackgroundImage>
	)
}

export default SignInPasswordPage
