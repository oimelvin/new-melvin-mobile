import { ThemedStyledProps } from 'styled-components'
import styled, { DefaultTheme } from 'styled-components/native'
import {
	ColorValue,
	Dimensions,
	Platform,
	StatusBar,
	TextProps as RNTextProps,
	View,
} from 'react-native'

import colors from './colors.style'

type MarginProps = {
	value: number
}

export const PageContainer = styled.SafeAreaView`
	flex: 1;
	margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
	padding: 16px;
`

export const BackgroundImage = styled.ImageBackground.attrs({
	source: require('../../assets/homeBackground.png'),
	resizeMode: 'cover',
})`
	flex: 1;
	background-color: ${colors.black};
`

export const WhiteLogoMelvin = styled.Image.attrs({
	resizeMode: 'contain',
	source: require('../../assets/logoDark.png'),
})`
	width: 150px;
	height: 50px;
`

export const BottomContent = styled.View`
	position: absolute;
	width: ${Dimensions.get('window').width}px;
	bottom: 0;
	padding: 16px;
`

export const ScrollView = styled.ScrollView.attrs({
	overScrollMode: 'never',
})`
	flex: 1;
`

export const Container = styled.View`
	margin-bottom: 16px;
	padding: 16px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 16px;
`

export const Row = styled.View`
	flex-direction: row;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
	behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
	flex: 1;
`

export const ButtonOpacity = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})``

type TextProps = ThemedStyledProps<
	RNTextProps &
		React.RefAttributes<Text> & {
			color?: ColorValue
			align?: 'left' | 'right' | 'center' | 'justify'
		},
	DefaultTheme
>

export const Text = styled.Text<TextProps>`
	color: ${({ color }) => (color ? color.toString() : colors.black)};
	text-align: ${({ align }) => align || 'left'};
	font-size: 12px;
`

export const Title = styled(Text)`
	font-size: 22px;
	text-transform: uppercase;
	font-weight: bold;
`

export const SubTitle = styled(Title)`
	font-size: 18px;
`

export const SlideTitle = styled(Text)`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.textPrimary};
`

export const MarginTop = styled.View<MarginProps>`
	margin-top: ${props => props.value}px;
`

export const MarginLeft = styled.View<MarginProps>`
	margin-left: ${props => props.value}px;
`

export const MarginBottom = styled.View<MarginProps>`
	margin-bottom: ${props => props.value}px;
`

export const MarginRight = styled.View<MarginProps>`
	margin-right: ${props => props.value}px;
`

export const Center = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

type DividerProps = ThemedStyledProps<
	React.RefAttributes<View> & {
		color?: ColorValue
	},
	DefaultTheme
>

export const Divider = styled.View<DividerProps>`
	margin: 15px 0;
	width: 100%;
	height: 1px;
	background-color: ${({ color }) =>
		color ? color.toString() : colors.black};
`
