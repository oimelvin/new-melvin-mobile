export type LanguageProps = {
	common: {
		language: string
		error: string
		anErrorHasOccuredPleaseTryAgain: string
	}
	components: {
		select: {
			typeForSearch: string
			noItemsFound: string
			clean: string
		}
	}
	home: {
		trial: string
		signIn: string
		talkConsultant: string
	}
	signInUsernameOrEmail: {
		typeUsernameOrEmail: string
		requiredUsernameOrEmail: string
		next: string
	}
	signInPassword: {
		attention: string
		typePassword: string
		requiredPassword: string
		signIn: string
	}
	equipment: {
		manualSearch: string
		qrCodeSearch: string
		searchThe: string
		equipment: string
		technicalData: string
		searchRequest: string
		openRequest: string
		searchWorkOrder: string
		openWorkOrder: string
		equipmentPhoto: string
		mainInfo: string
		tag: string
		name: string
		families: string
		operatingData: string
		noData: string
		startOperation: string
		uptime: string
		hoursADay: string
		daysAWeek: string
		criticality: string
		underWarrantyUntil: string
		supplier: string
		underContractUntil: string
		maintenancePlan: string
		characteristics: {
			title: string
			noSetFound: string
			noSubSetFound: string
		}
		documents: string
	}
	searchEquipmentManually: {
		searchEquipment: string
		selectABranch: string
		noBranchesFound: string
		selectASector: string
		noSectorsFound: string
		selectAFamily: string
		noFamiliesFound: string
		selectAStatus: string
		noStatusFound: string
		selectAnEquipment: string
		noEquipmentFound: string
		equipmentRequired: string
		seeEquipment: string
	}
	searchEquipmentQRCode: {
		requestingCameraPermission: string
		permissionDenied: string
		verifyPermission: string
		readEquipmentQrCode: string
	}
	workOrders: {
		workOrders: string
		servicesPortfolio: string
		schedule: string
		serviceRequest: string
		noWorkOrderFound: string
	}
	material: {
		materials: string
		generalData: string
		searchMaterial: string
		singleReservation: string
		searchProvider: string
		registerProvider: string
	}
	dashboard: {
		dashboard: string
	}
	melvin: {
		myShortcuts: string
	}
	notifications: {
		title: string
		select: string
		cancel: string
		toYou: string
		myMessages: string
		sent: string
	}
	account: {
		myData: string
		invite: string
		portability: string
		config: string
		signOut: string
		attention: string
	}
}
