import styled from 'styled-components/native'

import { Text } from '@styles/global.style'

export const FieldContainer = styled.View``

export const Label = styled(Text)`
	text-transform: uppercase;
	font-size: 10px;
	font-weight: bold;
`

export const Value = styled(Text)`
	color: ${({ theme }) => theme.colors.textPrimary};
`

export const Ul = styled.View``

export const Li = styled.View`
	flex-direction: row;
	margin-left: 10px;
`
