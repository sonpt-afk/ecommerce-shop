import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()
    return (
        <div>
            <h3>Đăng ký</h3>
            <Form>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập  mật khẩu!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập

                    </Button>
                    <Button type="primary" danger htmlType="submit">
                        < Link to="/forgot-password" > Quên mật khẩu</ Link>

                    </Button>

                </Form.Item>
            </Form>
            Chưa có tài khoản, đăng ký tại
            < Link to="/account/login" > đây</ Link>

        </div >

    )
}

export default Login