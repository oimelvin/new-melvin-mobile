import styled from 'styled-components/native'

import colors from '@styles/colors.style'
import IconButtonWithLabel from '@components/IconButtonWithLabel'

export const AcoesOrdemServicoContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 16px;
`
export const AcoesOrdemServicoIconButton = styled(IconButtonWithLabel)`
	border: 2px solid ${() => colors.cyan};
	background-color: ${() => colors.white};
`
