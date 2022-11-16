import styled from 'styled-components/native'

import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const DocumentName = styled(Text)`
  text-transform: uppercase;
  color: ${() => colors.black};
`
