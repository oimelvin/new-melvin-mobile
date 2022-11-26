import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import {
	BackgroundImage,
	BottomContent,
	KeyboardAvoidingView,
	MarginTop,
	PageContainer,
} from '@styles/global.style'
import StatusBar from '@components/StatusBar'
import EmailInput from '@components/EmailInput'
import Button from '@components/Button'
import colors from '@styles/colors.style'

import { i18n } from '@languages/index'

type SignInUsernameOrEmailPageProp = NativeStackNavigationProp<
	AuthStackNavigatorParamList,
	'SignInUsernameOrEmailPage'
>

const SignInUsernameOrEmailPage: React.FC = () => {
	const { navigate } = useNavigation<SignInUsernameOrEmailPageProp>()

	const [dirtyUsernameOrEmail, setDirtyUsernameOrEmail] = useState(false)
	const [validUsernameOrEmail, setValidUsernameOrEmail] = useState(false)
	const [usernameOrEmail, setUsernameOrEmail] = useState('')

	const handleChangeText = async (value: string) => {
		setDirtyUsernameOrEmail(true)
		setUsernameOrEmail(value)
		await validateUsernameOrEmail(value)
	}

	const errorText =
		dirtyUsernameOrEmail && !validUsernameOrEmail
			? i18n.t('signInUsernameOrEmail.requiredUsernameOrEmail')
			: undefined

	const validateUsernameOrEmail = async (value: string) => {
		if (!value) {
			setValidUsernameOrEmail(false)
		} else {
			setValidUsernameOrEmail(true)
		}
	}

	const handleBlur = async () => setDirtyUsernameOrEmail(true)

	const handleSubmit = async () => {
		if (dirtyUsernameOrEmail && validUsernameOrEmail) {
			navigate('SignInPasswordPage', {
				usernameOrEmail,
			})
		}
	}

	return (
		<BackgroundImage>
			<KeyboardAvoidingView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<PageContainer>
						<StatusBar />
						<BottomContent>
							<EmailInput
								value={usernameOrEmail}
								onChangeText={handleChangeText}
								onBlur={handleBlur}
								placeholder={i18n.t(
									'signInUsernameOrEmail.typeUsernameOrEmail'
								)}
								placeholderTextColor={colors.gray100}
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
								onPress={() => handleSubmit()}
								disabled={
									!dirtyUsernameOrEmail ||
									!validUsernameOrEmail
								}
							>
								{i18n.t('signInUsernameOrEmail.next')}
							</Button>
							<MarginTop value={15} />
						</BottomContent>
					</PageContainer>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</BackgroundImage>
	)
}

export default SignInUsernameOrEmailPage
