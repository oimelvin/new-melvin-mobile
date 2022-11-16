import React from 'react'
import { StatusBar as RNStatusBar } from 'react-native'

import colors from '@styles/colors.style'
import { Theme } from '@styles/theme.style'

type StatusBarProps = {
	theme?: Theme
}

const StatusBar: React.FC<StatusBarProps> = ({ theme }) => (
	<RNStatusBar
		barStyle={!theme || theme.dark ? 'light-content' : 'dark-content'}
		backgroundColor={theme ? theme.colors.background : colors.black}
		translucent
	/>
)

export default StatusBar
