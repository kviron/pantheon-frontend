import { AxiosInstance } from 'axios'

export class ApiService {
    baseURL: string = ''
    api: AxiosInstance

    constructor(baseURL: string, api: AxiosInstance) {
        this.baseURL = baseURL
        this.api = api
    }
}
