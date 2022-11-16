import React from 'react'
import { ActivityIndicator } from 'react-native'

import colors from '@styles/colors.style'

const Loading: React.FC = () => <ActivityIndicator size='large' color={colors.cyan} />

export default Loading
