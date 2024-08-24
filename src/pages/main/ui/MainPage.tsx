import { useQuery } from '@tanstack/react-query'
import { ApplicationList, applicationService } from '@/entities/application'

const MainPage = () => {
    const {
        data: applications,
        isLoading,
        isFetching
    } = useQuery({
        queryKey: ['applications'],
        queryFn: () => applicationService.getList(),
        select: data => data.data,
        staleTime: 1000
    })

    return (
        <div>
            <ApplicationList
                applications={applications}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </div>
    )
}

export default MainPage
