import { ValidationObject } from '@/shared/types/common'
import { AuthLoginForm, AuthRegisterForm } from './auth.types'
import i18n from '@/shared/config/i18n.config'

export const loginValidation: ValidationObject<AuthLoginForm> = {
    email: [
        {
            required: true,
            message: i18n.t('Enter email')
        },
        {
            type: 'email',
            message: i18n.t('Invalid E-mail format')
        }
    ],
    password: [
        {
            required: true,
            message: i18n.t('Enter password')
        }
    ]
}

export const registerValidation: ValidationObject<AuthRegisterForm> = {
    email: [
        {
            required: true,
            message: i18n.t('Enter email')
        },
        {
            type: 'email',
            message: i18n.t('Invalid E-mail format')
        }
    ],
    password: [
        {
            required: true,
            message: i18n.t('Enter password')
        },
        {
            min: 8,
            message: i18n.t('Password must be at least 8 characters')
        }
    ],
    nickname: [
        {
            required: true,
            message: i18n.t('Enter nickname')
        }
    ],
    phone: [],
    gender: [{ required: true, message: i18n.t('Please select gender') }]
}
