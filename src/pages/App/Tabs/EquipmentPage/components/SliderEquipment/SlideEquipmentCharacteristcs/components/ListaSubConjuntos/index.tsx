import React from 'react'

import { i18n } from '@languages/index'

import { MarginTop, Text } from '@styles/global.style'

import { SubConjuntoEquipamento } from '@models/SubConjuntoEquipamento'
import { AccordionItem } from '../Accordion/styles'

interface ListaSubConjuntosProps {
  subConjuntos: SubConjuntoEquipamento[] | null
  onLongPress(
    id: string,
    tipo: 'A' | 'C' | 'S',
    tag: string,
    descricao: string
  ): void
}

const ListaSubConjuntos: React.FC<ListaSubConjuntosProps> = ({
	subConjuntos,
	onLongPress,
}) => {
	if (!subConjuntos || subConjuntos.length == 0) {
		return (
			<>
				<Text align="center">
					{i18n.t('equipment.characteristics.noSubSetFound')}
				</Text>
				<MarginTop value={8} />
			</>
		)
	}

	return subConjuntos.map(subConjunto => (
		<AccordionItem
			key={subConjunto.id}
			title={subConjunto.tag}
			description={subConjunto.descricao}
			style={{ marginLeft: 32 }}
			onLongPress={() =>
				onLongPress(subConjunto.id, 'S', subConjunto.tag, subConjunto.descricao)
			}
		/>
	))
}

export default ListaSubConjuntos
