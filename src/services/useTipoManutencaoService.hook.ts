import { TipoManutencao } from '@models/TipoManutencao'
import api, { HttpResponse, Items } from '@services/api'

interface TipoManutencaoServiceHookProps {
	getTiposManutencao(somentePeriodicos: boolean): Promise<TipoManutencao[]>
}

const useTipoManutencaoService = (): TipoManutencaoServiceHookProps => {
	const getTiposManutencao = async (
		somentePeriodicos: boolean
	): Promise<TipoManutencao[]> => {
		const { data } = await api.get<HttpResponse<Items<TipoManutencao>>>(
			'services/app/TipoManutencao/GetTiposManutencao',
			{
				params: {
					somentePeriodicos,
				},
			}
		)

		return data.result.items
	}

	return {
		getTiposManutencao,
	}
}

export default useTipoManutencaoService
