import { LanguageProps } from './languageProps'

const en: LanguageProps = {
	common: {
		language: 'English',
		error: 'Error',
		anErrorHasOccuredPleaseTryAgain:
			'An error has occurred, please try again.',
		noData: 'No data',
	},
	components: {
		select: {
			select: 'Select',
			typeForSearch: 'Type for search',
			noItemsFound: 'No items found.',
			clean: 'Clean',
		},
		datePicker: {
			select: 'Select',
			clean: 'Clean',
		},
	},
	home: {
		trial: 'Free 14 day trial',
		signIn: 'Already have an account',
		talkConsultant: 'Talk to a consultant',
	},
	signInUsernameOrEmail: {
		typeUsernameOrEmail: 'Type your username or e-mail.',
		requiredUsernameOrEmail: 'Username or e-mail address is required.',
		next: 'Next',
	},
	signInPassword: {
		attention: 'Attention',
		typePassword: 'Type your password.',
		requiredPassword: 'Password is required.',
		signIn: 'Sign in',
	},
	equipment: {
		manualSearch: 'Manual search',
		qrCodeSearch: 'QRCode search',
		searchThe: 'Search the',
		equipment: 'Equipment',
		technicalData: 'Technical data',
		searchRequest: 'Search request',
		openRequest: 'Open request',
		searchWorkOrder: 'Search work order',
		openWorkOrder: 'Open work order',
		equipmentPhoto: 'Equipment photo',
		mainInfo: 'Main info',
		tag: 'Tag',
		name: 'Name',
		families: 'Families',
		operatingData: 'Operating data',
		startOperation: 'Start of operation',
		uptime: 'Uptime',
		hoursADay: 'hours a day',
		daysAWeek: 'days a week',
		criticality: 'Criticality',
		underWarrantyUntil: 'Under warranty until',
		supplier: 'Supplier',
		underContractUntil: ' Under contract until',
		maintenancePlan: 'Maintenance plan',
		characteristics: {
			title: 'Characteristics',
			noSetFound: 'No sets found.',
			noSubSetFound: 'No subsets found.',
		},
		documents: 'Documents',
	},
	searchEquipmentManually: {
		searchEquipment: 'Search equipment',
		selectABranch: 'Select a branch',
		noBranchesFound: 'No branches found.',
		selectASector: 'Select a sector',
		noSectorsFound: 'No sectors found.',
		selectAFamily: 'Select a family',
		noFamiliesFound: 'No families found.',
		selectAStatus: 'Select a status',
		noStatusFound: 'No status found.',
		selectAnEquipment: 'Select an equipment',
		noEquipmentFound: 'No equipment found',
		equipmentRequired: 'Equipment is required.',
		seeEquipment: 'See Equipment',
	},
	searchEquipmentQRCode: {
		requestingCameraPermission: 'Requesting camera permission',
		permissionDenied: 'No camera access, please check permissions.',
		verifyPermission: 'Verify permissions',
		readEquipmentQrCode: 'Read equipment QR code',
	},
	filterServicePortfolio: {
		filterServicePortfolio: 'Filter service portfolio',
		status: 'Status',
		selectAStatus: 'Select a status',
		noStatusFound: 'No status found.',
		workshop: 'Workshop',
		selectAWorkshop: 'Select a workshop',
		noWorkshopsFound: 'No workshop found.',
		maintenanceType: 'Maintenance type',
		selectAMaintenanceType: 'Select a maintenance type',
		noMaintenanceTypesFound: 'No maintenance types found.',
		condition: 'Condition',
		selectACondition: 'Select a condition',
		priority: 'Priority',
		selectAPriority: 'Select a priority',
		noPrioritiesFound: 'No priorities found.',
		executor: 'Executor',
		selectAnExecutor: 'Select an executor',
		noExecutorsFound: 'No executors found.',
		openingDate: 'Opening date',
		selectAnOpeningDate: 'Select an opening date',
		closingDate: 'Closing date',
		selectAClosingDate: 'Select a closing date',
		scheduleDate: 'Schedule date',
		selectAScheduleDate: 'Select a schedule date',
		search: 'Search',
		searchWorkOrders: 'Search work orders',
		filterWorkOrders: 'Filter work orders',
	},
	workOrders: {
		workOrders: 'Work orders',
		servicesPortfolio: 'Services portfolio',
		schedule: 'Schedule',
		serviceRequest: 'Service request',
		noWorkOrderFound: 'No work orders found.',
	},
	addWorkOrder: {
		addWorkOrder: 'Add work order',
		editWorkOrder: 'Edit work order',
		description: 'Description',
		informADescription: 'Inform a description.',
		maintenanceType: 'Maintenance type',
		selectAMaintenanceType: 'Select a maintenance type',
		noMaintenanceTypesFound: 'No maintenance types found.',
		workshop: 'Workshop',
		selectAWorkshop: 'Select a workshop',
		noWorkshopsFound: 'No workshops found.',
		condition: 'Condition',
		selectACondition: 'Select a condition',
		priority: 'Priority',
		selectAPriority: 'Select a priority',
		noPrioritiesFound: 'No priorities found.',
		peopleNumber: 'People number',
		informAPeopleNumber: 'Inform a people number.',
		executionTime: 'Execution time',
		informAnExecutionTime: 'Inform an execution time',
		manHour: 'Man-hour',
		branch: 'Branch',
		selectABranch: 'Select a branch',
		noBranchesFound: 'No branches found.',
		sector: 'Sector',
		selectASector: 'Select a sector',
		noSectorsFound: 'No sectors found.',
		equipment: 'Equipment',
		selectAnEquipment: 'Select an equipment',
		noEquipmentsFound: 'No equipments found.',
		set: 'Set',
		selectASet: 'Select a set',
		noSetsFound: 'No sets found.',
		add: 'Add',
	},
	workOrderDetails: {
		openingDate: 'Opening date',
		startExecutionDate: 'Start execution date',
		endExecutionDate: 'End execution date',
		requestDate: 'Request date',
		issueDate: 'Issue date',
		startScheduleDate: 'Start schedule date',
		endScheduleDate: 'End schedule date',
		closingDate: 'Closing date',
		cancellationDate: 'Cancellation date',
		approvalDate: 'Approval date',
		explanation: 'Explanation',
		guidance: 'Guidance',
		man: 'Man',
		hour: 'Hour',
		manHour: 'Man-hour',
		notes: 'Notes',
		cost: 'Cost',
		situation: 'Situation',
		condition: 'Condition',
		status: 'Status',
		statusTime: 'Status time',
		history: 'History',
		maintenanceType: 'Maintenance type',
		priority: 'Priority',
		workshop: 'Workshop',
		approver: 'Approver',
	},
	schedule: {
		schedule: 'Schedule',
		noWorkOrderFound: 'No work orders found.',
	},
	material: {
		materials: 'Materials',
		generalData: 'General data',
		searchMaterial: 'Search material',
		singleReservation: 'Single reservation',
		searchProvider: 'Search provider',
		registerProvider: 'Register provider',
	},
	dashboard: {
		dashboard: 'Dashboard',
	},
	melvin: {
		myShortcuts: 'My shortcuts',
	},
	notifications: {
		title: 'Notifications',
		select: 'Select',
		cancel: 'Cancel',
		toYou: 'To you',
		myMessages: 'My messages',
		sent: 'Sent',
	},
	account: {
		myData: 'My data',
		invite: 'Invite',
		portability: 'Portability',
		config: 'Account configurations',
		signOut: 'Sign out',
		attention: 'Attention',
	},
}

export default en
