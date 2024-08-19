import { createI18nContext } from '@/shared/config/i18n/i18n.tsx';
import { I18nContext } from '@/shared/context/i18n';
import { FC } from 'react';

export const I18nProvider: FC<{
    dict?: Record<string, Record<string, any>>;
    locale?: string;
    children?: JSX.Element;
}> = props => {
    const value = createI18nContext(props.dict, props.locale);

    return <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>;
};
