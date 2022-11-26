import { View, ViewProps } from 'react-native'
import { DefaultTheme, ThemedStyledProps } from 'styled-components'
import styled from 'styled-components/native'

import colors from '@styles/colors.style'

export const QRCodeEquipamentoPageContainer = styled.View`
	flex: 1;
	background-color: ${colors.black};
`

type BoxProps = ThemedStyledProps<
	ViewProps &
		React.RefAttributes<View> & {
			boxSize: number
		},
	DefaultTheme
>

export const Box = styled.View<BoxProps>`
	width: ${({ boxSize }) => boxSize}px;
	height: ${({ boxSize }) => boxSize}px;
	border: 2px solid ${colors.cyan};
	border-radius: 10px;
`
