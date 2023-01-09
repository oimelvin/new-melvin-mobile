import styled from 'styled-components/native'

import { Text } from '@styles/global.style'

export const DatePreviousNextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const DateContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

export const DayText = styled(Text)`
	text-transform: uppercase;
	font-weight: bold;
`
