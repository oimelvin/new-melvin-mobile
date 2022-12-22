import { Oficina } from './Oficina'

export interface Executante {
	id: string
	nome: string
	ocupacao: string
	telefone: string
	email: string
	valorHora: number
	matricula: string
	isActive: boolean
	idOficina: string
	oficina: Oficina
	pathFoto: string
}
