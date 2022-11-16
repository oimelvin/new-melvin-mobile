export interface User {
	id: number
	name: string
	fullName: string
	surname: string
	userName: string
	emailAddress: string
	password: string
	roleNames: string[]
	idPerfil: number
	cargo: string
	funcao: string
	idExecutante: string
	pathFoto: string
	dataProximaPesquisaOpiniao: Date
	isActive: boolean
	tenantId: string
	creationTime: Date
	creatorUserId: string
	lastModificationTime: Date
	lastModifierUserId: string
	isDeleted: boolean
	deleterUserId: string
	deletionTime: Date
	authenticationSource: string
}
