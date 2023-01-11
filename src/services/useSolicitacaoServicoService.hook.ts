import { SolicitacaoServico } from '@models/SolicitacaoServico'
import api, { HttpResponse, Items } from './api'

interface SolicitacaoServicoServiceHookProps {
	getSolicitacoesServico(
		skipCount: number,
		maxResultCount: number,
		status: string | undefined,
		keyword: string | undefined,
		isActive: boolean | undefined
	): Promise<Items<SolicitacaoServico>>

	getSolicitacaoServico(id: string): Promise<SolicitacaoServico>
	postSolicitacaoServico(
		solicitacaoServico: Partial<SolicitacaoServico>
	): Promise<SolicitacaoServico>
	putSolicitacaoServico(
		solicitacaoServico: Partial<SolicitacaoServico>
	): Promise<void>
}

const useSolicitacaoServicoService = (): SolicitacaoServicoServiceHookProps => {
	const getSolicitacoesServico = async (
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

	const postSolicitacaoServico = async (
		solicitacaoServico: Partial<SolicitacaoServico>
	): Promise<SolicitacaoServico> => {
		const { data } = await api.post<HttpResponse<SolicitacaoServico>>(
			'services/app/SolicitacaoServico/Create',
			solicitacaoServico
		)

		return data.result
	}

	const putSolicitacaoServico = async (
		solicitacaoServico: Partial<SolicitacaoServico>
	): Promise<void> => {
		await api.put<SolicitacaoServico>(
			'services/app/SolicitacaoServico/Update',
			solicitacaoServico
		)
	}

	const getSolicitacaoServico = async (
		id: string
	): Promise<SolicitacaoServico> => {
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
		getSolicitacoesServico,
		getSolicitacaoServico,
		postSolicitacaoServico,
		putSolicitacaoServico,
	}
}

export default useSolicitacaoServicoService
