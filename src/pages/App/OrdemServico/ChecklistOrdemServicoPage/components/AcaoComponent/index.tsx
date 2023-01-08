import React from 'react'
import { View } from 'react-native'

import { MarginTop, Text } from '@styles/global.style'
import { AcaoContainer, AcaoName, AcaoRow } from './styles'
import ConformidadeSelect from '../ConformidadeSelect'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'

import { i18n } from '@languages/index'

type AcaoProps = {
	acao: OrdemServicoAcoes
}

const AcaoComponent: React.FC<AcaoProps> = ({ acao }) => (
	<AcaoContainer>
		<View style={{ padding: 16 }}>
			<AcaoName>{acao.descricaoAcao}</AcaoName>
			<MarginTop value={5} />
			{(acao.idOrdemNaoConformidade || acao.idSolicitacao) && (
				<Text>
					{`${i18n.t('actionComponent.linkedWorkerService')} #${
						acao.codOrdemNaoConformidade
					}`}
				</Text>
			)}
		</View>
		<AcaoRow>
			<ConformidadeSelect
				type="NC"
				selected={!!acao.idOrdemNaoConformidade || !!acao.idSolicitacao}
			/>
			<ConformidadeSelect type="C" selected={acao.conforme} />
		</AcaoRow>
	</AcaoContainer>
)

export default AcaoComponent
