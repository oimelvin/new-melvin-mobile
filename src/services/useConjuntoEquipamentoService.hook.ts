import { Caracteristica } from '@models/Caracteristica'
import { ConjuntoEquipamento } from '@models/ConjuntoEquipamento'
import api, { HttpResponse, Items } from '@services/api'

interface ConjuntoEquipamentoServiceHookProps {
  getConjuntosEquipamentoById(id: string): Promise<ConjuntoEquipamento[]>
  getCaracteristicasConjuntoEquipamentoById(
    id: string
  ): Promise<Caracteristica[]>
}

const useConjuntoEquipamentoService =
  (): ConjuntoEquipamentoServiceHookProps => {
  	const getConjuntosEquipamentoById = async (
  		id: string
  	): Promise<ConjuntoEquipamento[]> => {
  		const { data } = await api.get<HttpResponse<Items<ConjuntoEquipamento>>>(
  			'services/app/ConjuntoEquipamento/GetConjuntos',
  			{
  				params: {
  					idEquipamento: id,
  				},
  			}
  		)

  		return data.result.items
  	}

  	const getCaracteristicasConjuntoEquipamentoById = async (
  		id: string
  	): Promise<Caracteristica[]> => {
  		const { data } = await api.get<HttpResponse<Items<Caracteristica>>>(
  			'services/app/ConjuntoEquipamento/GetAllCaracteristicas',
  			{
  				params: {
  					idConjuntoEquipamento: id,
  				},
  			}
  		)

  		return data.result.items
  	}

  	return {
  		getConjuntosEquipamentoById,
  		getCaracteristicasConjuntoEquipamentoById,
  	}
  }

export default useConjuntoEquipamentoService
