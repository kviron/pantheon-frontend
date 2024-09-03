import { Loader } from '@/shared/ui/Loader'
import { WrapperPageLoader } from './pageLoader.layout.ts'

export const PageLoader = () => (
    <WrapperPageLoader>
        <Loader />
    </WrapperPageLoader>
)
