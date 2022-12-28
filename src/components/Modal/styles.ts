import styled, { DefaultTheme } from 'styled-components/native'

import colors from '@styles/colors.style'
import { ThemedStyledProps } from 'styled-components'
import { View } from 'react-native'

export const ModalContainer = styled.Modal.attrs({
	animationType: 'fade',
	presentationStyle: 'overFullScreen',
	transparent: true,
})``

export const ModalOverlay = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

type ModalViewProps = ThemedStyledProps<
	React.RefAttributes<View> & {
		padding?: boolean
	},
	DefaultTheme
>

export const ModalView = styled.View<ModalViewProps>`
	width: 90%;
	height: 75%;
	border-radius: 25px;
	padding: ${({ padding }) => (padding ? 16 : 0)}px;
	background-color: ${colors.white};
	elevation: 2;
`
