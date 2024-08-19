import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('profile')

    return (
        <div>
            {t('Page profile')} {id}
        </div>
    )
}

export default ProfilePage
