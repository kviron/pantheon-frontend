import { Button, Checkbox, Form, Input, Select, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../hooks/useAuth'
import { AuthRegisterForm } from '../model/auth.types'
import { AppLink } from '@/shared/ui/AppLink'
import { getRouteLogin } from '@/shared/const/router'
import { registerValidation } from '../model/auth.validation'

const { Option } = Select

export const RegisterForm = () => {
    const [form] = Form.useForm()
    const { t } = useTranslation('auth')
    const { onRegister } = useAuth()

    const onSubmit = (date: AuthRegisterForm) => {
        onRegister(date)
    }

    return (
        <Form
            form={form}
            layout='vertical'
            name='register'
            onFinish={onSubmit}
            style={{ maxWidth: 800, minWidth: 360 }}
            scrollToFirstError
        >
            <Form.Item>
                <Typography.Title>{t('Registration')}</Typography.Title>
            </Form.Item>
            <Form.Item<AuthRegisterForm>
                name='email'
                label={t('E-mail')}
                rules={registerValidation.email}
            >
                <Input />
            </Form.Item>

            <Form.Item<AuthRegisterForm>
                name='password'
                label={t('Password')}
                rules={registerValidation.password}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<AuthRegisterForm>
                name='confirm'
                label={t('Confirm password')}
                dependencies={['password']}
                hasFeedback
                rules={[
                    ...registerValidation.password,
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error(t('The new password that you entered do not match!')))
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<AuthRegisterForm>
                name='nickname'
                label={t('Nikname')}
                tooltip={t('What do you want others to call you?')}
                rules={registerValidation.nickname}
            >
                <Input />
            </Form.Item>

            <Form.Item<AuthRegisterForm>
                name='phone'
                label='Phone Number'
                rules={registerValidation.phone}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item<AuthRegisterForm>
                name='gender'
                label='Gender'
                rules={registerValidation.gender}
            >
                <Select placeholder={t('Select your gender')}>
                    <Option value='male'>{t('Male')}</Option>
                    <Option value='female'>{t('Female')}</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))
                    }
                ]}
            >
                <Checkbox>
                    {t('I have read the')}
                    <a href=''>{t('agreement')}</a>
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Space size={'middle'}>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        {t('Sign up')}
                    </Button>
                    {t('or')}
                    <AppLink href={getRouteLogin()}>{t('Sign in')}</AppLink>
                </Space>
            </Form.Item>
        </Form>
    )
}
