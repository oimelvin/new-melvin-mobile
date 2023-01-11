import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthStackNavigatorParamList } from '@routes/AuthRoutes'
import {
	BackgroundImage,
	BottomContent,
	MarginTop,
	PageContainer,
} from '@styles/global.style'
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
		<BackgroundImage>
			<PageContainer>
				<StatusBar />
				<BottomContent>
					<Button label={i18n.t('home.trial')} />
					<MarginTop value={16} />
					<Button
						label={i18n.t('home.signIn')}
						onPress={() => navigate('SignInUsernameOrEmailPage')}
					/>
					<MarginTop value={35} />
					<TalkConsultant />
					<MarginTop value={15} />
				</BottomContent>
			</PageContainer>
		</BackgroundImage>
	)
}

export default HomePage
