import { PrioridadeCor } from './PrioridadeCor'
import { PrioridadeIcone } from './PrioridadeIcone'

export interface Prioridade {
	id: string
	descricao: string
	idCor: PrioridadeCor
	idIcone: PrioridadeIcone
	indDefault: boolean
}
