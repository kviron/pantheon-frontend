import { AxiosInstance } from 'axios'

export class ApiService {
    baseURL: string = ''
    client: AxiosInstance

    constructor(baseURL: string, client: AxiosInstance) {
        this.baseURL = baseURL
        this.client = client
    }
}
