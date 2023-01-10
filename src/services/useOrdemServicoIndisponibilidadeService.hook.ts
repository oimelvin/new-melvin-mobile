import api, { HttpResponse, Items } from '@services/api'
import { OrdemServicoIndisponibilidade } from '@models/OrdemServicoIndisponibilidade'

interface OrdemServicoServiceIndisponibilidadeHookProps {
	getOrdensServicosIndisponibilidade(
		skipCount: number,
		maxResultCount: number,
		idOrdemServico: string,
		buscaRapida?: string,
		isActive?: boolean
	): Promise<Items<OrdemServicoIndisponibilidade>>
}

const useOrdemServicoIndisponibilidadeService =
	(): OrdemServicoServiceIndisponibilidadeHookProps => {
		const getOrdensServicosIndisponibilidade = async (
			skipCount: number,
			maxResultCount: number,
			idOrdemServico: string,
			buscaRapida?: string,
			isActive?: boolean
		): Promise<Items<OrdemServicoIndisponibilidade>> => {
			const { data } = await api.get<
				HttpResponse<Items<OrdemServicoIndisponibilidade>>
			>('services/app/OrdemServicoIndisponibilidade/GetAll', {
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
			getOrdensServicosIndisponibilidade,
		}
	}

export default useOrdemServicoIndisponibilidadeService
