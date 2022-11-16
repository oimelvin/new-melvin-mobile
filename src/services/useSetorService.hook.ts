import { Setor } from '@models/Setor'
import api, { HttpResponse, Items } from '@services/api'

interface SetorServiceHookProps {
  getSetores(idFilial: string): Promise<Setor[]>
}

const useSetorService = (): SetorServiceHookProps => {
	const getSetores = async (idFilial: string): Promise<Setor[]> => {
		const { data } = await api.get<HttpResponse<Items<Setor>>>(
			'services/app/Setor/GetList',
			{
				params: {
					idFilial,
				},
			}
		)

		return data.result.items
	}

	return {
		getSetores,
	}
}

export default useSetorService
