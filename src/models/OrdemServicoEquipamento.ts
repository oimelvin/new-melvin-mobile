import { Equipamento } from './Equipamento'
import { Filial } from './Filial'
import { Setor } from './Setor'
import { SubConjuntoEquipamento } from './SubConjuntoEquipamento'

export interface OrdemServicoEquipamento {
	id?: string
	idOrdemServico?: string
	idFilial: string
	idSetor: string
	idEquipamento: string
	idSubConjuntoEquipamento?: string
	filial?: Filial
	setor?: Setor
	equipamento?: Equipamento
	subConjuntoEquipamento?: SubConjuntoEquipamento
}
