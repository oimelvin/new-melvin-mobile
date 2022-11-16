import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import colors from '@styles/colors.style'
import useAuth from '../contexts/auth.context'

import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'

const Routes: React.FC = () => {
	const { loading, user } = useAuth()

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color={colors.cyan} />
			</View>
		)
	}

	return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
