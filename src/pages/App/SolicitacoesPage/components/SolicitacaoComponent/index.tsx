import { memo } from 'react'
import { Alert, View } from 'react-native'
import { Avatar, ProgressBar } from 'react-native-paper'

import Icon from '@components/Icon'
import colors from '@styles/colors.style'
import {
	ButtonOpacity,
	Container,
	MarginRight,
	MarginTop,
	Text,
} from '@styles/global.style'
import { SolicitacaoServico } from '@models/SolicitacaoServico'

interface OrdemServicoProps {
	solicitacao: SolicitacaoServico
}

const SolicitacaoServicoComponent: React.FC<OrdemServicoProps> = ({
	solicitacao: {
		solicitacao,
		codigo,
		prioridade,
		equipamento,
		status,
		solicitante,
		canal
	},
}) => {
	const descricaoEquipamento = `${equipamento.tag} - ${equipamento.descricao}`;
	const getCanalIcon = (canal: number) => {
		switch (canal) {
			case 1:
				return 'phone';
			case 2:
				return 'email-outline';
			case 3:
				return 'file-upload';
			case 4:
				return 'account';
			default:
				return 'phone'
		}
	}

	const getCor = (cor: any) => {
		switch (cor) {
		  case 1:
			return colors.blue;
		  case 2:
			return colors.orange;
		  case 3:
			return colors.purple;
		  case 4:
			return colors.green;
		  case 5:
			return colors.red;
		  default:
			return colors.red;
		}
	}

	return (
		<ButtonOpacity
			onPress={() =>
				Alert.alert(
					'Detalhes da ordem de serviço',
					'Funcionalidade ainda não implementada.'
				)
			}
		>
			<Container>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						SS: {codigo}
					</Text>
					<View
						style={{
							flexDirection: 'row',
						}}
					>
						<Icon
							provider="materialIcons"
							iconName="warning"
							color={getCor(prioridade.idCor)}
							size={24}
						/>
						<MarginRight value={16} />
						<Icon
							provider="materialIcons"
							iconName={getCanalIcon(canal)}
							size={24}
						/>
						<MarginRight value={16} />
						<Avatar.Text
							size={24}
							label={solicitante[0].toUpperCase()}
							style={{ backgroundColor: colors.gray900 }}
						/>
					</View>
				</View>
				<MarginTop value={16} />
				<View>
					<Text style={{ fontWeight: 'bold' }}>{solicitacao}</Text>
				</View>
				<MarginTop value={16} />
				<View>
					<Text>{descricaoEquipamento}</Text>
				</View>
				<MarginTop value={16} />
				<View>
					<ProgressBar
						progress={status / 7}
						color={colors.green}
						style={{
							backgroundColor: colors.gray100,
							borderRadius: 16,
						}}
					/>
				</View>
			</Container>
		</ButtonOpacity>
	)
}

export default memo(SolicitacaoServicoComponent)
