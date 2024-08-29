import { MainEntry } from '@/app/entry/main.entry.tsx'
import { useUserStore } from '@/entities/user'
import { useEffect } from 'react'

const App = () => {
    const { init, isInit } = useUserStore()

    // init User
    useEffect(() => {
        if (!isInit) {
            init()
        }
    }, [init, isInit])

    return <MainEntry />
}

export default App
