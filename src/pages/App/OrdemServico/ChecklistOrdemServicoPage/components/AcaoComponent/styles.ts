import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const AcaoContainer = styled.View`
	border: 2px solid ${() => colors.black};
	border-radius: 16px;
`

export const AcaoName = styled(Text)`
	text-transform: uppercase;
	color: ${() => colors.black};
	font-weight: bold;
`

export const AcaoRow = styled.View`
	flex: 1;
	flex-direction: row;
`
