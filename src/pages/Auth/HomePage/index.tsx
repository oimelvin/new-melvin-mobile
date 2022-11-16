import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import { BottomContent, MarginTop, PageContainer } from '@styles/global.style'
import StatusBar from '@components/StatusBar'
import Button from '@components/Button'
import { i18n } from '@languages/index'
import TalkConsultant from './components/TalkConsultant'

type HomePageProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'HomePage'
>

const HomePage: React.FC = () => {
	const { navigate } = useNavigation<HomePageProp>()

	return (
		<PageContainer>
			<StatusBar />
			<BottomContent>
				<Button>{i18n.t('home.trial')}</Button>
				<MarginTop value={16} />
				<Button
					variant="outline"
					onPress={() => navigate('SignInUsernameOrEmailPage')}
				>
					{i18n.t('home.signIn')}
				</Button>
				<MarginTop value={35} />
				<TalkConsultant />
			</BottomContent>
		</PageContainer>
	)
}

export default HomePage
