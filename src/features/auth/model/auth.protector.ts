import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { authService } from '@/features/auth'

export const authProtector = ({ request }: LoaderFunctionArgs) => {
    if (!authService.getIsAuthenticated()) {
        let params = new URLSearchParams()
        params.set('from', new URL(request.url).pathname)
        return redirect('/login?' + params.toString())
    }

    return null
}
