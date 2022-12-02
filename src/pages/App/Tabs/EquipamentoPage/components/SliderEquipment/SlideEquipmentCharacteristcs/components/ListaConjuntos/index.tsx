import React from 'react'
import { List } from 'react-native-paper'

import { i18n } from '@languages/index'

import { MarginTop, Text } from '@styles/global.style'
import ListaSubConjuntos from '../ListaSubConjuntos'

import { ConjuntoEquipamento } from '@models/ConjuntoEquipamento'
import { Accordion } from '../Accordion/styles'

interface ListaConjuntosProps {
  iconRight({ isExpanded }: { isExpanded: boolean }): React.ReactElement
  conjuntos: ConjuntoEquipamento[] | null
  onLongPress(
    id: string,
    tipo: 'A' | 'C' | 'S',
    tag: string,
    descricao: string
  ): void
}

const ListaConjuntos: React.FC<ListaConjuntosProps> = ({
	conjuntos,
	iconRight,
	onLongPress,
}) => {
	if (!conjuntos || conjuntos.length == 0) {
		return (
			<>
				<Text align="center">
					{i18n.t('equipment.characteristics.noSetFound')}
				</Text>
				<MarginTop value={8} />
			</>
		)
	}

	return (
		<List.AccordionGroup>
			{conjuntos?.map(conjunto => (
				<Accordion
					id={conjunto.id}
					key={conjunto.id}
					title={conjunto.tag}
					description={conjunto.descricao}
					right={iconRight}
					style={{ marginLeft: 16 }}
					onLongPress={() =>
						onLongPress(conjunto.id, 'C', conjunto.tag, conjunto.descricao)
					}
				>
					<ListaSubConjuntos
						subConjuntos={conjunto.subConjuntos}
						onLongPress={onLongPress}
					/>
				</Accordion>
			))}
		</List.AccordionGroup>
	)
}

export default ListaConjuntos
