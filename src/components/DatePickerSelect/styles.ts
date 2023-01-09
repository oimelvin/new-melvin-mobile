import styled, { DefaultTheme } from 'styled-components/native'

import colors from '@styles/colors.style'
import { ThemedStyledProps } from 'styled-components'
import { View } from 'react-native'

export const DatePickerModalContainer = styled.Modal.attrs({
	animationType: 'fade',
	presentationStyle: 'overFullScreen',
	transparent: true,
})``

export const DatePickerModalOverlay = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const DatePickerModal = styled.View`
	width: 90%;
	border-radius: 25px;
	padding: 16px;
	background-color: ${colors.gray900};
	elevation: 2;
`
