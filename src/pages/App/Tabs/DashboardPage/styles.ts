import styled from 'styled-components/native'

import { Title } from '@styles/global.style'
import colors from '@styles/colors.style'

export const DashboardContainer = styled.View`
	flex: 1;
	justify-content: flex-end;
	padding: 16px;
`

export const DashboardTitle = styled(Title)`
	font-weight: normal;
	color: ${colors.white};
	text-transform: none;
`
