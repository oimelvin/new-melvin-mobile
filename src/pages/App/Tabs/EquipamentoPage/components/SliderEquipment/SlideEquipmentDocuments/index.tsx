import React, { useEffect, useState } from 'react'

import { i18n } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import useEquipamento from '../../../equipamento.context'
import { Documento } from '@models/Documento'
import useEquipamentoService from '@services/useOrdemServicoService.hook'
import DocumentoComponent from './components/DocumentoComponent'

const SlideEquipmentDocuments: React.FC = () => {
	const { equipamento } = useEquipamento()

	const [documentos, setDocumentos] = useState<Documento[] | null>(null)

	const { getDocumentosEquipamentoById } = useEquipamentoService()

	useEffect(() => {
		const loadDocumentos = async () => {
			setDocumentos(await getDocumentosEquipamentoById(equipamento!.id))
		}

		loadDocumentos()
	}, [])

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.documents')}</SlideTitle>
			<MarginTop value={16} />
			{documentos?.map(documento => (
				<DocumentoComponent
					key={documento.id}
					name={documento.descricao}
					path={documento.path}
				/>
			))}
		</ScrollView>
	)
}

export default SlideEquipmentDocuments
