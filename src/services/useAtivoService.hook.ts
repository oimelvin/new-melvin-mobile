import { Ativo } from '@models/Ativo'
import { Caracteristica } from '@models/Caracteristica'
import { Documento } from '@models/Documento'
import api, { HttpResponse, Items } from '@services/api'

interface AtivoServiceHookProps {
  getAtivos(
    idSetor: string | undefined,
    idFamilia: string | undefined
  ): Promise<Ativo[]>
  getAtivoById(id: string): Promise<Ativo>
  getDocumentosAtivoById(id: string): Promise<Documento[]>
  getCaracteristicasAtivoById(id: string): Promise<Caracteristica[]>
}

const useAtivoService = (): AtivoServiceHookProps => {
	const getAtivos = async (
		idSetor: string | undefined,
		idFamilia: string | undefined
	): Promise<Ativo[]> => {
		const { data } = await api.get<HttpResponse<Items<Ativo>>>(
			'services/app/Equipamento/GetEquipamentosSelectList',
			{
				params: {
					idSetor,
					idFamilia,
				},
			}
		)

		return data.result.items
	}

	const getAtivoById = async (id: string): Promise<Ativo> => {
		const { data } = await api.get<HttpResponse<Ativo>>(
			'services/app/Equipamento/Get',
			{
				params: {
					id,
				},
			}
		)

		return data.result
	}

	const getDocumentosAtivoById = async (id: string): Promise<Documento[]> => {
		const { data } = await api.get<HttpResponse<Items<Documento>>>(
			'services/app/Equipamento/GetAllDocumentos',
			{
				params: {
					idEquipamento: id,
				},
			}
		)

		return data.result.items
	}

	const getCaracteristicasAtivoById = async (
		id: string
	): Promise<Caracteristica[]> => {
		const { data } = await api.get<HttpResponse<Items<Caracteristica>>>(
			'services/app/Equipamento/GetAllCaracteristicas',
			{
				params: {
					idEquipamento: id,
				},
			}
		)

		return data.result.items
	}

	return {
		getAtivos,
		getAtivoById,
		getDocumentosAtivoById,
		getCaracteristicasAtivoById,
	}
}

export default useAtivoService
