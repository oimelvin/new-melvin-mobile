import api, { HttpResponse, Items } from '@services/api'
import { OrdemServicoApontamento } from '@models/OrdemServicoApontamento'

interface OrdemServicoServiceApontamentosHookProps {
	getOrdensServicosApontamentos(
		skipCount: number,
		maxResultCount: number,
		idOrdemServico: string,
		buscaRapida?: string,
		isActive?: boolean
	): Promise<Items<OrdemServicoApontamento>>
}

const useOrdemServicoApontamentosService =
	(): OrdemServicoServiceApontamentosHookProps => {
		const getOrdensServicosApontamentos = async (
			skipCount: number,
			maxResultCount: number,
			idOrdemServico: string,
			buscaRapida?: string,
			isActive?: boolean
		): Promise<Items<OrdemServicoApontamento>> => {
			const { data } = await api.get<
				HttpResponse<Items<OrdemServicoApontamento>>
			>('services/app/OrdemServicoApontamento/GetAll', {
				params: {
					idOrdemServico,
					keyword: buscaRapida,
					isActive,
					skipCount,
					maxResultCount,
				},
			})

			return data.result
		}

		return {
			getOrdensServicosApontamentos,
		}
	}

export default useOrdemServicoApontamentosService
