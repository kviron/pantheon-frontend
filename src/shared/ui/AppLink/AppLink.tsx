import { Link, LinkProps, Path } from 'react-router-dom'
import { memo, ReactNode } from 'react'
import s from './AppLink.module.scss'
import cl from 'classnames'

interface AppLinkProps extends Omit<LinkProps, 'to'> {
    className?: string
    children?: ReactNode
    href: string | Partial<Path>
}

export const AppLink = memo((props: AppLinkProps) => {
    const { href, className, children, color = 'primary', ...otherProps } = props

    return (
        <Link
            to={href}
            className={cl(s.AppLink, { [s[color]]: true }, className)}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
