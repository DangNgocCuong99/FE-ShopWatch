import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import lang from './language/vi-Vn'

const resources = {
    vn:{
        translation: lang
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:'vn',
    interpolation: {
        escapeValue: false, 
        skipOnVariables:false
    },
})

export default i18n