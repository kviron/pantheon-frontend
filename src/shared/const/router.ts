export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    DOWNLOADS = 'downloads',
    PROFILE = 'profile',
    FORBIDDEN = 'forbidden',
    LIBRARY = 'library',
    Login = 'login',
    Forgot = 'forgot',
    Register = 'register'
}

export const getRouteMain = () => '/'
export const getRouteSettings = () => '/settings'
export const getRouteDownLoads = () => '/downloads'
export const getRouteGames = () => '/games'
export const getRouteGameDetails = (id: string) => `/game/${id}`
export const getRouteLibrary = () => '/library'
export const getRouteForbidden = () => '/forbidden'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteLogin = () => `/login`
export const getRouteRegister = () => `/register`
export const getRouteForgot = () => `/forgot`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteDownLoads()]: AppRoutes.DOWNLOADS,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteLibrary()]: AppRoutes.LIBRARY,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteLogin()]: AppRoutes.Login,
    [getRouteRegister()]: AppRoutes.Register
}
