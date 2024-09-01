import { validationCommonRules, ValidationObject } from '@/features/validation'
import { AuthForgotForm, AuthLoginForm, AuthRegisterForm } from './auth.types'

export const loginValidation: ValidationObject<AuthLoginForm> = {
    email: validationCommonRules.email,
    password: validationCommonRules.password
}

export const registerValidation: ValidationObject<AuthRegisterForm> = {
    ...validationCommonRules,
    phone: []
}

export const forgotValidation: ValidationObject<AuthForgotForm> = {
    email: validationCommonRules.email
}
