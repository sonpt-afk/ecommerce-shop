import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const nav = useNavigate()
    return (
        <div>
            <h3>Đăng ký</h3>
            <Form>
                <Form.Item
                    label="Họ "
                    name="first_name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên "
                    name="last_name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại
"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập sđt!' }, {
                        pattern: /^(\+?\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                        message: 'Số điện thoại không hợp lệ!'
                    }]}

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
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
            Đã có tài khoản ? đăng nhập tại < Link to="/account/login" > đây</ Link>

        </div >

    )
}

export default Register