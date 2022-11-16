import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import { MarginTop } from '@styles/global.style'
import Button from '@components/Button'
import PasswordInput from '@components/PasswordInput'
import { i18n } from '@languages/index'
import colors from '@styles/colors.style'

export type SignInPasswordFormValues = {
  password: string
}

type SignInPasswordFormProps = {
  onSubmit(
    values: SignInPasswordFormValues,
    formikHelpers: FormikHelpers<SignInPasswordFormValues>
  ): void | Promise<any>
}

const SignInPasswordSchema = Yup.object().shape({
	password: Yup.string().required(i18n.t('signInPassword.requiredPassword')),
})

const SignInPasswordForm: React.FC<SignInPasswordFormProps> = ({
	onSubmit,
}) => (
	<Formik<SignInPasswordFormValues>
		initialValues={{
			password: '',
		}}
		validationSchema={SignInPasswordSchema}
		onSubmit={onSubmit}
	>
		{({
			handleChange,
			handleBlur,
			handleSubmit,
			values,
			dirty,
			errors: { password },
		}) => (
			<>
				<PasswordInput
					value={values.password}
					onChangeText={handleChange('password')}
					onBlur={handleBlur('password')}
					placeholder={i18n.t('signInPassword.typePassword')}
					placeholderTextColor={colors.gray100}
					selectionColor={colors.gray500}
					color={colors.white}
					returnKeyType="next"
					errorText={password}
				/>
				<MarginTop value={15} />
				<Button onPress={() => handleSubmit()} disabled={!dirty || !!password}>
					{i18n.t('signInPassword.signIn')}
				</Button>
			</>
		)}
	</Formik>
)

export default SignInPasswordForm
