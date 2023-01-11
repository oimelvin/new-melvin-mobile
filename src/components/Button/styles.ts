import { ColorValue } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Text, ButtonOpacity } from '@styles/global.style'

type ButtonContainerProps = {
	backgroundColor: ColorValue
	borderColor: ColorValue
}

export const ButtonContainer = styled(ButtonOpacity)<ButtonContainerProps>`
	${({ backgroundColor, borderColor }) => css`
		background-color: ${backgroundColor.toString()};
		border: 2px solid ${borderColor.toString()};
		border-radius: 16px;
		justify-content: center;
		align-items: center;
		padding: 16px;
	`}
`

type ButtonTextProps = {
	color: ColorValue
}

export const ButtonText = styled(Text)<ButtonTextProps>`
	${({ color }) => css`
		color: ${color.toString()};
		font-size: 12px;
		text-transform: uppercase;
	`}
`
