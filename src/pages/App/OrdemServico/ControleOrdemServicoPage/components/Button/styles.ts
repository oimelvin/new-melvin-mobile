import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'

export const ButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${colors.gray100};
	padding: 16px;
	border-radius: 16px;
`

export const Label = styled(Text)`
	font-size: 16px;
	font-weight: bold;
`
