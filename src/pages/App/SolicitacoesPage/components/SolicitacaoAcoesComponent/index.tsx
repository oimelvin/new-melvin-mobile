import { Alert, View, Text } from 'react-native'

import { MarginTop, Title } from '@styles/global.style'
import IconButton from '@components/IconButton'
import { i18n } from '@languages/index'
import ListaSolicitacaoServicoHeader from '../ListaSolicitacaoServicoHeader'

interface SolicitacaoAcoesComponent {}

const SolicitacaoAcoesComponent: React.FC = () => (
	<>
		<View style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						marginTop: 16,
					}}>
			<View>
				<IconButton
					provider="materialIcons"
					iconName="attach-file"
				/>
				<Text>Minhas OS</Text>
			</View>
			<View>
				<IconButton
					provider="ionicons"
					iconName="chevron-back"
				/>
				<Text>Pesquisar SS</Text>
			</View>
			<View>
				<IconButton
					provider="ionicons"
					iconName="chevron-back"
				/>
				<Text>Abrir SS</Text>
			</View>
			<View>
				<IconButton
					provider="ionicons"
					iconName="chevron-back"
				/>
				<Text>Pesquisar OS</Text>
			</View>
			<View>
				<IconButton
					provider="ionicons"
					iconName="chevron-back"
				/>
				<Text>Abrir OS</Text>
			</View>
			
		</View>
		<MarginTop value={16} />
	</>
)

export default SolicitacaoAcoesComponent
