export enum AppRouters {
    MAIN = 'main',
    FORBIDDEN = 'forbidden',
    AUTH = 'auth',
    DIGITAL_TWIN = 'digital_twin',
    AODB = 'aodb',
    RMS = 'rms',
    NOT_FOUND = 'not_found'
}

export const GlobalRoutePath: Record<AppRouters, (path?: string) => string> = {
    [AppRouters.MAIN]: () => '/',
    [AppRouters.FORBIDDEN]: () => '/forbidden',
    [AppRouters.AUTH]: () => '/auth',
    [AppRouters.DIGITAL_TWIN]: (path: string = '') => `/digital_twin/${path}`,
    [AppRouters.AODB]: (path: string = '') => `/aodb/${path}`,
    [AppRouters.RMS]: (path: string = '') => `/rms/${path}`,
    // last
    [AppRouters.NOT_FOUND]: () => '*',
};
