import { OrdemServico } from '@models/OrdemServico'
import api, { HttpResponse, Items } from '@services/api'

interface OrdemServicoServiceHookProps {
	getOrdensServicos(
		skipCount: number,
		maxResultCount: number,
		idsEquipamento: string[] | undefined,
		idsOficina: string[] | undefined,
		idsTipoManutencao: string[] | undefined,
		idsFamilia: string[] | undefined,
		idsExecutantes: string[] | undefined,
		status: string | undefined,
		condicao: string | undefined,
		statusTempo: string | undefined,
		pesquisa: string | undefined,
		isActive: boolean | undefined,
		osAbertas: boolean | undefined
	): Promise<Items<OrdemServico>>
}

const useOrdemServicoService = (): OrdemServicoServiceHookProps => {
	const getOrdensServicos = async (
		skipCount: number,
		maxResultCount: number,
		idsEquipamento: string[] | undefined,
		idsOficina: string[] | undefined,
		idsTipoManutencao: string[] | undefined,
		idsFamilia: string[] | undefined,
		idsExecutantes: string[] | undefined,
		status: string | undefined,
		condicao: string | undefined,
		statusTempo: string | undefined,
		pesquisa: string | undefined,
		isActive: boolean | undefined,
		osAbertas: boolean | undefined
	): Promise<Items<OrdemServico>> => {
		const { data } = await api.get<HttpResponse<Items<OrdemServico>>>(
			'services/app/OrdemServico/GetAll',
			{
				params: {
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
				},
			}
		)

		return data.result
	}

	return {
		getOrdensServicos,
	}
}

export default useOrdemServicoService
