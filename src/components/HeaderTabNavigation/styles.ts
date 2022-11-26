import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const HeaderTabNavigationContainer = styled.View`
	margin-top: ${() => (Platform.OS === 'ios' ? 24 : 0)}px;
	padding: 16px;
	flex-direction: row-reverse;
`
