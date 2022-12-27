import React from 'react'
import { ActivityIndicator } from 'react-native'

import colors from '@styles/colors.style'
import { LoadingContainer } from './styles'

const Loading: React.FC = () => (
	<LoadingContainer>
		<ActivityIndicator size="large" color={colors.cyan} />
	</LoadingContainer>
)

export default Loading
