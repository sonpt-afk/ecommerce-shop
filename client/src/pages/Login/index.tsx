import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../util/api';
import { Spin } from "antd";
const Login = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { email, password } = values;

        const res = await loginApi(email, password);
        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token);
            notification.success({
                message: "LOGIN USER",
                description: "Success"
            });
            navigate("/")
        } else {
            notification.error({
                message: "LOGIN USER",
                description: res?.EM ?? "error"
            })
        }

        console.log('Success:', res);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Spin spinning={loading}>

                <h3>Đăng nhập</h3>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >

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
            </Spin>

        </div >

    )
}

export default Login