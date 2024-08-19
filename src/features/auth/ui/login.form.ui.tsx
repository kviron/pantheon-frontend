import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { AuthForm } from '../model/auth.types.ts'
import { getRouteRegister } from '@/shared/const/router.ts'
import { AppLink } from '@/shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/features/auth'

export const LoginForm = () => {
    const [form] = Form.useForm()
    const { t } = useTranslation('auth')
    const { onAuth } = useAuth()

    const onSubmit = (date: AuthForm) => {
        onAuth(date)
    }

    return (
        <Form
            form={form}
            name='login'
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onSubmit}
        >
            <Form.Item
                name='email'
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                    },
                    { required: true, message: 'Please input your Username!' }
                ]}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder='E-mail'
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type='password'
                    placeholder='Password'
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
                    <AppLink href={getRouteRegister()}>{t('Forgot password')}</AppLink>
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
                {t('or')} <AppLink href={getRouteRegister()}>{t('Register now!')}</AppLink>
            </Form.Item>
        </Form>
    )
}
