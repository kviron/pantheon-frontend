import React, { useTransition } from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { ForgotForm } from '../model/forgot.types'

export const ForgotPage = () => {
    const { t } = useTranslation()

    const onFinish: FormProps<ForgotForm>['onFinish'] = values => {
        console.log('Success:', values)
    }

    const onFinishFailed: FormProps<ForgotForm>['onFinishFailed'] = errorInfo => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item<ForgotForm>
                label='E-mail'
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    {t('Submit')}
                </Button>
            </Form.Item>
        </Form>
    )
}
