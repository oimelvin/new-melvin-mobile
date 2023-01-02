import { Alert, View, Text, TouchableOpacity } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'
import { i18n } from '@languages/index'
import ListaSolicitacaoServicoHeader from '../ListaSolicitacaoServicoHeader'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { AppStackNavigatorParamList } from '@routes/AppRoutes'
import { useNavigation } from '@react-navigation/native'

interface SolicitacaoAcoesComponent {}
type SolicitacaoAcoesPageProp = BottomTabNavigationProp<
	AppStackNavigatorParamList,
	'CarteiraServicosPage'
>

const SolicitacaoAcoesComponent: React.FC = () => {
	const { navigate } = useNavigation<SolicitacaoAcoesPageProp>()
	return(
	<>
		<View style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						marginTop: 16,
					}}>
			<TouchableOpacity onPress={() => navigate('CarteiraServicosPage')}>
				<IconButton style={{backgroundColor: '#E0E0E0', height: 50, width: 50, borderRadius: 25}}
					provider="materialIcons"
					iconName="today"
					onPress={() => navigate('CarteiraServicosPage')}
				/>
				<Text style={{textAlign: 'center'}}>{`Minhas\n OS`}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate('SolicitacaoServicosPage')}>
				<IconButton style={{backgroundColor: '#E0E0E0', height: 50, width: 50, borderRadius: 25}}
					provider="materialIcons"
					iconName="menu"
					onPress={() => navigate('SolicitacaoServicosPage')}
				/>
				<Text style={{textAlign: 'center'}}>{`Pesquisar\n SS`}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate('NovaSolicitacaoComponent')}>
				<IconButton style={{backgroundColor: '#E0E0E0', height: 50, width: 50, borderRadius: 25}}
					provider="feather"
					iconName="file-plus"
					onPress={() => navigate('NovaSolicitacaoComponent')}
				/>
				<Text style={{textAlign: 'center'}}>{`Abrir\n SS`}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate('CarteiraServicosPage')}>
				<IconButton style={{backgroundColor: '#E0E0E0', height: 50, width: 50, borderRadius: 25}}
					provider="feather"
					iconName="search"
					onPress={() => navigate('CarteiraServicosPage')}
				/>
				<Text style={{textAlign: 'center'}}>{`Pesquisar\n OS`}</Text>
			</TouchableOpacity>
			<View>
				<IconButton style={{backgroundColor: '#E0E0E0', height: 50, width: 50, borderRadius: 25}}
					provider="feather"
					iconName="folder-plus"
				/>
				<Text style={{textAlign: 'center'}}>{`Abrir\n OS`}</Text>
			</View>
			
		</View>
		<MarginTop value={16} />
	</>
	)

}

export default SolicitacaoAcoesComponent
