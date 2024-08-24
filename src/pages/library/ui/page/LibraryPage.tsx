import { Layout } from 'antd'
import { LibraryPageSidebar } from '../sidebar'
import { LibraryPageContent } from '../content'
import { useQuery } from '@tanstack/react-query'
import { applicationService } from '@/entities/application'

export const LibraryPage = () => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['games', 'library'],
        queryFn: () => applicationService.getList(),
        select: data => data.data
    })

    return (
        <Layout>
            <LibraryPageSidebar
                games={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
            <LibraryPageContent />
        </Layout>
    )
}
