import React from 'react'

import { NotificationListItemContainer, NotificationTitle } from './styles'
import { MarginTop, Text } from '@styles/global.style'

const NotificationListItem: React.FC = () => (
	<NotificationListItemContainer>
		<Text>13:53</Text>
		<MarginTop value={5} />
		<NotificationTitle>Transação PIX feita com sucesso!</NotificationTitle>
		<MarginTop value={5} />
		<Text>
      Sua Transação PIX no valor de R$ 100,00 foi concluída com sucesso.
		</Text>
	</NotificationListItemContainer>
)

export default NotificationListItem
