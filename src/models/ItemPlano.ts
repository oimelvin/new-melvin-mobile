import { ConjuntoEquipamento } from './ConjuntoEquipamento'
import { Oficina } from './Oficina'
import { Periodicidade } from './Periodicidade'
import { TipoManutencao } from './TipoManutencao'

export interface ItemPlano {
	id: string
	descricao: string
	idEquipamento: string
	idOficina: string
	idTipoManutencao: string
	idPeriodicidade: string
	idConjuntoEquipamento: string
	condicao: boolean
	valorPeriodicidade: number
	pontualMaiorOuMenor: boolean
	sequencia: number
	oficina: Oficina | null
	tipoManutencao: TipoManutencao | null
	periodiciade: Periodicidade | null
	conjuntoEquipamento: ConjuntoEquipamento | null
}
