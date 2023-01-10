import api, { HttpResponse, Items } from '@services/api'
import { OrdemServicoAssinatura } from '@models/OrdemServicoAssinatura'

interface OrdemServicoServiceAssinaturaHookProps {
	getOrdensServicosAssinatura(
		skipCount: number,
		maxResultCount: number,
		idOrdemServico: string
	): Promise<Items<OrdemServicoAssinatura>>
}

const useOrdemServicoAssinaturaService =
	(): OrdemServicoServiceAssinaturaHookProps => {
		const getOrdensServicosAssinatura = async (
			skipCount: number,
			maxResultCount: number,
			idOrdemServico: string
		): Promise<Items<OrdemServicoAssinatura>> => {
			const { data } = await api.get<
				HttpResponse<Items<OrdemServicoAssinatura>>
			>('services/app/OrdemServicoAssinatura/GetAll', {
				params: {
					idOrdemServico,
					skipCount,
					maxResultCount,
				},
			})

			return data.result
		}

		return {
			getOrdensServicosAssinatura,
		}
	}

export default useOrdemServicoAssinaturaService
