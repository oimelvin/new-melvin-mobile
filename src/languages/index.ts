import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import en from './en'
import pt from './pt'
import es from './es'

const normalizeTranslate = (locale: string) => {
	switch (locale) {
		case 'pt':
		case 'pt-BR':
			return 'pt'
		case 'en':
		case 'en-US':
			return 'en'
		case 'es':
		case 'es-ES':
			return 'es'
		default:
			return 'en'
	}
}

i18n.fallbacks = true
i18n.defaultLocale = 'en'
i18n.translations = { en, pt, es }
i18n.locale = normalizeTranslate(Localization.locale)

const moment = require('moment/min/moment-with-locales')

moment.locale(i18n.locale)

export { i18n, moment }
