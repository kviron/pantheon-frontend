import { LoginForm } from '@/features/auth'
import { useParams } from 'react-router-dom'

export const LoginPage = () => {
    let { from } = useParams()

    return <LoginForm />
}
