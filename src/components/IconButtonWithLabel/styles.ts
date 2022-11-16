import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import IconButton from '../IconButton'

export const IconButtonContainer = styled.View`
	width: 60px;
`

export const IconButtonLabel = styled(Text)`
	font-size: 10px;
	text-align: center;
`

export const StyledIconButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  border-radius: 30px
  background-color: ${({ theme }) => theme.colors.surface};
`
