import 'i18next'
import translation from '/locales/en/translation.json'
import profile from '/locales/en/profile.json'
import application from '/locales/en/application.json'
import auth from '/locales/en/auth.json'
import navigate from '/locales/en/navigate.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            translation: typeof translation
            profile: typeof profile
            application: typeof application
            auth: typeof auth
            navigate: typeof navigate
        }
    }
}
