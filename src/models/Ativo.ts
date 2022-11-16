import { AtivoCriticidade } from './AtivoCriticidade'
import { Contrato } from './Contrato'
import { FamiliaEquipamento } from './FamiliaEquipamento'
import { Garantia } from './Garantia'

export interface Ativo {
	id: string
	tag: string
	idFamilia: string
	idSetor: string
	idFilial: string
	idFamilias: string[]
	familias: FamiliaEquipamento[] | null
	descricao: string
	descricaoCompleta: string
	imagem: string
	nomeImagem: string
	inicioOperacao: Date
	horasDia: number
	diasSemana: number
	indCriticidadeManual: boolean
	criticidadeTotal: number
	criticidadeTotalTexto: string
	codFornecedorManutencao: number
	garantia: Garantia | null
	contrato: Contrato | null
	criticidadeAmbiental: AtivoCriticidade[] | null
	criticidadeQualidade: AtivoCriticidade[] | null
	criticidadeOperacional: AtivoCriticidade[] | null
	isActive: boolean
	dataInativo: Date
	dataFabricacao: Date
	tempoAtendimento: number
	indPreditiva: boolean
	indPreventiva: boolean
	indInspecao: boolean
	indLubrificacao: boolean
	indCorretiva: boolean
	idCatalogo: string
	codigoIntegracao: string
	cpf: string
	idEqupamentoOrigem: string
	tempoMaxAtendimentoPreventivo: number
	tipoAtendimentoPreventivo: number
	tempoMaxAtendimentoCorretivo: number
	tipoAtendimentoCorretivo: number
	idsUsuarioPermisao: number[]
}
