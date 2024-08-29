import { validationCommonRules, ValidationObject } from '@/features/validation'
import { AuthForgotForm, AuthLoginForm, AuthRegisterForm } from './auth.types'
import i18n from '@/shared/config/i18n.config'

export const loginValidation: ValidationObject<AuthLoginForm> = {
    email: validationCommonRules.email,
    password: validationCommonRules.password
}

export const registerValidation: ValidationObject<AuthRegisterForm> = {
    email: validationCommonRules.email,
    password: validationCommonRules.password,
    nickname: [
        {
            required: true,
            message: i18n.t('Enter nickname')
        }
    ],
    phone: [],
    gender: validationCommonRules.gender
}

export const forgotValidation: ValidationObject<AuthForgotForm> = {
    email: validationCommonRules.email
}
