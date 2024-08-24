import { Wrapper } from './controls.tsx'
import { ApplicationListItem, ApplicationListItemFormat } from '../item'
import { Skeleton } from 'antd'
import { Application } from '../../model/application.types'

type ApplicationListProps = {
    applications?: Application[]
    isLoading?: boolean
    isFetching?: boolean
}

const ApplicationList = (props: ApplicationListProps) => {
    const { applications, isLoading } = props

    if (isLoading) {
        return (
            <Skeleton
                loading={isLoading}
                active
                avatar
            ></Skeleton>
        )
    }

    return (
        <Wrapper>
            {applications?.map(application => (
                <ApplicationListItem
                    key={application.id}
                    application={application}
                    format={ApplicationListItemFormat.Row}
                />
            ))}
        </Wrapper>
    )
}

ApplicationList.Item = ApplicationListItem

export { ApplicationList }
