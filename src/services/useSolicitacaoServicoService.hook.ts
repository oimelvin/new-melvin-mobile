import { SolicitacaoServico } from "@models/SolicitacaoServico";
import api, { HttpResponse, Items } from "./api";

interface SolicitacaoServicoServiceHookProps {
	getSolicitacoes(
		skipCount: number,
		maxResultCount: number,
		status: string | undefined,
		keyword: string | undefined,
		isActive: boolean | undefined
	): Promise<Items<SolicitacaoServico>>
}

const useSolicitacaoServicoService = (): SolicitacaoServicoServiceHookProps => {
	const getSolicitacoes = async (
		skipCount: number,
		maxResultCount: number,
		status: string | undefined,
		keyword: string | undefined,
		isActive: boolean | undefined
	): Promise<Items<SolicitacaoServico>> => {
		const { data } = await api.get<HttpResponse<Items<SolicitacaoServico>>>(
			'services/app/SolicitacaoServico/GetAll',
			{
				params: {
					skipCount,
					status,
					keyword,
					isActive,
					maxResultCount,
				},
			}
		)

		return data.result
	}

	return {
		getSolicitacoes,
	}
}

export default useSolicitacaoServicoService