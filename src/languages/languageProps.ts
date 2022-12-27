export type LanguageProps = {
	common: {
		language: string
		error: string
		anErrorHasOccuredPleaseTryAgain: string
		noData: string
	}
	components: {
		select: {
			select: string
			typeForSearch: string
			noItemsFound: string
			clean: string
		}
		datePicker: {
			select: string
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
	filterServicePortfolio: {
		filterServicePortfolio: string
		branch: string
		selectABranch: string
		noBranchesFound: string
		sector: string
		selectASector: string
		noSectorsFound: string
		equipment: string
		selectAnEquipment: string
		noEquipmentsFound: string
		set: string
		selectASet: string
		noSetsFound: string
		status: string
		selectAStatus: string
		noStatusFound: string
		workshop: string
		selectAWorkshop: string
		noWorkshopsFound: string
		maintenanceType: string
		selectAMaintenanceType: string
		noMaintenanceTypesFound: string
		condition: string
		selectACondition: string
		priority: string
		selectAPriority: string
		noPrioritiesFound: string
		executor: string
		selectAnExecutor: string
		noExecutorsFound: string
		openingDate: string
		selectAnOpeningDate: string
		closingDate: string
		selectAClosingDate: string
		scheduleDate: string
		selectAScheduleDate: string
		search: string
		searchWorkOrders: string
		filterWorkOrders: string
	}
	workOrders: {
		workOrders: string
		servicesPortfolio: string
		schedule: string
		serviceRequest: string
		noWorkOrderFound: string
	}
	workOrderDetails: {
		openingDate: string
		startExecutionDate: string
		endExecutionDate: string
		requestDate: string
		issueDate: string
		startScheduleDate: string
		endScheduleDate: string
		closingDate: string
		cancellationDate: string
		approvalDate: string
		explanation: string
		guidance: string
		man: string
		hour: string
		manHour: string
		notes: string
		cost: string
		situation: string
		condition: string
		status: string
		statusTime: string
		history: string
		maintenanceType: string
		priority: string
		workshop: string
		approver: string
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
