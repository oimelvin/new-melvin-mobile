import React from 'react'
import { StatusBar as RNStatusBar } from 'react-native'

import colors from '@styles/colors.style'

const StatusBar: React.FC = () => (
	<RNStatusBar
		barStyle="light-content"
		backgroundColor={colors.black}
		translucent
	/>
)

export default StatusBar
