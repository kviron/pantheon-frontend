import { useNavigate } from 'react-router-dom'
import { useAuth, AuthEntry } from '@/features/auth'
import { getRouteLogin } from '@/shared/const/router.ts'
import { useEffect } from 'react'
import { MainEntry } from '@/features/mainEntry'

const App = () => {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(getRouteLogin())
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
        return <AuthEntry />
    }

    return <MainEntry />
}

export default App
