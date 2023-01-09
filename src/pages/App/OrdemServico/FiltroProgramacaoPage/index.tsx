import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { FiltroProgramacaoPageContainer } from './styles'
import colors from '@styles/colors.style'
import { KeyboardAvoidingView, MarginTop, Title } from '@styles/global.style'
import Button from '@components/Button'

import useFiltroProgramacaoHook from './hooks/useFiltroProgramacao.hook'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'

type FiltroProgramacaoPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'FiltroProgramacaoPage'
>

const FiltroProgramacaoPage: React.FC = () => {
	const { goBack } = useNavigation<FiltroProgramacaoPageProp>()

	const { data, handles } = useFiltroProgramacaoHook()

	const handleFiltrarProgramacao = () => {
		goBack()
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<FiltroProgramacaoPageContainer>
					<MarginTop value={15} />
					<Title color={colors.black}>Filtrar programação</Title>
					<MarginTop value={15} />
					<Button onPress={() => handleFiltrarProgramacao()}>
						Filtrar ordens de serviço
					</Button>
					<MarginTop value={32} />
				</FiltroProgramacaoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FiltroProgramacaoPage
