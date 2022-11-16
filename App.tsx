import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

import { ThemeProvider } from '@contexts/theme.context'
import { AuthProvider } from '@contexts/auth.context'
import { MessageProvider } from '@contexts/message.context'
import { AtivoProvider } from '@pages/App/Tabs/EquipmentPage/ativo.context'

const App: React.FC = () => (
	<ThemeProvider>
		<StatusBar
			barStyle="light-content"
			backgroundColor="transparent"
			translucent
		/>
		<MessageProvider>
			<NavigationContainer>
				<AuthProvider>
					<AtivoProvider>
						<Routes />
					</AtivoProvider>
				</AuthProvider>
			</NavigationContainer>
		</MessageProvider>
	</ThemeProvider>
)

export default App
