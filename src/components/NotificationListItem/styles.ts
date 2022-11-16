import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'

export const NotificationListItemContainer = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray500};
`

export const NotificationTitle = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`
