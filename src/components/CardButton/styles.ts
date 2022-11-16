import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import { ButtonOpacity, Text } from '@styles/global.style'

export const CardButtonContainer = styled(ButtonOpacity)`
  flex: 1;
  background-color: ${colors.gray900};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-top: 16px;
  margin: 0 8px;
`

export const CardButtonLabelContainer = styled.View`
  background-color: ${colors.gray500};
  padding: 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  align-items: center;
`

export const CardButtonLabel = styled(Text)`
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 12px;
`
