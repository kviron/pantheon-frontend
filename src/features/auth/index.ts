import { authService } from './model/auth.service'
import { LoginForm } from './ui/login.form.ui'
import { AuthRegisterForm, AuthLoginForm } from './model/auth.types'
import { authTokenService, ETokens } from './model/auth.token.service'
import { useAuth } from './hooks/useAuth'
import { AuthEntry } from './auth.entry'
import { RegisterForm } from '@/features/auth/ui/register.form.ui'
import { authProtector } from '@/features/auth/model/auth.protector'

export { useAuth, authService, authTokenService, ETokens }

export { LoginForm, RegisterForm, AuthEntry, authProtector }

export type { AuthRegisterForm, AuthLoginForm }
