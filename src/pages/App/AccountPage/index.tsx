import React, { useContext } from 'react'
import { Alert } from 'react-native'

import { AccountPageContainer } from './styles'
import Button from '@components/Button'
import ProfileInfo from './components/ProfileInfo'
import Menu from './components/Menu'
import StatusBar from '@components/StatusBar'

import useAuth from '@contexts/auth.context'
import { i18n } from '@languages/index'

const AccountPage: React.FC = () => {
	const { signOut } = useAuth()

	const handleSignOut = async () => {
		try {
			await signOut()
		} catch (err) {
			console.error(err)
			Alert.alert(i18n.t('account.attention'), (err as Error).message)
		}
	}

	return (
		<AccountPageContainer>
			<StatusBar />
			<ProfileInfo />
			<Menu />
			<Button variant="outline" onPress={() => handleSignOut()}>
				{i18n.t('account.signOut')}
			</Button>
		</AccountPageContainer>
	)
}

export default AccountPage
