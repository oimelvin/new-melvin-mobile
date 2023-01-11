import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const IconButtonContainer = styled.View`
	justify-content: center;
	align-items: center;
	width: 60px;
`

export const IconContainer = styled.View`
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	border: 2px solid ${colors.cyan};
	background-color: ${colors.gray100};
	border-radius: 50%;
`

export const IconButtonLabel = styled(Text)`
	font-size: 10px;
	text-align: center;
`
