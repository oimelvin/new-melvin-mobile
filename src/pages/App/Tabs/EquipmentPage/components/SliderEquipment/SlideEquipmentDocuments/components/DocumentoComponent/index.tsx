import React from 'react'
import * as Linking from 'expo-linking'

import { Container, Row } from '@styles/global.style'
import { DocumentName } from './styles'
import IconButton from '@components/IconButton'
import colors from '@styles/colors.style'
import { BASE_URL_FILES } from '@services/apiFiles'

type DocumentoProps = {
  name: string
  path: string
}

const DocumentoComponent: React.FC<DocumentoProps> = ({ name, path }) => (
	<Container>
		<Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
			<DocumentName>{name}</DocumentName>
			<IconButton
				provider="materialCommunityIcons"
				iconName="eye"
				color={colors.cyan}
				onPress={() => Linking.openURL(`${BASE_URL_FILES}${path}`)}
			/>
		</Row>
	</Container>
)

export default DocumentoComponent
