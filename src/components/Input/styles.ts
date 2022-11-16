import styled from 'styled-components/native'
import { DefaultTheme, ThemedStyledProps } from 'styled-components'
import { ColorValue, View, ViewProps } from 'react-native'

import { KeyboardAvoidingView, Text } from '@styles/global.style'
import colors from '@styles/colors.style'

export const InputContainer = styled(KeyboardAvoidingView)``

export const InputLabel = styled(Text)`
  font-weight: bold;
  margin-left: 25px;
`

type TextInputBorderProps = ThemedStyledProps<
  ViewProps &
    React.RefAttributes<View> & {
      borderColor?: ColorValue
    },
  DefaultTheme
>

export const TextInputBorder = styled.View<TextInputBorderProps>`
  flex-direction: row;
  padding: 16px 32px;
  border: 2px solid
    ${({ borderColor }) =>
		borderColor ? borderColor.toString() : colors.black};
  border-radius: 50px;
`

type TextInputProps = ThemedStyledProps<
  ViewProps &
    React.RefAttributes<View> & {
      color?: ColorValue
    },
  DefaultTheme
>

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  height: 28px;
  color: ${({ color }) => (color ? color.toString() : colors.black)};
`

export const FixedText = styled(Text)`
  flex: 1;
  line-height: 28px;
  vertical-align: middle;
  font-size: 14px;
  color: ${({ color }) => (color ? color.toString() : colors.black)};
`

export const ButtonTextInputContainer = styled.View`
  position: absolute;
  right: 0;
  margin: 16px;
`

export const InfoContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`

type InfoTextProps = ThemedStyledProps<
  ViewProps &
    React.RefAttributes<View> & {
      color?: ColorValue
    },
  DefaultTheme
>

export const ErrorText = styled(Text)<InfoTextProps>`
  flex-wrap: wrap;
  flex-shrink: 1;
  color: ${({ color }) => (color ? color.toString() : colors.red)};
`

export const InfoText = styled(Text)<InfoTextProps>`
  flex-wrap: wrap;
  flex-shrink: 1;
  color: ${({ color }) => (color ? color.toString() : colors.gray500)};
`
