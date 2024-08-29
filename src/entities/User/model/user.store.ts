import { create } from 'zustand'
import { User } from './user.types'
import { createSelectors } from '@/shared/utils'
import { authService } from '@/features/auth'

export type UserState = {
    user: Nullable<User>
    isInit: boolean
}

type UserActions = {
    setUser: (user: User) => void
    init: () => void
    reset: () => void
}

// define the initial state
const initialState: UserState = {
    user: null,
    isInit: false
}

const useUserSchema = create<UserState & UserActions>(set => ({
    ...initialState,
    init: () => {
        authService.getIsAuthenticated()
        set({ isInit: true })
    },
    setUser: (user: User) => set({ user }),
    reset: () => set(initialState)
}))

export const useUserStore = createSelectors(useUserSchema)
