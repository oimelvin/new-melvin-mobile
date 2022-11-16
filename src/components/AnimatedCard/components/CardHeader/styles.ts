import styled from 'styled-components/native'

import colors from '@styles/colors.style'

export const CardHeaderContainer = styled.View`
  width: 100%;
  height: 32px;
`

export const CardIndicator = styled.View`
  width: 60px;
  height: 3px;
  background-color: ${colors.gray500};
  border-radius: 24px;
  align-self: center;
`
