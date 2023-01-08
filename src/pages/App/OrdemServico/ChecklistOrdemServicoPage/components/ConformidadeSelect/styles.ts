import styled, { DefaultTheme } from 'styled-components/native'
import { TextProps } from 'react-native'
import { ThemedStyledProps } from 'styled-components'

import { ButtonOpacity, Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const ConformidadeSelectButtonOpacity = styled(ButtonOpacity)`
	flex: 1;
`

export const ConformidadeSelectContainer = styled.View`
	flex: 1;
	align-items: center;
`

type ConformidadeSelectTextProps = ThemedStyledProps<
	TextProps &
		React.RefAttributes<Text> & {
			type: 'C' | 'NC'
			selected?: boolean
		},
	DefaultTheme
>

const getSelectTextColor = ({
	type,
	selected,
}: ConformidadeSelectTextProps) => {
	if (!selected) {
		return colors.black
	}

	if (type === 'C') {
		return colors.green
	}

	return colors.red
}

export const ConformidadeSelectText = styled(Text)<ConformidadeSelectTextProps>`
	flex: 1;
	padding: 16px;
	align-items: center;
	text-transform: uppercase;
	color: ${props => getSelectTextColor(props)};
	font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`
