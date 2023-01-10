import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const Container = styled.View`
	padding: 16px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${colors.black};
	border-radius: 16px;
`

export const ExecutanteName = styled(Text)`
	font-weight: bold;
	text-transform: uppercase;
	color: ${() => colors.black};
`
