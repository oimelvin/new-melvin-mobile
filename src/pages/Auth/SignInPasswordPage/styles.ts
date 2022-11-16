import styled from 'styled-components/native'
import { SubTitle } from '@styles/global.style'

export const SignInPageContainer = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.primary};
`

export const HeaderContainer = styled.View`
  flex: 1;
  align-items: center;
`

export const LogoMelvin = styled.Image`
  position: absolute;
  top: 40px;
  width: 150px;
  height: 50px;
`

export const EmailText = styled(SubTitle)`
  text-align: center;
  text-transform: none;
  color: ${props => props.theme.colors.textPrimary};
`
