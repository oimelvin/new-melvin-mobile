import styled from 'styled-components/native'
import { List } from 'react-native-paper'

import colors from '@styles/colors.style'

export const Accordion = styled(List.Accordion).attrs({
	titleStyle: {
		color: colors.black,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 12,
	},
	descriptionStyle: {
		color: colors.black,
		textTransform: 'uppercase',
		fontSize: 12,
	},
})`
  margin-bottom: 8px;
  background-color: ${colors.white};
  border-radius: 16px;
  border: 1px solid ${colors.black};
`

export const AccordionItem = styled(List.Item).attrs({
	titleStyle: {
		color: colors.black,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 12,
	},
	descriptionStyle: {
		color: colors.black,
		textTransform: 'uppercase',
		fontSize: 12,
	},
})`
  margin-bottom: 8px;
  background-color: ${colors.white};
  border-radius: 16px;
  border: 1px solid ${colors.black};
`
