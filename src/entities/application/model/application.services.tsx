import { $api } from '@/shared/api/api'
import { Application } from './application.types.ts'
import { ApiService } from '@/shared/services'

class ApplicationService extends ApiService {
    buildQueryParams() {}

    getList() {
        return this.api.get<Application[]>(this.baseURL)
    }

    getById(applicationId: UUID) {
        return this.api.get<Application>(this.baseURL + `/${applicationId}`)
    }
}

export const applicationService = new ApplicationService('/applications', $api)
