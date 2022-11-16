import React, { useEffect, useState } from 'react'

import { i18n } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import useAtivo from '../../../ativo.context'
import { Documento } from '@models/Documento'
import useAtivoService from '@services/useAtivoService.hook'
import DocumentoComponent from './components/DocumentoComponent'

const SlideEquipmentDocuments: React.FC = () => {
	const { ativo } = useAtivo()

	const [documentos, setDocumentos] = useState<Documento[] | null>(null)

	const { getDocumentosAtivoById } = useAtivoService()

	useEffect(() => {
		const loadDocumentos = async () => {
			setDocumentos(await getDocumentosAtivoById(ativo!.id))
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
