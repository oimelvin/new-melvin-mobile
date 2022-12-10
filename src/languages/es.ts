import { LanguageProps } from './languageProps'

const es: LanguageProps = {
	common: {
		language: 'Español',
		error: 'Error',
		anErrorHasOccuredPleaseTryAgain:
			'Se ha producido un error, inténtelo de nuevo.',
	},
	components: {
		select: {
			typeForSearch: 'Escribe para buscar',
			noItemsFound: 'No se encontraron elementos.',
			clean: 'Limpiar',
		},
	},
	home: {
		trial: '14 días de prueba gratuita',
		signIn: 'Ya tengo un registro',
		talkConsultant: 'Habla con un consultor',
	},
	signInUsernameOrEmail: {
		typeUsernameOrEmail: 'Escribe su usuario o correo electrónico',
		requiredUsernameOrEmail: 'Usuario o correo electrónico son requeridos.',
		next: 'Siguiente',
	},
	signInPassword: {
		attention: 'Atención',
		typePassword: 'Escribe tu contraseña.',
		requiredPassword: 'Contraseña es requerida.',
		signIn: 'Iniciar sesión en',
	},
	equipment: {
		manualSearch: 'Búsqueda manual',
		qrCodeSearch: 'Búsqueda QRCode',
		searchThe: 'Buscar el',
		equipment: 'Activo',
		technicalData: 'Datos técnicos',
		searchRequest: 'Búsqueda de peticiones',
		openRequest: 'Abrir petición',
		searchWorkOrder: 'Búsqueda orden de servicio',
		openWorkOrder: 'Abrir orden de servicio',
		equipmentPhoto: 'Foto del equipo',
		mainInfo: 'Información fundamental',
		tag: 'Tag',
		name: 'Nombre',
		families: 'Familias',
		operatingData: 'Datos operativos',
		noData: 'Sin datos',
		startOperation: 'Inicio de operación',
		uptime: 'Tiempo de actividad',
		hoursADay: 'horas al día',
		daysAWeek: 'días a la semana',
		criticality: 'Criticidad',
		underWarrantyUntil: 'En garantía hasta',
		supplier: 'Proveedor',
		underContractUntil: 'En contrato hasta',
		maintenancePlan: 'Plan de Mantenimiento',
		characteristics: {
			title: 'Características',
			noSetFound: 'No se encontraron conjuntos.',
			noSubSetFound: 'No se encontraron subconjuntos.',
		},
		documents: 'Documentación',
	},
	searchEquipmentManually: {
		searchEquipment: 'Buscar equipo',
		selectABranch: 'Seleccione una sucursal:',
		noBranchesFound: 'No se encontró ninguna sucursal.',
		selectASector: 'Seleccione un sector:',
		noSectorsFound: 'No se encontró ningún sector.',
		selectAFamily: 'Seleccione una familia:',
		noFamiliesFound: 'No se encontró ninguna familia.',
		selectAStatus: 'Seleccione un estado:',
		noStatusFound: 'No se encontró ningún estado.',
		selectAnEquipment: 'Seleccione un equipo:',
		noEquipmentFound: 'No se encontró ningún equipo.',
		equipmentRequired: 'Equipo es requerido.',
		seeEquipment: 'Ver Equipo',
	},
	searchEquipmentQRCode: {
		requestingCameraPermission: 'Solicitando permiso para usar la cámara.',
		permissionDenied:
			'Sin acceso a la cámara, por favor verifique las permisos.',
		verifyPermission: 'Verificar permisos',
		readEquipmentQrCode: 'Leer código QR del activo',
	},
	workOrders: {
		workOrders: 'Ordenes de trabajo',
		servicesPortfolio: 'Cartera de servicios',
		schedule: 'Programación',
		serviceRequest: 'Solicitud de servicio',
		noWorkOrderFound: 'No se ha encontrado ninguna orden de trabajo.',
	},
	material: {
		materials: 'Materiales',
		generalData: 'Datos Generales',
		searchMaterial: 'Búsqueda material',
		singleReservation: 'Reserva individual',
		searchProvider: 'Búsqueda proveedor',
		registerProvider: 'Registrar proveedor',
	},
	dashboard: {
		dashboard: 'Dashboard',
	},
	melvin: {
		myShortcuts: 'Mis atajos',
	},
	notifications: {
		title: 'Notificaciones',
		select: 'Seleccione',
		cancel: 'Cancelar',
		toYou: 'Para ti',
		myMessages: 'Mis mensajes',
		sent: 'Enviadas',
	},
	account: {
		myData: 'Mis datos',
		invite: 'Invitar',
		portability: 'Portabilidad',
		config: 'Configuraciones de cuenta',
		signOut: 'Cerrar sesión',
		attention: 'Atención',
	},
}

export default es
