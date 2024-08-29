import i18n from '@/shared/config/i18n.config'
import { Rule } from 'antd/es/form'

export const emailValidationRules: Rule[] = [
    {
        required: true,
        message: i18n.t('auth', 'Enter email')
    },
    {
        type: 'email',
        message: i18n.t('auth', 'Invalid E-mail format')
    }
]
