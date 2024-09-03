import { TitleBar } from '@/shared/ui/titleBar'
import { ReactNode } from 'react'

type RootLayoutProps = {
    children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div>
            <TitleBar />
            {children}
        </div>
    )
}
