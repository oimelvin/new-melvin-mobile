import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import { ButtonOpacity, Text } from '@styles/global.style'

export const CardButtonContainer = styled(ButtonOpacity)`
	flex: 1;
	background-color: ${colors.gray900};
	border-radius: 16px;
	padding: 16px 8px;
`

export const CardButtonLabel = styled(Text)`
	text-align: center;
	text-transform: uppercase;
	color: ${colors.white};
	font-size: 12px;
`
