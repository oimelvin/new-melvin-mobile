import api, { HttpResponse, Items } from '@services/api'
import { OrdemServicoAcoes } from '@models/OrdemServicoAcoes'

interface OrdemServicoServiceAcoesHookProps {
	getOrdensServicosAcoes(
		skipCount: number,
		maxResultCount: number,
		idOrdemServico: string,
		buscaRapida?: string,
		isActive?: boolean
	): Promise<Items<OrdemServicoAcoes>>
}

const useOrdemServicoAcoesService = (): OrdemServicoServiceAcoesHookProps => {
	const getOrdensServicosAcoes = async (
		skipCount: number,
		maxResultCount: number,
		idOrdemServico: string,
		buscaRapida?: string,
		isActive?: boolean
	): Promise<Items<OrdemServicoAcoes>> => {
		const { data } = await api.get<HttpResponse<Items<OrdemServicoAcoes>>>(
			'services/app/OrdemServicoCheckList/GetAll',
			{
				params: {
					idOrdemServico,
					keyword: buscaRapida,
					isActive,
					skipCount,
					maxResultCount,
				},
			}
		)

		return data.result
	}

	return {
		getOrdensServicosAcoes,
	}
}

export default useOrdemServicoAcoesService
