import { useAuth } from '@/features/auth'

export const useCurrentUser = () => {
    const { currentUser } = useAuth()

    return {
        currentUser
    }
}
