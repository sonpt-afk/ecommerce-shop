import React from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { createUserApi } from '../../util/api';

const Register = () => {
    const onFinish = async (values) => {
        const { email, password, name } = values;

        const res = await createUserApi(name, email, password)
        if (res) {
            notification.success({
                message: "CREATE USER",
                description: "Success"
            })
        } else {
            notification.error({
                message: "CREATE USER",
                description: "error"
            })
        }
        console.log('Success:', res);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h3>Đăng ký</h3>
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
                layout="vertical">

                <Form.Item
                    label="Tên "
                    name="name"
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
                {/* <Form.Item
                    label="Số điện thoại
"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập sđt!' }, {
                        pattern: /^(\+?\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                        message: 'Số điện thoại không hợp lệ!'
                    }]}

                >
                    <Input />
                </Form.Item> */}
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