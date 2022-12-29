import styled from 'styled-components/native'

import colors from '@styles/colors.style'

export const FABContainer = styled.View`
	position: absolute;
	bottom: 16px;
	right: 16px;
	background-color: ${() => colors.cyan};
	padding: 16px;
	border-radius: 50px;
`
