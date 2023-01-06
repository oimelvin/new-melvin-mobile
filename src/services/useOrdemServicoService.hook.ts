import { OrdemServico } from '@models/OrdemServico'
import api, { HttpResponse, Items } from '@services/api'

interface OrdemServicoServiceHookProps {
	getOrdensServicos(
		skipCount: number,
		maxResultCount: number,
		idsEquipamento?: string[],
		idsOficina?: string[],
		idsTipoManutencao?: string[],
		idsFamilia?: string[],
		idsExecutantes?: string[],
		status?: string[],
		condicao?: string,
		statusTempo?: string,
		pesquisa?: string,
		isActive?: boolean,
		osAbertas?: boolean
	): Promise<Items<OrdemServico>>
	getOrdemServico(id: string): Promise<OrdemServico>
	postOrdemServico(ordemServico: Partial<OrdemServico>): Promise<void>
}

const useOrdemServicoService = (): OrdemServicoServiceHookProps => {
	const getOrdensServicos = async (
		skipCount: number,
		maxResultCount: number,
		idsEquipamento?: string[],
		idsOficina?: string[],
		idsTipoManutencao?: string[],
		idsFamilia?: string[],
		idsExecutantes?: string[],
		status?: string[],
		condicao?: string,
		statusTempo?: string,
		pesquisa?: string,
		isActive?: boolean,
		osAbertas?: boolean
	): Promise<Items<OrdemServico>> => {
		const { data } = await api.post<HttpResponse<Items<OrdemServico>>>(
			'services/app/OrdemServico/GetCarteiraServico',
			{
				idsEquipamento,
				idsOficina,
				idsTipoManutencao,
				idsFamilia,
				idsExecutantes,
				status,
				condicao,
				statusTempo,
				keyword: pesquisa,
				isActive,
				osAbertas,
				skipCount,
				maxResultCount,
			}
		)

		return data.result
	}

	const getOrdemServico = async (id: string): Promise<OrdemServico> => {
		const { data } = await api.get<HttpResponse<OrdemServico>>(
			'services/app/OrdemServico/Get',
			{
				params: {
					id,
				},
			}
		)

		return data.result
	}

	const postOrdemServico = async (
		ordemServico: Partial<OrdemServico>
	): Promise<void> => {
		await api.post<OrdemServico>(
			'services/app/OrdemServico/Create',
			ordemServico
		)
	}

	return {
		getOrdensServicos,
		getOrdemServico,
		postOrdemServico,
	}
}

export default useOrdemServicoService
