import React from 'react'
import { View } from 'react-native'

import StatusBar from '@components/StatusBar'
import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

const ToYouPage: React.FC = () => {
	return (
		<View style={{ flex: 1 }}>
			<StatusBar />
			<Text color={colors.white}>Para Você</Text>
		</View>
	)
}

export default ToYouPage
