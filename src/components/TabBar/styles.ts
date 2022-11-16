import styled from 'styled-components/native'

import { ButtonOpacity } from '@styles/global.style'

export const TabBarContainer = styled.View`
	background-color: ${({ theme }) => theme.colors.background};
	height: 65px;
	flex-direction: row;
	align-items: center;
`

export const TabSelected = styled.View`
	width: 24px;
	height: 2px;
	margin-top: 5px;
	border-radius: 24px;
	background-color: ${({ theme }) => theme.colors.accent};
	align-self: center;
`

export const TabButtonCenter = styled(ButtonOpacity)`
	height: 45px;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 24px;
	justify-content: center;
	align-items: center;
`
