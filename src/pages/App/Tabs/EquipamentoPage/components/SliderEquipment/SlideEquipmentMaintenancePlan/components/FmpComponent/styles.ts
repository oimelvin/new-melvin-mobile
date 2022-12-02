import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const FmpTitle = styled(Text)`
  color: ${() => colors.black};
  font-weight: bold;
  text-transform: uppercase;
`

export const FmpDescription = styled(Text)`
  color: ${() => colors.black};
  text-transform: uppercase;
`
