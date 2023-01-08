import { SolicitacaoServico } from '@models/SolicitacaoServico'
import api, { HttpResponse, Items } from './api'

interface SolicitacaoServicoServiceHookProps {
	getSolicitacoes(
		skipCount: number,
		maxResultCount: number,
		status: string | undefined,
		keyword: string | undefined,
		isActive: boolean | undefined
	): Promise<Items<SolicitacaoServico>>

	getSolicitacao(id: string): Promise<SolicitacaoServico>
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

	const getSolicitacao = async (id: string): Promise<SolicitacaoServico> => {
		const { data } = await api.get<HttpResponse<SolicitacaoServico>>(
			'services/app/SolicitacaoServico/Get',
			{
				params: {
					id,
				},
			}
		)

		return data.result
	}

	return {
		getSolicitacoes,
		getSolicitacao,
	}
}

export default useSolicitacaoServicoService
