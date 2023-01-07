import { Equipamento } from '@models/Equipamento'
import { Caracteristica } from '@models/Caracteristica'
import { Documento } from '@models/Documento'
import api, { HttpResponse, Items } from '@services/api'

interface EquipamentoServiceHookProps {
	getEquipamentos(
		idFilial: string | undefined,
		idSetor: string | undefined,
		idFamilia: string | undefined,
		status: string | undefined,
		pesquisa: string | undefined
	): Promise<Equipamento[]>
	getEquipamentosBySetor(idSetor: string): Promise<Equipamento[]>
	getEquipamentoById(id: string): Promise<Equipamento>
	getDocumentosEquipamentoById(id: string): Promise<Documento[]>
	getCaracteristicasEquipamentoById(id: string): Promise<Caracteristica[]>
}

const useEquipamentoService = (): EquipamentoServiceHookProps => {
	const getEquipamentos = async (
		idFilial: string | undefined,
		idSetor: string | undefined,
		idFamilia: string | undefined,
		status: 'P' | 'F' | undefined,
		pesquisa: string | undefined
	): Promise<Equipamento[]> => {
		const { data } = await api.get<HttpResponse<Items<Equipamento>>>(
			'services/app/Equipamento/GetEquipamentosSelectList',
			{
				params: {
					idFilial,
					idSetor,
					idFamilia,
					status: status === 'F' || true,
					keyWord: pesquisa,
				},
			}
		)

		return data.result.items
	}

	const getEquipamentosBySetor = async (
		idSetor: string | undefined
	): Promise<Equipamento[]> => {
		const { data } = await api.get<HttpResponse<Items<Equipamento>>>(
			'services/app/Equipamento/GetEquipamentos',
			{
				params: {
					idSetor,
				},
			}
		)

		return data.result.items
	}

	const getEquipamentoById = async (id: string): Promise<Equipamento> => {
		const { data } = await api.get<HttpResponse<Equipamento>>(
			'services/app/Equipamento/Get',
			{
				params: {
					id,
				},
			}
		)

		return data.result
	}

	const getDocumentosEquipamentoById = async (
		id: string
	): Promise<Documento[]> => {
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

	const getCaracteristicasEquipamentoById = async (
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
		getEquipamentos,
		getEquipamentosBySetor,
		getEquipamentoById,
		getDocumentosEquipamentoById,
		getCaracteristicasEquipamentoById,
	}
}

export default useEquipamentoService
