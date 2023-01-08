import styled from 'styled-components/native'

import { Text, ButtonOpacity } from '@styles/global.style'

export const ButtonContainer = styled(ButtonOpacity)`
	border: 2px solid transparent;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	padding: 16px;
`

export const TextButton = styled(Text)`
	font-size: 12px;
	text-transform: uppercase;
`
