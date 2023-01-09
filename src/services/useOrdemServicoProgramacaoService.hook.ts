import api, { HttpResponse, Items } from '@services/api'
import { OrdemServico } from '@models/OrdemServico'

interface OrdemServicoProgramacaoServiceHookProps {
	getOrdensServicosProgramacao(
		dataProgramacao?: Date,
		idsExecutantes?: string[],
		idsOficinas?: string[],
		semana?: number,
		ano?: number,
		indAtivo?: boolean,
		idOrdemServico?: string
	): Promise<Items<OrdemServico>>
}

const useOrdemServicoProgramacaoService =
	(): OrdemServicoProgramacaoServiceHookProps => {
		const getOrdensServicosProgramacao = async (
			dataProgramacao?: Date,
			idsExecutantes?: string[],
			idsOficinas?: string[],
			semana?: number,
			ano?: number,
			indAtivo?: boolean,
			idOrdemServico?: string
		): Promise<Items<OrdemServico>> => {
			const { data } = await api.get<HttpResponse<Items<OrdemServico>>>(
				'services/app/OrdemServicoProgramacao/GetList',
				{
					params: {
						semana,
						ano,
						indAtivo,
						idOrdemServico,
						dataProgramacao,
						idsExecutantes,
						idsOficinas,
					},
				}
			)

			return data.result
		}

		return {
			getOrdensServicosProgramacao,
		}
	}

export default useOrdemServicoProgramacaoService
