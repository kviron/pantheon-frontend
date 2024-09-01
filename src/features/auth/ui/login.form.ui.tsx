import { LockOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Checkbox, Divider, Flex, Form, Input, Space } from 'antd'
import { AuthLoginForm } from '../model/auth.types.ts'
import { getRouteForgot, getRouteRegister } from '@/shared/const/router.ts'
import { AppLink } from '@/shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../hooks/useAuth'
import { loginValidation } from '../model/auth.validation.ts'
import { Logo } from '@/shared/ui/Logo'

export type LoginFormProps = {
    goToLogin?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { goToLogin } = props

    const [form] = Form.useForm()
    const { t } = useTranslation('auth')
    const { onLogin } = useAuth()

    const onSubmit = (date: AuthLoginForm) => {
        onLogin(date)
    }

    return (
        <Form
            form={form}
            name='login'
            size='large'
            initialValues={{ remember: true }}
            style={{ maxWidth: 300, minWidth: 300 }}
            onFinish={onSubmit}
        >
            <Form.Item>
                <Flex
                    justify='center'
                    align='center'
                >
                    <Logo />
                </Flex>
            </Form.Item>
            <Form.Item
                name='email'
                rules={loginValidation.email}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder={t('E-mail')}
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={loginValidation.password}
            >
                <Input
                    prefix={<LockOutlined />}
                    type='password'
                    placeholder={t('Password')}
                />
            </Form.Item>
            <Form.Item>
                <Flex
                    justify='space-between'
                    align='center'
                >
                    <Form.Item
                        name='remember'
                        valuePropName='checked'
                        noStyle
                    >
                        <Checkbox>{t('Remember me')}</Checkbox>
                    </Form.Item>
                    <AppLink href={getRouteForgot()}>{t('Forgot password')}</AppLink>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button
                    block
                    type='primary'
                    htmlType='submit'
                >
                    {t('Log in')}
                </Button>
                <Divider plain>{t('or')}</Divider>
                <AppLink href={getRouteRegister()}>
                    <Flex justify='center'>
                        <Space align='center'>
                            {t('Create your account')} <ArrowRightOutlined style={{ fontSize: '12px' }} />
                        </Space>
                    </Flex>
                </AppLink>
            </Form.Item>
        </Form>
    )
}
