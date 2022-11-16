import styled from 'styled-components/native'

import { Text, ButtonOpacity } from '@styles/global.style'

const ButtonContainer = styled(ButtonOpacity)`
  border: 2px solid transparent;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

export const ButtonContainerFill = styled(ButtonContainer)`
  background-color: ${props => props.theme.colors.accent};
  border-color: ${props => props.theme.colors.accent};
`

export const ButtonContainerOutline = styled(ButtonContainer)`
  background-color: transparent;
  border-color: ${props => props.theme.colors.buttonOutlineText};
`

export const ButtonContainerFillDisabled = styled(ButtonContainer)`
  background-color: ${props => props.theme.colors.buttonDisabled};
  border-color: ${props => props.theme.colors.buttonDisabled};
`

export const ButtonContainerOutlineDisabled = styled(ButtonContainer)`
  border-color: ${props => props.theme.colors.buttonDisabled};
`

export const TextButton = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
`

export const TextButtonFill = styled(TextButton)`
  color: ${props => props.theme.colors.buttonFillText};
`

export const TextButtonOutline = styled(TextButton)`
  color: ${props => props.theme.colors.buttonOutlineText};
`

export const TextButtonFillDisabled = styled(TextButton)`
  color: ${props => props.theme.colors.buttonFillDisabledText};
`

export const TextButtonOutlineDisabled = styled(TextButton)`
  color: ${props => props.theme.colors.buttonOutlineDisabledText};
`
