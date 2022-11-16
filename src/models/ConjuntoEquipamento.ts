import { SubConjuntoEquipamento } from './SubConjuntoEquipamento'

export interface ConjuntoEquipamento {
	id: string
	idEquipamento: string
	tag: string
	descricao: string
	idConjuntoEquipamentoOrigem: string
	subConjuntos: SubConjuntoEquipamento[] | null
}
