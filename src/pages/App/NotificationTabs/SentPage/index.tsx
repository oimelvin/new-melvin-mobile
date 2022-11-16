import React from 'react'
import { View } from 'react-native'

import StatusBar from '@components/StatusBar'
import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

const SentPage: React.FC = () => {
	return (
		<View>
			<StatusBar />
			<Text color={colors.white}>Enviadas</Text>
		</View>
	)
}

export default SentPage
