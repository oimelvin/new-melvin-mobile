import { Tenant } from './Tenant'
import { User } from './User'

export interface Fornecedor {
	id: string
	nome: string
	ramoAtividade: string
	contatos: string
	indExisteContrato: boolean
	indCadastradoERP: boolean
	avaliacaoQualidade: number
	avaliacaoCusto: number
	avaliacaoPrazo: number
	avalicaoGeral: number
	caminho: string
	endereco: string
	cidade: string
	estado: string
	contato: string
	email: string
	telefone: string
	cnpj: string
	tenantId: string
	tenant: Tenant
	creatorUserId: number
	creatorUser: User
	creationTime: Date
	lastModifierUserId: number
	lastModifierUser: User
	lastModificationTime: Date
	isDeleted: boolean
	deleterUserId: string
	deleterUser: User
	deletionTime: Date
}
