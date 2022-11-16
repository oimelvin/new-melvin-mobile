import 'styled-components'

import { Theme } from './styles/theme.style'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
