import i18n from '@/shared/config/i18n.config'
import { Rule } from 'antd/es/form'

i18n.setDefaultNamespace('auth')

export const passwordValidationRules: Rule[] = [
    {
        required: true,
        message: i18n.t('Enter password')
    },
    {
        min: 8,
        message: i18n.t('Password must be at least 8 characters')
    }
]
