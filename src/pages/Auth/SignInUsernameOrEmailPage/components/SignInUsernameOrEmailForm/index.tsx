import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import { MarginTop } from '@styles/global.style'
import Button from '@components/Button'
import EmailInput from '@components/EmailInput'
import { i18n } from '@languages/index'
import colors from '@styles/colors.style'

export type SignInUsernameOrEmailFormValues = {
  usernameOrEmail: string
}

type SignInUsernameOrEmailFormProps = {
  onSubmit(
    values: SignInUsernameOrEmailFormValues,
    formikHelpers: FormikHelpers<SignInUsernameOrEmailFormValues>
  ): void | Promise<any>
}

const SignInUsernameOrEmailSchema = Yup.object().shape({
	usernameOrEmail: Yup.string().required(
		i18n.t('signInUsernameOrEmail.requiredUsernameOrEmail')
	),
})

const SignInUsernameOrEmailForm: React.FC<SignInUsernameOrEmailFormProps> = ({
	onSubmit,
}) => (
	<Formik<SignInUsernameOrEmailFormValues>
		initialValues={{
			usernameOrEmail: '',
		}}
		validationSchema={SignInUsernameOrEmailSchema}
		onSubmit={onSubmit}
	>
		{({
			handleChange,
			handleBlur,
			handleSubmit,
			values,
			dirty,
			errors: { usernameOrEmail },
		}) => (
			<>
				<EmailInput
					value={values.usernameOrEmail}
					onChangeText={handleChange('usernameOrEmail')}
					onBlur={handleBlur('usernameOrEmail')}
					placeholder={i18n.t('signInUsernameOrEmail.typeUsernameOrEmail')}
					placeholderTextColor={colors.gray100}
					selectionColor={colors.gray500}
					color={colors.white}
					returnKeyType="next"
					errorText={usernameOrEmail}
				/>
				<MarginTop value={15} />
				<Button
					onPress={() => handleSubmit()}
					disabled={!dirty || !!usernameOrEmail}
				>
					{i18n.t('signInUsernameOrEmail.next')}
				</Button>
			</>
		)}
	</Formik>
)

export default SignInUsernameOrEmailForm
