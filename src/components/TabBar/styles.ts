import { Platform } from 'react-native'
import styled from 'styled-components/native'

import { ButtonOpacity } from '@styles/global.style'
import colors from '@styles/colors.style'

export const TabBarContainer = styled.View`
	background-color: ${colors.white};
	height: ${() => (Platform.OS === 'ios' ? 80 : 70)}px;
	flex-direction: row;
	align-items: center;
	padding-bottom: ${() => (Platform.OS === 'ios' ? 15 : 0)}px;
`

export const TabSelected = styled.View`
	width: 24px;
	height: 2px;
	margin-top: 5px;
	border-radius: 24px;
	background-color: ${colors.cyan};
	align-self: center;
`

export const TabButtonCenter = styled(ButtonOpacity)`
	height: 45px;
	background-color: ${colors.black};
	border-radius: 24px;
	justify-content: center;
	align-items: center;
`
