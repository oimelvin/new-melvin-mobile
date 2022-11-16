import React from 'react'
import { View } from 'react-native'

import StatusBar from '@components/StatusBar'
import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

const MyMessagesPage: React.FC = () => {
	return (
		<View>
			<StatusBar />
			<Text color={colors.white}>Minhas mensagens</Text>
		</View>
	)
}

export default MyMessagesPage
