export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    Downloads = 'downloads',
    PROFILE = 'profile',
    GAMES = 'games',
    GAME_DETAILS = 'game_details',
    FORBIDDEN = 'forbidden',
    LIBRARY = 'library',
    Login = 'login',
    Register = 'register',
    // last
    NOT_FOUND = 'not_found'
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

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteDownLoads()]: AppRoutes.Downloads,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteGames()]: AppRoutes.GAMES,
    [getRouteLibrary()]: AppRoutes.LIBRARY,
    [getRouteGameDetails(':id')]: AppRoutes.GAME_DETAILS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteLogin()]: AppRoutes.Login,
    [getRouteRegister()]: AppRoutes.Register
}
