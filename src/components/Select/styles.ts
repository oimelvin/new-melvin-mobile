import styled, { DefaultTheme } from 'styled-components/native'

import colors from '@styles/colors.style'
import { ThemedStyledProps } from 'styled-components'
import { View } from 'react-native'

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
		selected ? colors.gray100 : colors.white};
`
