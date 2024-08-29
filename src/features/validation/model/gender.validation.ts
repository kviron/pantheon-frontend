import i18n from '@/shared/config/i18n.config'
import { Rule } from 'antd/es/form'

export const genderValidationRules: Rule[] = [
    {
        required: true,
        message: i18n.t('auth', 'Please select gender')
    }
]
