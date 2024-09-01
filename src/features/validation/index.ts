import { emailValidationRules } from './model/email.validation'
import { genderValidationRules } from './model/gender.validation'
import { nicknameValidationRules } from './model/nikname.validation'
import { passwordValidationRules } from './model/password.validation'
import { ValidationObject } from './model/validation.types'

const validationCommonRules = {
    email: emailValidationRules,
    password: passwordValidationRules,
    gender: genderValidationRules,
    nickname: nicknameValidationRules
}

export { validationCommonRules }

export type { ValidationObject }
