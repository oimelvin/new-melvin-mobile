import { Filial } from '@models/Filial'
import api, { HttpResponse, Items } from '@services/api'

interface FilialServiceHookProps {
  getFiliais(): Promise<Filial[]>
}

const useFilialService = (): FilialServiceHookProps => {
	const getFiliais = async (): Promise<Filial[]> => {
		const { data } = await api.get<HttpResponse<Items<Filial>>>(
			'services/app/Filial/GetFiliais'
		)

		return data.result.items
	}

	return {
		getFiliais,
	}
}

export default useFilialService
