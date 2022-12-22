import { Prioridade } from '@models/Prioridade'
import api, { HttpResponse, Items } from '@services/api'

interface PrioridadeServiceHookProps {
	getPrioridades(): Promise<Prioridade[]>
}

const usePrioridadeService = (): PrioridadeServiceHookProps => {
	const getPrioridades = async (): Promise<Prioridade[]> => {
		const { data } = await api.get<HttpResponse<Items<Prioridade>>>(
			'services/app/Prioridade/GetPrioridade'
		)

		return data.result.items
	}

	return {
		getPrioridades,
	}
}

export default usePrioridadeService
