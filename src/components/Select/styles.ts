import styled, { DefaultTheme } from 'styled-components/native'

import colors from '@styles/colors.style'
import { ThemedStyledProps } from 'styled-components'
import { View } from 'react-native'

export const SelectModalContainer = styled.Modal.attrs({
	animationType: 'fade',
	presentationStyle: 'overFullScreen',
	transparent: true,
})``

export const SelectModalOverlay = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const SelectModal = styled.View`
	width: 90%;
	height: 75%;
	border-radius: 25px;
	padding: 16px;
	background-color: ${colors.gray900};
	elevation: 2;
`

export const SelectEmptyList = styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
`

type SelectItemProps = ThemedStyledProps<
	React.RefAttributes<View> & {
		selected?: boolean
	},
	DefaultTheme
>

export const SelectItem = styled.View<SelectItemProps>`
	height: 40px;
	justify-content: center;
	padding: 0 16px;
	border-radius: 16px;
	background-color: ${({ selected }) =>
		selected ? colors.gray500 : colors.gray900};
`
