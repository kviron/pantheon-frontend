import { Rule } from 'antd/es/form'

export type ValidationObject<T> = {
    [K in keyof T]: Rule[]
}
