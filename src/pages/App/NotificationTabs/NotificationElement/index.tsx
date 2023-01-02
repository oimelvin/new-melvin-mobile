import React from 'react'
import { FlatList, View } from 'react-native'

import StatusBar from '@components/StatusBar'
import { Text } from '@styles/global.style'
import colors from '@styles/colors.style'
import { NotificacaoDto } from '@models/NotificacaoDto'

interface NotificacaoProps {
	notificacao: NotificacaoDto
}

const NotificationComponent: React.FC<NotificacaoProps> = ({
	notificacao: {
		titulo,
		descricao
	},
}) => {
	return (
		<View style={{ flex: 1}}>
			<StatusBar />
			<Text style={{color: 'white', fontSize: 14}}>{titulo}</Text>
			<Text style={{color: '#B3B3B3', fontSize: 12}}>{descricao}</Text>
		</View>
	)
}

export default NotificationComponent
