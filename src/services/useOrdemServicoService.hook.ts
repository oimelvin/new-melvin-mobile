import api, { HttpResponse, Items } from '@services/api'
import { OrdemServico } from '@models/OrdemServico'

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
	putOrdemServico(ordemServico: Partial<OrdemServico>): Promise<void>
	putObservacaoOrdemServico(
		idOrdemServico: string,
		observacao: string,
		orientacao: string
	): Promise<void>
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

	const putOrdemServico = async (
		ordemServico: Partial<OrdemServico>
	): Promise<void> => {
		await api.put<OrdemServico>(
			'services/app/OrdemServico/Update',
			ordemServico
		)
	}

	const putObservacaoOrdemServico = async (
		idOrdemServico: string,
		observacao: string,
		orientacao: string
	): Promise<void> => {
		await api.put<OrdemServico>(
			'services/app/OrdemServico/UpdateObservacao',
			{
				idOrdemServico,
				observacao,
				orientacao,
			}
		)
	}

	return {
		getOrdensServicos,
		getOrdemServico,
		postOrdemServico,
		putOrdemServico,
		putObservacaoOrdemServico,
	}
}

export default useOrdemServicoService
