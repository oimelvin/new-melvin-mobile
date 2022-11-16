import React, {
	createContext,
	PropsWithChildren,
	useEffect,
	useState,
} from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native'
import { Provider as PaperProvider } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LightTheme, DarkTheme, Theme } from '@styles/theme.style'

type ThemeContextData = {
	theme: Theme
	toggleTheme(): Promise<void>
}

const ThemeContext = createContext({
	theme: LightTheme,
} as ThemeContextData)

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const scheme = useColorScheme()

	const [theme, setTheme] = useState(
		scheme === 'dark' ? DarkTheme : LightTheme
	)

	useEffect(() => {
		const applyPreferredUserTheme = async (): Promise<void> => {
			try {
				const preferredThemeName = await AsyncStorage.getItem(
					'@melvin:theme'
				)

				if (preferredThemeName) {
					setTheme(
						preferredThemeName === 'dark' ? DarkTheme : LightTheme
					)
				} else {
					await AsyncStorage.setItem(
						'@melvin:theme',
						JSON.stringify(theme.dark ? 'dark' : 'light')
					)
				}
			} catch (error) {
				console.log(error)
			}
		}

		applyPreferredUserTheme()
	})

	const toggleTheme = async () => {
		try {
			const newTheme = theme.dark ? LightTheme : DarkTheme

			await AsyncStorage.setItem(
				'@melvin:theme',
				theme.dark ? 'light' : 'dark'
			)

			setTheme(newTheme)
		} catch (error) {
			throw new Error('Erro ao alterar o tema.')
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<StyledComponentsThemeProvider theme={theme}>
				<PaperProvider theme={theme}>{children}</PaperProvider>
			</StyledComponentsThemeProvider>
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider }
