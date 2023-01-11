import { ColorValue } from 'react-native'
import {
	DefaultTheme as PaperDefaultTheme,
	Theme as PaperTheme,
} from 'react-native-paper'
import colors from './colors.style'

export type Theme = PaperTheme & {
	colors: {
		secondary: ColorValue
		accent: ColorValue
		title: ColorValue
		textPrimary: ColorValue
		success: ColorValue
		warning: ColorValue
		error: ColorValue
		placeholder: ColorValue
		buttonFillText: ColorValue
		buttonOutlineText: ColorValue
		buttonDisabled: ColorValue
		buttonFillDisabledText: ColorValue
		buttonOutlineDisabledText: ColorValue
		disabledInput: ColorValue
		selectionColor: ColorValue
	}
}

const themeColors = {
	...PaperDefaultTheme.colors,
	primary: colors.black,
	secondary: colors.white,
	accent: colors.cyan,
	success: colors.green,
	warning: colors.yellow,
	error: colors.red,
	notification: colors.cyan,
	buttonFillText: colors.black,
	buttonDisabledText: colors.white,
	buttonOutlineText: colors.white,
	buttonDisabled: colors.gray500,
	buttonFillDisabledText: colors.white,
	buttonOutlineDisabledText: colors.gray500,
	selectionColor: colors.gray500,
	placeholder: colors.gray500,
	disabledInput: colors.gray500,
	disabled: colors.gray500,
}

const LightTheme: Theme = {
	...PaperDefaultTheme,
	dark: false,
	colors: {
		...themeColors,
		background: colors.white,
		title: colors.black,
		text: colors.gray900,
		textPrimary: colors.black,
		surface: colors.gray300,
		onSurface: colors.white,
	},
}

const DarkTheme: Theme = {
	...PaperDefaultTheme,
	dark: true,
	colors: {
		...themeColors,
		background: colors.gray900,
		title: colors.white,
		text: colors.gray300,
		textPrimary: colors.white,
		surface: colors.gray900,
		onSurface: colors.gray900,
	},
}

export { DarkTheme, LightTheme }
