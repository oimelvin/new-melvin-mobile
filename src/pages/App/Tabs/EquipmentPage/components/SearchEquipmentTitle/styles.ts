import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import { SubTitle, Title } from '@styles/global.style'

export const EquipmentSubTitle = styled(SubTitle)`
  font-size: 12px;
  font-weight: normal;
  color: ${colors.gray100};
  text-transform: none;
`

export const EquipmentTitle = styled(Title)`
  font-weight: normal;
  color: ${colors.white};
  text-transform: none;
`
