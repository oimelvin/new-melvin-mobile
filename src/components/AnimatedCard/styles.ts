import { Animated, View, ViewProps } from 'react-native'
import { DefaultTheme, ThemedStyledProps } from 'styled-components'
import styled from 'styled-components/native'

type CardEquipmentContainerProps = ThemedStyledProps<
  ViewProps &
    React.RefAttributes<View> & {
      cardHeight: number
    },
  DefaultTheme
>

const CardContainer = styled.View<CardEquipmentContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding-top: 16px;
  padding-bottom: 0;
  height: ${({ cardHeight }) => cardHeight}px;
`

export const AnimatedCardContainer =
  Animated.createAnimatedComponent(CardContainer)
